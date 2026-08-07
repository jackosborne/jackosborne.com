document.addEventListener("DOMContentLoaded", () => {
  const players = document.querySelectorAll(".post-audio");

  players.forEach((wrap) => {
    const audio = wrap.querySelector(".post-audio__audio");
    const btn = wrap.querySelector(".post-audio__btn");
    const icon = wrap.querySelector(".post-audio__icon");
    const text = wrap.querySelector(".post-audio__text");
    const progress = wrap.querySelector(".post-audio__progress");

    if (!audio || !btn || !icon || !text || !progress) return;

    const PLAY_SVG = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M5 17.3336V6.66698C5 5.78742 5 5.34715 5.18509 5.08691C5.34664 4.85977 5.59564 4.71064 5.87207 4.67499C6.18868 4.63415 6.57701 4.84126 7.35254 5.25487L17.3525 10.5882L17.3562 10.5898C18.2132 11.0469 18.642 11.2756 18.7826 11.5803C18.9053 11.8462 18.9053 12.1531 18.7826 12.4189C18.6418 12.7241 18.212 12.9537 17.3525 13.4121L7.35254 18.7454C6.57645 19.1593 6.1888 19.3657 5.87207 19.3248C5.59564 19.2891 5.34664 19.1401 5.18509 18.9129C5 18.6527 5 18.2132 5 17.3336Z"
          fill="currentColor"/>
      </svg>
    `;

    const PAUSE_SVG = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M15 5.5V18.5C15 18.9647 15 19.197 15.0384 19.3902C15.1962 20.1836 15.816 20.8041 16.6094 20.9619C16.8026 21.0003 17.0349 21.0003 17.4996 21.0003C17.9642 21.0003 18.1974 21.0003 18.3906 20.9619C19.184 20.8041 19.8041 20.1836 19.9619 19.3902C20 19.1987 20 18.9687 20 18.5122V5.48777C20 5.03125 20 4.80087 19.9619 4.60938C19.8041 3.81599 19.1836 3.19624 18.3902 3.03843C18.197 3 17.9647 3 17.5 3C17.0353 3 16.8026 3 16.6094 3.03843C15.816 3.19624 15.1962 3.81599 15.0384 4.60938C15 4.80257 15 5.03534 15 5.5Z"
          fill="currentColor"/>
        <path d="M4 5.5V18.5C4 18.9647 4 19.197 4.03843 19.3902C4.19624 20.1836 4.81599 20.8041 5.60938 20.9619C5.80257 21.0003 6.0349 21.0003 6.49956 21.0003C6.96421 21.0003 7.19743 21.0003 7.39062 20.9619C8.18401 20.8041 8.8041 20.1836 8.96191 19.3902C9 19.1987 9 18.9687 9 18.5122V5.48777C9 5.03125 9 4.80087 8.96191 4.60938C8.8041 3.81599 8.18356 3.19624 7.39018 3.03843C7.19698 3 6.96465 3 6.5 3C6.03535 3 5.80257 3 5.60938 3.03843C4.81599 3.19624 4.19624 3.81599 4.03843 4.60938C4 4.80257 4 5.03534 4 5.5Z"
          fill="currentColor"/>
      </svg>
    `;

    let duration = null;

    const isValidDuration = (d) => Number.isFinite(d) && d > 0;

    const minsCeil = (seconds) => {
      if (!Number.isFinite(seconds) || seconds <= 0) return 0;
      return Math.ceil(seconds / 60);
    };

    const setIdleLabel = () => {
      if (!isValidDuration(duration) && isValidDuration(audio.duration)) {
        duration = audio.duration;
      }

      wrap.classList.remove("is-playing");
      icon.innerHTML = PLAY_SVG;

      if (!isValidDuration(duration)) {
        text.textContent = "Loading…";
        return;
      }

      const hasProgress = audio.currentTime > 0.25;
      const remaining = duration - audio.currentTime;

      if (hasProgress && remaining > 0.25) {
        text.textContent = `${minsCeil(remaining)} min left`;
      } else {
        text.textContent = `${minsCeil(duration)} min`;
      }
    };

    const setPlayingLabel = () => {
      const activeDuration = isValidDuration(duration) ? duration : audio.duration;
      const remaining = activeDuration - audio.currentTime;
      const left = minsCeil(remaining);

      wrap.classList.add("is-playing");
      icon.innerHTML = PAUSE_SVG;
      text.textContent = Number.isFinite(left) && left > 0 ? `${left} min left` : "Playing…";
    };

    const updateProgress = () => {
      if (!isValidDuration(duration) && isValidDuration(audio.duration)) {
        duration = audio.duration;
      }
      if (!isValidDuration(duration)) return;

      const pct = (audio.currentTime / duration) * 100;
      progress.style.width = `${Math.max(0, Math.min(100, pct))}%`;

      if (!audio.paused) {
        setPlayingLabel();
      }
    };

    text.textContent = "Loading…";
    icon.innerHTML = PLAY_SVG;

    const onMeta = () => {
      if (isValidDuration(audio.duration)) {
        duration = audio.duration;
      }
      setIdleLabel();
    };

    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("timeupdate", updateProgress);

    audio.addEventListener("ended", () => {
      progress.style.width = "0%";
      audio.currentTime = 0;
      setIdleLabel();
    });

    audio.addEventListener("pause", () => {
      setIdleLabel();
    });

    audio.addEventListener("play", () => {
      if (!isValidDuration(duration) && isValidDuration(audio.duration)) {
        duration = audio.duration;
      }
      setPlayingLabel();
    });

    btn.addEventListener("click", async () => {
      document.querySelectorAll(".post-audio__audio").forEach((a) => {
        if (a !== audio) a.pause();
      });

      if (!audio.paused) {
        audio.pause();
        return;
      }

      try {
        await audio.play();
        updateProgress();
      } catch (e) {
        text.textContent = "Tap to play";
        icon.innerHTML = PLAY_SVG;
        wrap.classList.remove("is-playing");
      }
    });

    audio.load();
  });
});