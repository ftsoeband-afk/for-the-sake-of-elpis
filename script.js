(() => {
  const boot = document.querySelector(".boot");
  const body = document.body;
  const signal = document.querySelector(".signal");

  // The intro is intentionally short: roughly one second.
  window.setTimeout(() => {
    boot?.classList.add("is-done");
    body.classList.remove("is-booting");
  }, 1750);

  // A very subtle "signal sweep" after the intro.
  window.setTimeout(() => {
    if (!signal) return;
    signal.animate(
      [
        { opacity: 0, transform: "translateY(-15%)" },
        { opacity: 0.55, transform: "translateY(0%)" },
        { opacity: 0, transform: "translateY(15%)" }
      ],
      { duration: 850, easing: "cubic-bezier(.4,0,.2,1)" }
    );
  }, 980);

  // Prevent placeholder social links from jumping to the top.
  document.querySelectorAll('[data-placeholder="true"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
})();
