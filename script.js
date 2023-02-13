`use script`;

const input = document.querySelector(".tipi");
const btnCalc = document.querySelector(".check");
const tip = document.querySelector(`.tip`);

const updateUI = function (value) {
  document.querySelector(`.bill`).textContent = input.value;
  tip.textContent = Math.trunc(input.value * value);
  document.querySelector(`.total`).textContent = Math.trunc(
    Number(input.value) + Number(tip.textContent)
  );
};

btnCalc.addEventListener(`click`, function () {
  if (input.value > 50 && input.value <= 250) {
    updateUI(0.15);
  } else if (input.value <= 50 && input.value > 0) {
    updateUI(0.2);
  } else if (input.value > 250) {
    updateUI(0.1);
  } else if (input.value <= 0) {
    alert(`Invalid number!`);
  }
  input.value = ``;
});
