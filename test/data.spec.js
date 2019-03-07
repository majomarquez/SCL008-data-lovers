global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('Función filterTag', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  });

  it('debería retornar "Fighter"', () => {
    assert.equal(filterTag('Aatrox'), 'Fighter');
  });

describe('filtro champions', (data) =>{


  it('debería retornar el objeto Zac al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'name'), [Zac, [version, "6.24.1"],[id, "Zac",[key, "154"],[name, "Zac"],[title, "the Secret Weapon"],[img, "https://www.masterypoints.com/assets/img/lol/champion_icons/Zac.png"],[splash, "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg"],[blurb, "Zac is the product of a Zaun experiment to manufacture a hexchem-engineered supersoldier - the Zaun Amorphous Combatant. Combining brute strength with limitless flexibility, he is a versatile juggernaut: a creative fighter who bounces over obstacles ..."],[
    [info, [attack, 3],[defense, 7],[magic, 7],[difficulty, 8]],
    [image, [full, "Zac.png"],[sprite, "champion4.png"],[group, "champion"],[x, 288],[y, 0],[w, 48],[h, 48]],
    [tags, ["Tank", "Fighter"],
    [partype, "None"],
    [stats, [hp, 614.6],[hpperlevel, 95],[mp, 0],[mpperlevel, 0],[movespeed, 340],[armor, 23.88],[armorperlevel, 3.5],[spellblock, 32.1],[spellblockperlevel, 1.25],[attackrange, 175],[hpregen, 7.92],[hpregenperlevel, 0.55],[mpregen, 0],[mpregenperlevel, 0],[crit, 0],[critperlevel, 0],[attackdamage, 59.67],[attackdamageperlevel, 3.375],[attackspeedoffset, -0.02],[attackspeedperlevel, 1.6]]
  });
  
  it('debería retornar el objeto Tank al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'tag'),  assert.deepEqual(window.filterData(data, 'name'), [Zac, [version, "6.24.1"],[id, "Zac",[key, "154"],[name, "Zac"],[title, "the Secret Weapon"],[img, "https://www.masterypoints.com/assets/img/lol/champion_icons/Zac.png"],[splash, "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg"],[blurb, "Zac is the product of a Zaun experiment to manufacture a hexchem-engineered supersoldier - the Zaun Amorphous Combatant. Combining brute strength with limitless flexibility, he is a versatile juggernaut: a creative fighter who bounces over obstacles ..."],[
      [info, [attack, 3],[defense, 7],[magic, 7],[difficulty, 8]],
      [image, [full, "Zac.png"],[sprite, "champion4.png"],[group, "champion"],[x, 288],[y, 0],[w, 48],[h, 48]],
      [tags, ["Tank", "Fighter"],
      [partype, "None"],
      [stats, [hp, 614.6],[hpperlevel, 95],[mp, 0],[mpperlevel, 0],[movespeed, 340],[armor, 23.88],[armorperlevel, 3.5],[spellblock, 32.1],[spellblockperlevel, 1.25],[attackrange, 175],[hpregen, 7.92],[hpregenperlevel, 0.55],[mpregen, 0],[mpregenperlevel, 0],[crit, 0],[critperlevel, 0],[attackdamage, 59.67],[attackdamageperlevel, 3.375],[attackspeedoffset, -0.02],[attackspeedperlevel, 1.6]]
  });

  it('debería retornar el objeto Lucian al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'name'), [Lucian,
      [version, "6.24.1"],[id, "Lucian"],[key, "236"],[name, "Lucian"],[title, "the Purifier",[img,"https://www.masterypoints.com/assets/img/lol/champion_icons/Lucian.png"],[splash,"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucia_0.jpg"],[blurb,"Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on ..."],
      [info,[attack, 8],[defense, 5],[magic, 3],[difficulty, 6],
      [image, [full, "Lucian.png"],[sprite, "champion1.png"],[group, "champion"],[x, 432],[y, 96],[w, 48],[h, 48]],
      [tags, ["Marksman"]],
      [partype, "MP"],
      [stats, [hp, 554.4],[hpperlevel, 80],[mp, 348.88],[mpperlevel, 38],[movespeed, 335],[armor, 24.04],[armorperlevel, 3],[spellblock, 30],[spellblockperlevel, 0],[attackrange, 500],[hpregen, 6.19],[hpregenperlevel, 0.65],[mpregen, 8.175],[mpregenperlevel, 0.7],[crit, 0],[critperlevel, 0],[attackdamage, 57.46],[attackdamageperlevel, 2.41],[attackspeedoffset, -0.02],[attackspeedperlevel, 3.3]]
  });

  it('debería retornar el objeto Mrksman al filtrar', () => {
    assert.deepEqual(window.filterData(data, 'tag'), [Lucian,
      [version, "6.24.1"],[id, "Lucian"],[key, "236"],[name, "Lucian"],[title, "the Purifier",[img,"https://www.masterypoints.com/assets/img/lol/champion_icons/Lucian.png"],[splash,"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucia_0.jpg"],[blurb,"Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on ..."],
      [info,[attack, 8],[defense, 5],[magic, 3],[difficulty, 6],
      [image, [full, "Lucian.png"],[sprite, "champion1.png"],[group, "champion"],[x, 432],[y, 96],[w, 48],[h, 48]],
      [tags, ["Marksman"]],
      [partype, "MP"],
      [stats, [hp, 554.4],[hpperlevel, 80],[mp, 348.88],[mpperlevel, 38],[movespeed, 335],[armor, 24.04],[armorperlevel, 3],[spellblock, 30],[spellblockperlevel, 0],[attackrange, 500],[hpregen, 6.19],[hpregenperlevel, 0.65],[mpregen, 8.175],[mpregenperlevel, 0.7],[crit, 0],[critperlevel, 0],[attackdamage, 57.46],[attackdamageperlevel, 2.41],[attackspeedoffset, -0.02],[attackspeedperlevel, 3.3]] )
  });

})
});