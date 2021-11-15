const btn = document.querySelector("#btn_luckyMe");
const logoImage = document.querySelector("#logo_img");

const handleClick = (event) => {
  event.preventDefault();
  if (event) {
    logoImage.src = `./images/logo_Il_makiage.svg.png`;
  }
};
btn.addEventListener("click", handleClick);
