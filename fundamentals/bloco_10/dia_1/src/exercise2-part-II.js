function sortByTech(listOfTechs) {
  return listOfTechs.sort((a, b) => {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
}

function techList(techs, name) {
  if (techs.length === 0) return 'Vazio!';

  const listOfTechs = techs.map((tech) => {
    return {
      tech,
      name,
    }
  });

  return sortByTech(listOfTechs);
}

module.exports = techList;