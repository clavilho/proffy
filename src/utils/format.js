const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "Historia",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sbado",
];
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":");
  return Number (hour * 60 + minutes);
}

module.exports = {subjects, weekdays, getSubject,convertHoursToMinutes};
