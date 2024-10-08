const fs = require('fs');

const args = process.argv;

const CATEGORIES = parseInt(args[2]);
const COUNTRIES = parseInt(args[3]);

const randomElement = (arr = []) => {
  return arr[Math.round(Math.random()*(arr.length-1))];
}

// source: https://stackoverflow.com/a/46545530
const shuffleArray = (arr = []) => 
  arr.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

const ICONS = {
  solid: [
    "comment",
    "heart",
    "chart-line",
    "trophy",
    "comment-dots",
    "users",
    "network-wired",
    "thumbs-up",
    "compass",
    "face-smile",
    "heart-circle-plus",
    "leaf",
    "flag"
  ]
}

const obj = {
  countries: [],
  categories: [],
  data: []
};

for (let country = 0; country < COUNTRIES; country++) {
  obj.countries.push(`Country ${country}`);
}

// obj.countries = shuffleArray(obj.countries); // optional test

for (let category = 0; category < CATEGORIES; category++) {
  obj.categories.push({
    name: `Category ${category}`,
    icon: ["solid", randomElement(ICONS.solid)]
  });
}

obj.countries.forEach(_ => {
  obj.data.push(obj.categories.map(_ => Math.random()*10));
});

fs.writeFileSync('./data.json', JSON.stringify(obj, null, 2));