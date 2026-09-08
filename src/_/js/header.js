(() => {
  const copyButton = document.querySelector("[data-copy-email]");
  const feedback = copyButton?.querySelector(".email__feedback");
  const copyStatus = document.querySelector(".copy-status");

  if (!copyButton || !feedback || !copyStatus) return;

  let feedbackTimer;
  let pointerActivation = false;

  const copyWithFallback = (text) => {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();

    const copied = document.execCommand("copy");
    input.remove();

    if (!copied) throw new Error("Copy command failed");
  };

  const copyEmail = async (email) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
      return;
    }

    copyWithFallback(email);
  };

  const showFeedback = (message) => {
    window.clearTimeout(feedbackTimer);
    feedback.textContent = message;
    copyStatus.textContent = message;
    copyButton.classList.add("is-copied");

    feedbackTimer = window.setTimeout(() => {
      copyButton.classList.remove("is-copied");
    }, 2400);
  };

  copyButton.addEventListener("pointerdown", () => {
    pointerActivation = true;
  }, { passive: true });

  copyButton.addEventListener("click", async () => {
    try {
      await copyEmail(copyButton.dataset.copyEmail);
      showFeedback("Email copied");
    } catch {
      showFeedback("Couldn’t copy email");
    } finally {
      if (pointerActivation) copyButton.blur();
      pointerActivation = false;
    }
  });
})();
