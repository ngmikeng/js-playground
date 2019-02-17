
const changeNum = () => {
  const randomNum = Math.round(Math.random() * 100);
  const degrees = Math.round((randomNum / 100) * 180);
  const rootElement = document.querySelector(":root");
  const loaderValue = document.querySelector(".loader-value");
  loaderValue.innerText = randomNum;

  rootElement.style.setProperty("--rotation", `${degrees}deg`);
};

setInterval(() => {
  changeNum();
}, 2000);
