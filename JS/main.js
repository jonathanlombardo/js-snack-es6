const vips = ["Dwayne Johnson", "Brad Pitt", "Johnny Depp", "Lady Gaga", "Cristiano Ronaldo", "Georgina Rodriguez", "Chiara Ferragni", "Fedez", "George Clooney", "Amal Clooney", "Maneskin"];

const newList = vips.map((vip, index) => {
  return {
    nome: vip,
    tavolo: `Tavolo Vip`,
    posto: index,
  };
});

console.log("Segnaposti Vips:", newList);

// ---------------------

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

console.log("Nomi Studenti:", nomi);
console.log("Ottimi Studenti:", goodVote);
console.log("Studenti 'migliori':", bestStudents);
