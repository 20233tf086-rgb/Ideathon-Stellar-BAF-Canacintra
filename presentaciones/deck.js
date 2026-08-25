(function () {
  const slides = [...document.querySelectorAll(".slide")];
  const pos = document.getElementById("pos");
  let i = Math.max(0, parseInt(location.hash.replace("#", ""), 10) - 1 || 0);

  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((s, k) => s.classList.toggle("on", k === i));
    if (pos) pos.textContent = i + 1 + " / " + slides.length;
    history.replaceState(null, "", "#" + (i + 1));
  }

  document.addEventListener("keydown", (e) => {
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) {
      e.preventDefault();
      show(i + 1);
    }
    if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(e.key)) {
      e.preventDefault();
      show(i - 1);
    }
    if (e.key === "Home") show(0);
    if (e.key === "End") show(slides.length - 1);
    if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("a, button, textarea, input")) return;
    show(i + (e.clientX > innerWidth * 0.35 ? 1 : -1));
  });

  show(i);
})();
