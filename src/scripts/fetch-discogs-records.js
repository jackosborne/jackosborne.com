/* eslint-disable no-console */
const fs = require("fs/promises");
const path = require("path");

const DISCOGS_USERNAME = process.env.DISCOGS_USERNAME;
const DISCOGS_TOKEN = process.env.DISCOGS_TOKEN;

if (!DISCOGS_USERNAME || !DISCOGS_TOKEN) {
  console.error("Missing DISCOGS_USERNAME or DISCOGS_TOKEN in your environment.");
  process.exit(1);
}

const OUTPUT_PATH = path.join(__dirname, "..", "_data", "records.json");

async function fetchCollectionPage(page = 1, perPage = 100) {
  const url = `https://api.discogs.com/users/${DISCOGS_USERNAME}/collection/folders/0/releases?page=${page}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Discogs token=${DISCOGS_TOKEN}`,
      "User-Agent": "jackosborne-records/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Discogs request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function normaliseRecord(item) {
  const basic = item.basic_information || {};
  const artists = Array.isArray(basic.artists) ? basic.artists : [];
  const artist = artists.length ? artists[0].name : "Unknown artist";

  return {
    id: basic.id || item.id,
    artist,
    title: basic.title || "Untitled",
    year: basic.year || "",
    cover_image: basic.cover_image || "",
    discogs_url: basic.id ? `https://www.discogs.com/release/${basic.id}` : "#",
    genres: basic.genres || [],
    styles: basic.styles || [],
    formats: basic.formats || [],
  };
}

async function fetchAllRecords() {
  const perPage = 100;
  const firstPage = await fetchCollectionPage(1, perPage);

  const totalPages = firstPage.pagination?.pages || 1;
  const allItems = [...(firstPage.releases || [])];

  for (let page = 2; page <= totalPages; page += 1) {
    const data = await fetchCollectionPage(page, perPage);
    allItems.push(...(data.releases || []));
  }

  return allItems
    .map(normaliseRecord)
    .filter((record) => record.cover_image);
}

async function main() {
  const records = await fetchAllRecords();

  records.sort((a, b) => {
    const artistCompare = a.artist.localeCompare(b.artist);
    if (artistCompare !== 0) return artistCompare;
    return a.title.localeCompare(b.title);
  });

  await fs.writeFile(
    OUTPUT_PATH,
    JSON.stringify(records, null, 2),
    "utf8"
  );

  console.log(`Saved ${records.length} records to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});