import listOfHeroes from "../Fixtures/listOfHeroes.json";

const autoCompleteList = [];

const heroCaterogy = Object.entries(listOfHeroes);

for (var hero of heroCaterogy[0][1]) {
  autoCompleteList.push(hero["name"]);
}
for (hero of heroCaterogy[1][1]) {
  autoCompleteList.push(hero["name"]);
}
for (hero of heroCaterogy[2][1]) {
  autoCompleteList.push(hero["name"]);
}
for (hero of heroCaterogy[3][1]) {
  autoCompleteList.push(hero["name"]);
}
for (hero of heroCaterogy[4][1]) {
  autoCompleteList.push(hero["name"]);
}
for (hero of heroCaterogy[5][1]) {
  autoCompleteList.push(hero["name"]);
}
for (hero of heroCaterogy[6][1]) {
  autoCompleteList.push(hero["name"]);
}

export default autoCompleteList;
