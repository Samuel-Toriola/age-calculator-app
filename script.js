'use strict';
const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');

const btnSubmit = document.querySelector('.submit');

const form = document.querySelector('.field');
const inputFields = document.querySelectorAll('.input-field');
const errorEmpty = document.querySelectorAll('.error-span--empty');
const errorInvalid = document.querySelectorAll('.error-span--invalid');
const errorForm = document.querySelector('.error-span--form');

const displayYear = document.querySelector('.years');
const displayMonth = document.querySelector('.months');
const displayDay = document.querySelector('.days');

// /////////////////////////////////////////////////////////////////////////////////////////

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
let yourMonth = '';
let yourYear = '';
let yourDay = '';
btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  // CHECKING FOR INPUT
  if (inputDay.value === '') {
    inputFields[0].classList.add('error');
    errorEmpty[0].style.display = 'inline-block';
    yourDay = '--';
  } else {
    inputFields[0].classList.remove('error');
    errorEmpty[0].style.display = 'none';
    yourDay = Math.abs(inputDay.value - currentDay);
  }
  if (inputMonth.value === '') {
    inputFields[1].classList.add('error');
    errorEmpty[1].style.display = 'inline-block';
    yourMonth = '--';
  } else {
    inputFields[1].classList.remove('error');
    errorEmpty[1].style.display = 'none';
    yourMonth = Math.abs(inputMonth.value - currentMonth);
  }
  if (inputYear.value === '') {
    inputFields[2].classList.add('error');
    errorEmpty[2].style.display = 'inline-block';
    yourYear = '--';
  } else {
    inputFields[2].classList.remove('error');
    errorEmpty[2].style.display = 'none';
    yourYear = Math.abs(inputYear.value - currentYear);
  }

  // CHECKING FOR INPUT VALIDATION

  const validDay = inputDay.value < 1 || inputDay.value > 31;
  const validMonth = inputMonth.value < 1 || inputMonth.value > 12;
  const validYear = inputYear.value > currentYear;
  if (inputDay.value && validDay) {
    inputFields[0].classList.add('error');
    errorInvalid[0].style.display = 'inline-block';
    displayDay.textContent = '--';
  } else {
    errorInvalid[0].style.display = 'none';
    displayDay.textContent = yourDay;
  }
  if (inputMonth.value && validMonth) {
    inputFields[1].classList.add('error');
    errorInvalid[1].style.display = 'inline-block';
    displayMonth.textContent = '--';
  } else {
    errorInvalid[1].style.display = 'none';
    displayMonth.textContent = yourMonth;
  }
  if (inputYear.value && validYear) {
    inputFields[2].classList.add('error');
    errorInvalid[2].style.display = 'inline-block';
    displayYear.textContent = '--';
  } else {
    errorInvalid[2].style.display = 'none';
    displayYear.textContent = yourYear;
  }

  // INPUTING DATE
  const getDate = function (day, month, year) {
    // Validate the inputted date
    const maxDaysInMonth = new Date(year.value, month.value, 0).getDate();

    if (day.value > maxDaysInMonth) {
      errorForm.style.display = 'inline-block';
    } else {
      errorForm.style.display = 'none';
    }
  };

  // Usage example
  getDate(inputDay, inputMonth, inputYear);
});
