window.onload = () => {
  const as = document.querySelector("aside");
  const b = document.querySelector('button[aria-label="menu_toggle"]');

  b.onclick = function () {
    console.log("");
    as.classList.toggle("hh");
  };
};
