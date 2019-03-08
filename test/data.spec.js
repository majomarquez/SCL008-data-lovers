global.window = global;
global.assert = require('chai').assert;
require('../src/data/lol/lol.js');
require('../src/data.js');
require('./data.spec.js');


describe('Función filterTag', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof example, 'function');
  }); 

  it('debería retornar "Fighter"', () => {
    assert.equal(filterTag(LOL.data, 'Fighter'), 'Aatrox');
  });
});

describe('function champDetails', () => {
() => {
  it ('debería retornar nombre'),()=>{
    assert.deepEqual(window.data.champDetails(LOL.lol,img),[{name: "Aatrox", blurb:
    "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin.He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
  }])
});
  



  // it('debería retornar el objeto Luna al filtrar', () => {
  //   assert.deepEqual(window.filterData(data, 'Ravenclaw'), [{name: 'Luna Lovegood', house: 'Ravenclaw'}] )
  // })