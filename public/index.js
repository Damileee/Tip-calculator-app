
let billInput = document.getElementById("billInput");
let peopleInput = document.getElementById("peopleInput");
let active = document.querySelector(".active");
let inputs = document.querySelectorAll('.input')
let button = document.querySelectorAll(".nbt");
let buttonSelected = document.getElementsByClassName('active');
let customTip = document.getElementById("customTip");
let tipAmount = document.querySelector("#tipAmt");
let totalAmount = document.querySelector("#total");
let errorMessage = document.getElementById("zero");
let resetBtn = document.getElementById("btn");

//EventListeners

customTip.addEventListener('click', calculateCustomTip);

button.forEach((button) => {
  button.addEventListener('click', calculateTip);
})

//Reset
resetBtn.addEventListener('click', resetAll)


//Oninput

billInput.oninput = function(event){
  dealWithResetButton();

  if(customTip.value !== '' && (peopleInput.value !== '' || peopleInput.value > 0) ){
      calculate();
  }

}


customTip.oninput = function(){
  dealWithResetButton();

  if ((billInput.value !== '' || billInput.value < 0) && (peopleInput.value !== '' || peopleInput.value > 0) ){
    calculate();
  }

}

peopleInput.oninput = function(){
  dealWithResetButton();

  if(peopleInput.value <= 0 || peopleInput.value === '0'){
    errorMessage.innerText = "Can't be zero";
    errorMessage.style.color = 'red';
    peopleInput.style.outlineColor = 'red';
    tipAmount.innerText = '0.00';
    totalAmount.innerText = '0.00';
  }else{
    errorMessage.innerText = '';
    peopleInput.style.outlineColor = '';
    calculate();
  }

}

//Functions

function calculate(){
  let tipPerPerson;
  let totalPerPerson;
  let tipPercentage;

  if(buttonSelected.length == 0){
    tipPercentage = 0;
  }else{
    if(customTip.classList.contains('active')){
      tipPercentage = customTip.value;
    }else{
      tipPercentage = buttonSelected[0].value;
    }
  }

  tipPerPerson = (billInput.value * tipPercentage * 0.01)/peopleInput.value;
  totalPerPerson = (billInput.value/peopleInput.value);
  tipPerPerson = tipPerPerson.toFixed(2);
  totalPerPerson = totalPerPerson.toFixed(2);


  tipAmount.innerText = tipPerPerson;
  totalAmount.innerText = totalPerPerson;

}

function calculateTip(){
  button.forEach((button) => {
    button.classList.remove('active');
  });
  this.classList.add('active');
  customTip.classList.remove('active');
  calculate();
}

function calculateCustomTip(){
  button.forEach((button) => {
    button.classList.remove('active');
  });
  this.classList.add('active');

  if((billInput.value !== '' || billInput.value < 0) && (peopleInput.value !== '' || peopleInput.value > 0) ){
    calculate();
  }
}

//Reset
function dealWithResetButton(){
  if(customTip.value === '' && billInput.value === '' && peopleInput.value === ''){
    resetBtn.disabled = false;
    resetAll.classList.add('has-reset-activated');
    peopleInput.style.borderColor = '';
  }else{
    resetBtn.disabled = false;
    resetBtn.classList.add('has-reset-activated');
  }
}

function resetAll(){
  button.forEach((button) => {
    button.classList.remove('active');
  });

  inputs.forEach((input) => {
    input.value = '';
  });

  tipAmount.innerText = '0.00';
  totalAmount.innerText = '0.00';

  resetBtn.disabled = true;
  errorMessage.innerText = '';
  peopleInput.style.borderColor = '';
  resetBtn.classList.remove('has-reset-activated');

}


 