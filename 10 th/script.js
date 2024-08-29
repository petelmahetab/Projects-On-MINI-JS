document.querySelector("#button").addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the height and weight values from input fields
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const showResult = document.querySelector('#Result');
  const showDetails=document.querySelector('#detail');

  // Validate height and weight
  if (isNaN(height) || height <= 0) {
      showResult.innerHTML = 'Height is not valid. Please enter a positive number.';
  } else if (isNaN(weight) || weight <= 0) {
      showResult.innerHTML = 'Weight is not valid. Please enter a positive number.';
  } else {
      // Convert height from cm to meters
      const heightInMeters = height / 100;

      // Calculate BMI
      const bmi = weight / (heightInMeters * heightInMeters);

      // Display the result
      showResult.innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;

      if(bmi < 18.5){showDetails.innerHTML='UNDER WEIGHT '}
      else if(bmi > 24.9 && bmi <=18.5){showDetails.innerHTML='NORMAL WEIGHT'}
      else{showDetails.innerHTML='OVER WEIGHT'}
  }
});
