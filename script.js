function calculateBMI() {
  // 1. Get the values from the inputs
  let w = document.getElementById("weight").value;
  let h = document.getElementById("height").value;

  // 2. Get the result element so we can change it
  let resultText = document.getElementById("result");

  // 3. Calculate BMI (Weight / Height squared)
  let bmi = w / (h * h);

  // 4. Use if/else to determine health status and colors
  if (bmi < 18.5) {
    resultText.innerHTML = "Underweight (BMI: " + bmi.toFixed(1) + ")";
    resultText.style.color = "orange";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText.innerHTML = "Normal Weight (BMI: " + bmi.toFixed(1) + ")";
    resultText.style.color = "green";
  } else {
    resultText.innerHTML = "Overweight (BMI: " + bmi.toFixed(1) + ")";
    resultText.style.color = "red";
  }
}
