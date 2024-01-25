// # function
// # -------------------------------

function objectToTable(objectArray) {
  let html = ``;
  const properties = [];

  for (const object of objectArray) {
    if (typeof object == "object") {
      for (const prop in object) {
        if (!properties.includes(prop)) properties.push(prop);
      }
    }
  }

  let isNotObject = properties.length == 0;

  html += `
    <table class="table">
        <thead>
            <tr>
    `;

  if (isNotObject) {
    html += `<th scope="col">List</th></tr></thead><tbody>`;
    objectArray.forEach((element) => {
      html += `<tr><td>${element}</td></tr>`;
    });
  } else {
    properties.forEach((property) => {
      html += `
        <th scope="col">${property}</th>
        `;
    });
    html += `</tr></thead><tbody>`;
    objectArray.forEach((element) => {
      html += `<tr>`;
      properties.forEach((property) => {
        if (element[property]) {
          html += `<td>${element[property]}</td>`;
        } else {
          html += `<td></td>`;
        }
      });
      html += `</tr>`;
    });
  }

  html += `</tbody></table>`;

  return html;
}
const getRandomNumber = (max = 10, min = 1) => Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);

// # SNACK 1
// # -------------------------------

const vips = ["Dwayne Johnson", "Brad Pitt", "Johnny Depp", "Lady Gaga", "Cristiano Ronaldo", "Georgina Rodriguez", "Chiara Ferragni", "Fedez", "George Clooney", "Amal Clooney", "Maneskin"];

const newList = vips.map((vip, index) => {
  return {
    nome: vip,
    tavolo: `Tavolo Vip`,
    posto: index + 1,
  };
});

console.group("SNACK 1");

console.group("Vips:");
console.table(vips);
console.groupEnd();

console.group("Segnaposti Vips:");
console.table(newList);
console.groupEnd();

console.groupEnd();

// # SNACK 2
// # -------------------------------

/*
| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |
*/

const students = [
  {
    id: 213,
    nome: "Marco della Rovere",
    vote: 78,
  },
  {
    id: 110,
    nome: "Paola Cortellessa",
    vote: 96,
  },
  {
    id: 250,
    nome: "Andrea Mantegna",
    vote: 48,
  },
  {
    id: 145,
    nome: "Gaia Borromini",
    vote: 74,
  },
  {
    id: 196,
    nome: "Luigi Grimaldello",
    vote: 68,
  },
  {
    id: 102,
    nome: "Piero della Francesca",
    vote: 50,
  },
  {
    id: 120,
    nome: "Francesca da Polenta",
    vote: 84,
  },
];

const nomi = students.map((student) => student.nome.toUpperCase());
const goodVote = students.filter((student) => student.vote > 70);
const bestStudents = students.filter((student) => student.vote > 70 && student.id > 120);

console.group("SNACK 2");

console.group("Studenti:");
console.table(students);
console.groupEnd();

console.group("Nomi Studenti:");
console.table(nomi);
console.groupEnd();

console.group("Ottimi Studenti:");
console.table(goodVote);
console.groupEnd();

console.group("Ottimi Studenti più giovani':");
console.table(bestStudents);
console.groupEnd();

console.groupEnd();

// # SNACK 3
// # -------------------------------

const bikes = [
  { name: "Bianchi Oltre XR4", weight: 7.2 },
  { name: "Trek Madone", weight: 7.4 },
  { name: "Cannondale SuperSix EVO", weight: 7.0 },
  { name: "Specialized Tarmac", weight: 7.3 },
  { name: "Pinarello Dogma F12", weight: 7.1 },
  { name: "Scott Addict RC", weight: 6.8 },
  { name: "Colnago C64", weight: 7.5 },
  { name: "Giant Propel Advanced", weight: 7.6 },
  { name: "Merida Reacto", weight: 7.2 },
  { name: "Orbea Orca", weight: 7.3 },
  { name: "Wilier Cento10 NDR", weight: 7.4 },
  { name: "Ridley Noah Fast", weight: 7.1 },
  { name: "Fuji Transonic", weight: 7.5 },
  { name: "Look 795 Blade RS", weight: 6.8 },
  { name: "De Rosa SK Pininfarina", weight: 7.6 },
];

let minWeight = bikes[0].weight;

bikes.forEach((bike) => {
  if (bike.weight < minWeight) minWeight = bike.weight;
});

const lightBikes = bikes.filter((bike) => {
  const { weight } = bike;
  return weight == minWeight;
});

console.group("SNACK 3");

console.group("Bikes:");
console.table(bikes);
console.groupEnd();

console.group("Light Bike:");
console.table(lightBikes);
console.groupEnd();

console.groupEnd();

// # SNACK 4
// # -------------------------------

const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

teams.forEach((team) => {
  team.score = getRandomNumber(15);
  team.foul = getRandomNumber(15);
});

const teamsFouls = teams.map((team) => {
  const { name, foul } = team;
  return { name, foul };
});

console.group("SNACK 4");

console.group("Teams:");
console.table(teams);
console.groupEnd();

console.group("Only Fouls:");
console.table(teamsFouls);
console.groupEnd();

console.groupEnd();

// # PRINT SNACKS ON PAGE
// # -------------------------------

const snack1El = document.querySelector("#snack-1");
const snack2El = document.querySelector("#snack-2");
const snack3El = document.querySelector("#snack-3");
const snack4El = document.querySelector("#snack-4");

snack1El.innerHTML += `
<h4 class="text-center border-bottom p-3 mt-3">Lista Vip</h4>
${objectToTable(vips)}
<h4 class="text-center border-bottom p-3 mt-3">Tavolo</h4>
${objectToTable(newList)}
`;

snack2El.innerHTML += `
<h4 class="text-center border-bottom p-3 mt-3">Studenti</h4>
${objectToTable(students)}
<h4 class="text-center border-bottom p-3 mt-3">Nomi Formattati</h4>
${objectToTable(nomi)}
<h4 class="text-center border-bottom p-3 mt-3">Studenti buoni voti</h4>
${objectToTable(goodVote)}
<h4 class="text-center border-bottom p-3 mt-3">Studenti più giovani buoni voti</h4>
${objectToTable(bestStudents)}
`;

snack3El.innerHTML += `
<h4 class="text-center border-bottom p-3 mt-3">Bici</h4>
${objectToTable(bikes)}
<h4 class="text-center border-bottom p-3 mt-3">Bici più leggere</h4>
${objectToTable(lightBikes)}
`;

snack4El.innerHTML += `
<h4 class="text-center border-bottom p-3 mt-3">Teams</h4>
${objectToTable(teams)}
<h4 class="text-center border-bottom p-3 mt-3">Teams Foul</h4>
${objectToTable(teamsFouls)}
`;
