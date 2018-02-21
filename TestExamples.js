const assert = require('assert'); //Standard library in node.js for testing 
const ganache = require('ganache-cli');
const Web3 = require('web3'); //'Web3' is the constructor for every instance of the use of the Web library
//Purpose of each instance is to connect to a different Etheruem network //Capital 'W' for Web3 is a constructor and lowercase 'w' is an instance for web3
const web3 = new Web3(ganache.provider()); //The 'ganache.provider()' will change depending on what network we use

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car;
beforeEach(() => {
  car = new Car();
});

describe('Car', () => {//The string is just a description and should be named after whatever you're testing(anything you want essentially)
 it('can park', () => {
   assert.equal(car.park(), 'stopped');
 });

   it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
 });
});


[ '0x4A668c218aCEa26F94892f1749Bd41fD1993cA30',
  '0x13856a49667a854d202Cbe1058C81fFeE4DA55b6',
  '0x156C92c5F21F3E3Bc879927a090582699Da1f760',
  '0x7B28232973D33fb43602B7Bf8fF5FD9426A739Af',
  '0xaE4c4bC177FF667CA5BcC27C2eE13a6D406741d6',
  '0x8E6c5a2DA423E74b97D8fd2D7BDb5C256f54EDBd',
  '0x1c4BF7F4fe82CD797CE0F7BE599A5EDd68132ebf',
  '0x1B207C641d7Bd5E620ee886C840f72E91027C6b2',
  '0x99b2e31b1844C8F0449fBaE45D974759018ae8f0',
  '0x16E4e5B2002e9463A3370ae43A8b1A0090b35c57' ]