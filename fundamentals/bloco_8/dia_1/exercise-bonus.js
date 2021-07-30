const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg + 1) + minDmg));
  return dragonDmg;
};

const warriorAttack = (warrior) => {
  const { strength, weaponDmg } = warrior;
  const minDmg = strength;
  const maxDmg = strength * weaponDmg;
  const warriorDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
  return warriorDmg;
};

const mageAttack = (mage) => {
  const { intelligence, mana } = mage;
  const minDmg = intelligence;
  const maxDmg = 2 * intelligence;
  const turnStats = {
    manaSpent: 0,
    damegeDealt: 'Não possui mana suficiente',
  };
  if (mana > 15) {
    const mageDmg = Math.floor((Math.random() * (maxDmg - minDmg + 1) + minDmg));
    turnStats.damegeDealt = mageDmg;
    turnStats.manaSpent = 15;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorAttack) => {
    const warriorTurnAttack = warriorAttack(warrior);
    dragon.healthPoints -= warriorTurnAttack;
    warrior.damage = warriorTurnAttack;
  },
  mageTurn: (mageAttack) => {
    const { manaSpent, damegeDealt } = mageAttack(mage);
    dragon.healthPoints -= damegeDealt;
    mage.damage = damegeDealt;
    mage.mana -= manaSpent;
  },
  dragonTurn: (dragonAttack) => {
    const dragonTurnAttack = dragonAttack(dragon);
    warrior.healthPoints -= dragonTurnAttack;
    mage.healthPoints -= dragonTurnAttack;
    dragon.damage = dragonTurnAttack;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);

console.log(gameActions.turnResults());
