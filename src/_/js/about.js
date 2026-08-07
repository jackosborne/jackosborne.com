document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".animate");

  containers.forEach((container) => {
    const paths = container.querySelectorAll("svg path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = length;
    });

    container.addEventListener("mouseenter", () => {
      paths.forEach((path) => {
        path.style.transition = "stroke-dashoffset 2.5s ease-in-out";
        path.style.strokeDashoffset = "0";
      });
    });

    container.addEventListener("mouseleave", () => {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.transition = "none";
        path.style.strokeDashoffset = length;
      });
    });
  });
});
