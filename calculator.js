window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}




function setupIntialValues() {
  // Put some default values in the inputs
  let defaultValues = {
    amount: 1000, years: 2, rate: 4
  }
  // Get the inputs from the DOM.
  const amountUI = document.getElementById("loan-amount");
  const yearsUI = document.getElementById("loan-years");
  const rateUI = document.getElementById("loan-rate");
  //set the initial values to the inputs
  amountUI.value = defaultValues.amount;
  yearsUI.value = defaultValues.years;
  rateUI.value = defaultValues.rate;
  // Call a function to calculate the current monthly payment
  update();
}



function update() {
  // Get the current values from the UI
  let currentValues = getCurrentUIValues();
  // Update the monthly payment
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
function calculateMonthlyPayment(values) {
  let interest = values.rate/100/12;
  let payments = values.years * 12;
  // calculate the monthly payment. 
  let monthly = (values.amount * interest)/(1-Math.pow((1 + interest), -payments));
  //leave only 2 decimal places and return the monthly payment
  return monthly.toFixed(2);
}

function updateMonthly(monthly) {
  // update the UI to show the value.
  let monthlyPayment = document.getElementById('monthly-payment')
  // Given a string representing the monthly payment value,
  monthlyPayment.innerText = `$${monthly}`
}
