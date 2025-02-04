'use strict';

const allPopulations = document.getElementsByClassName('population');
const total = document.getElementsByClassName('total-population');
const average = document.getElementsByClassName('average-population');
const populationsArr = [];
let sum = 0;

for (const population of allPopulations) {
  populationsArr.push(+population.textContent.replaceAll(',', ''));
}

sum = populationsArr.reduce((accum, pop) => accum + pop);

const averageValue = Math.floor(sum / populationsArr.length);

total[0].textContent = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

average[0].textContent = averageValue
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
