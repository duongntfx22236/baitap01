"use strict";

// LAB 17.1

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const finland = describeCountry("Finland", 6, "Helsinki");
const vietNam = describeCountry("Viet Nam", 90, "Ha Noi");
const portugal = describeCountry("Portugal", 33, "Poturgal");

console.log("Finland", finland);
console.log("Viet Nam", vietNam);
console.log("Portugal", portugal);

// LAB 17.2

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
const brazil = percentageOfWorld1(230);
const japan = percentageOfWorld1(62.9);

console.log("China", china);
console.log("Brazil", brazil);
console.log("Japan", japan);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const america = percentageOfWorld2(368);
const india = percentageOfWorld2(1500);
const thailand = percentageOfWorld2(70.25);

console.log("America", america);
console.log("India", india);
console.log("Thailand", thailand);

// LAB 17.3

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const lao = percentageOfWorld3(8);
console.log("Lao", lao);

// LAB 17.4

function describePopulation(country, population) {
  const a = percentageOfWorld1(population);
  return `${country} has ${population} millions people, which is about ${a}% of the world.`;
}

const cambodia = describePopulation("Cambodia", 17);
console.log(cambodia);

// LAB 17.5

const populations = [80, 100, 350, 68];
console.log(percentageOfWorld1(populations[0]));
console.log(percentageOfWorld1(populations[1]));
console.log(percentageOfWorld1(populations[2]));
console.log(percentageOfWorld1(populations[3]));

//LAB 17.6

const neighbours = ["Sweden", "Holland", "Italy"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country.");
}

if (neighbours.includes("Sweden")) {
  neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
}
console.log(neighbours);

// LAB 17.7.1

const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    onsole.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team win !");
  }
}
checkWinner(avgDolphins, avgKoalas);

// LAB 17.7.2

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);
