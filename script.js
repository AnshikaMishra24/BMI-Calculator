function calculateBMI() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight) {
    alert("Please enter both values.");
    return;
  }

  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  document.getElementById("result").innerText = `Your BMI is ${bmi} (${category})`;
}
