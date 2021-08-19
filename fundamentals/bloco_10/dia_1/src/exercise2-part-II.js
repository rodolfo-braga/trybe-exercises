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

function techList(tech, name) {
  const listOfTechs = tech.reduce((acc, currentTech) => {
    const techObj = {
      tech: currentTech,
      name,
    }
    acc.push(techObj);
    return acc;
  }, []);

  if (listOfTechs.length === 0) {
    return 'Vazio!';
  }

  return sortByTech(listOfTechs);
}

module.exports = techList;