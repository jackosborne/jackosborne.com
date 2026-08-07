import { rawAliases } from './raw_aliases.js';

const response = await fetch('/data/enriched_checkins.json');
const checkins = await response.json();
const map = L.map('map').setView([40.71629785715124, -73.97815704345705], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZW5yb2Jzb2tjYWoiLCJhIjoiY2ttdjF6OGQ0MDB4ZzJ1cm5leHQ4ankwdCJ9.RBaI-h5fqhYIZBnpYpP8RA'
}).addTo(map);

let circles = [];
let activeCircle = null;
let activeCircleData = null;
let iconMap = {};

const categoryAliases = Object.fromEntries(
  Object.entries(rawAliases).map(([k, v]) => [
    k.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '').trim(),
    v.toLowerCase().replace(/[^a-z0-9]/g, '').trim()
  ])
);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function formatTime(dateStr) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);
}

function getIconPath(category, iconMap) {
  if (!category) return iconMap['default'];

  const normalized = category
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '')
    .trim();

  const mappedKey = categoryAliases[normalized] || normalized;

  return (
    iconMap[mappedKey] ||
    iconMap[Object.keys(iconMap).find(k => k.includes(mappedKey))] ||
    iconMap['default']
  );
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const layout  = document.getElementById("layout");
  const content = document.getElementById("sidebar-content");

  // 1) Remove the “open” classes to start the slide-out
  sidebar.classList.remove("open");
  layout.classList.remove("sidebar-open");

  // 2) Wait for the CSS transition to end on the sidebar
  const onTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;  // or whichever property you animate
    // Now it’s fully closed—clear the old markup
    content.innerHTML = "";
    sidebar.removeEventListener("transitionend", onTransitionEnd);
  };
  sidebar.addEventListener("transitionend", onTransitionEnd);

  // 3) Deselect your active marker
  if (activeCircle) {
    const el = activeCircle.getElement();
    if (el) el.classList.remove("active");
  }
  activeCircle = null;
  activeCircleData = null;
}

function drawCircles(data) {
  circles.forEach(c => map.removeLayer(c));
  circles = [];

  const zoom = map.getZoom();
  const zoomFactor = Math.min(18, Math.max(14, 18 - zoom));

  data.forEach(entry => {
    const { latitude, longitude, venueName, checkin_count, checkin_dates, category } = entry;

    const radius = Math.max(2, Math.sqrt(checkin_count) * zoomFactor * 0.6);
    const iconSize = radius * 2;

    const iconPath = getIconPath(category, iconMap);

    const iconHTML = iconPath
      ? `<div class="custom-icon" style="width:${iconSize}px; height:${iconSize}px;">
           <img src="${iconPath}" style="width:100%; height:100%;" />
         </div>`
      : '';

    const icon = L.divIcon({
      html: iconHTML,
      className: '',
      iconSize: [iconSize, iconSize],
      iconAnchor: [iconSize / 2, iconSize / 2]
    });

    const marker = L.marker([latitude, longitude], {
      icon,
      interactive: true,
      keyboard: false
    }).addTo(map);

    marker.on('click', () => {
      if (activeCircleData === entry) {
        closeSidebar();
        return;
      }

      activeCircleData = entry;

      if (activeCircle && activeCircle.getElement()) {
        const prevEl = activeCircle.getElement();
        prevEl.classList.remove('active');
        const prevIcon = prevEl.querySelector('.custom-icon');
        if (prevIcon) prevIcon.classList.remove('active');
      }

      activeCircle = marker;

      const el = marker.getElement();
      if (el) {
        el.classList.add('active');
        const innerIcon = el.querySelector('.custom-icon');
        if (innerIcon) innerIcon.classList.add('active');
      }

      // new: exactly the same split, but also plug in entry.shouts[i]
      const datesList = checkin_dates
  .split(', ')
  .map((date, i) => {
    const photoUrls = entry.photos?.[i] || [];
    const photosHtml = photoUrls.length
      ? `<div class="photos">
           ${photoUrls
             .map(
               url => `<img src="${url}" alt="Check-in photo" class="checkin-photo" loading="lazy"/>`
             )
             .join('')}
         </div>`
      : '';

    return `
      <div class="checkin">
        <hr />
        <div class="content">
          <div class="venue--icon"></div>
          <div>${formatDate(date)}</div>

          ${entry.events[i]
            ? `<div class="event">
                ${entry.events[i]}
            </div>`
            : ''}

          ${entry.shouts[i]
            ? `<div class="shout">${entry.shouts[i]}</div>`
            : ''}

          ${photosHtml}
        </div>
      </div>
    `;
  })
  .join('');

      const sidebarContent = `
        <div class="module">
          <div class="venue">
            <div class="venue--icon">
              ${iconPath ? `<img src="${iconPath}" alt="${category}" />` : ''}
            </div>
            <div class="venue--info">
              <h2>${venueName}</h2>
              <h3>${category || ''}</h3>
            </div>
            <button id="close-btn">×</button>
          </div>
        </div>
        <div class="module">
          <div class="card">
            <div class="heading">
              <p><strong>${checkin_count}</strong> Check-in${checkin_count > 1 ? 's' : ''}</p>
            </div>
            <div>${datesList}</div>
          </div>
        </div>
      `;

      document.getElementById('sidebar-content').innerHTML = sidebarContent;
      document.getElementById('layout').classList.add('sidebar-open');
      document.getElementById('sidebar').classList.add('open');

      document.getElementById('close-btn').addEventListener('click', closeSidebar);
    });

    marker.on('mouseover', () => {
      const el = marker.getElement();
      if (el) el.style.cursor = 'pointer';
    });

    marker.on('mouseout', () => {
      const el = marker.getElement();
      if (el) el.style.cursor = 'default';
    });

    const tooltipContent = `
      <span><strong>${venueName}</strong></span>
      <span>${category || ''}</span>
      <span>${checkin_count} check-in${checkin_count > 1 ? 's' : ''}</span>
    `;

    marker.bindTooltip(tooltipContent, {
      permanent: false,
      direction: 'top',
      className: 'custom-tooltip'
    });

    circles.push(marker);
  });
}

let checkinData = [];

Promise.all([
  fetch('/data/venues.geojson').then(r => r.json()),
  fetch('/data/icon_map.json').then(r => r.json())
]).then(([geojson, icons]) => {
  iconMap = Object.fromEntries(
    Object.entries(icons).map(([key, value]) => [
      key.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '').trim(),
      value
    ])
  );

  const validFeatures = geojson.features.filter(feat => {
    const coords = feat.geometry && feat.geometry.coordinates;
    return Array.isArray(coords) && coords.length === 2 && coords[0] != null && coords[1] != null;
  });

  console.log(
    'total features:', geojson.features.length,
    '→ valid features:', validFeatures.length
  );

  checkinData = validFeatures.map(feat => {
    const p = feat.properties;
    const [lng, lat] = feat.geometry.coordinates;
    const dates = p.checkins.map(ci => ci.checkin_date);
  
    return {
      latitude:      lat,
      longitude:     lng,
      venueName:     p.venueName,
      checkin_count: dates.length,
      checkin_dates:  dates.join(', '),
      shouts:         p.checkins.map(ci => ci.shout),
      events:        p.checkins.map(ci => ci.event_name),
      photos:        p.checkins.map(ci => ci.photos || []),
      category:      p.category
    };
  });

  // sum up all the check-in counts
const totalCheckins = checkinData.reduce((sum, v) => sum + v.checkin_count, 0);
// number of unique venues
const totalVenues   = checkinData.length;

document.getElementById('checkinCount').textContent = totalCheckins.toLocaleString();
document.getElementById('venueCount')  .textContent = totalVenues  .toLocaleString();


  drawCircles(checkinData);
})
.catch(err => console.error(err));

map.on('zoomend', () => {
  if (checkinData.length) drawCircles(checkinData);
});