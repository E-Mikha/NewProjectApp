const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';

plusBtn.onclick = function () {
  action = '+';
};

minusBtn.onclick = function () {
  action = '-';
};

submitBtn.onclick = function () {
  if (action == '+') {
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  }

  if (action == '-') {
    const sum = Number(input1.value) - Number(input2.value);
    resultElement.textContent = sum;
  }
};

// plusBtn.addEventListener('click', () => {
//   console.log('+');
// });

// minusBtn.addEventListener('click', () => {
//   console.log('-');
// });

// submitBtn.addEventListener('click', () => {
//   console.log('click');
// });
