const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const weightGuide = document.querySelector("#weight-guide");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid Weight${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show results
    result.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.6) {
      weightGuide.innerHTML = `You are under Weight`;
    } else if (bmiValue > 18.6 && bmiValue < 24.9) {
      weightGuide.innerHTML = `Normal Range`;
    } else {
      weightGuide.innerHTML = `You are over weight`;
    }
  }
});
