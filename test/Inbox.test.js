const assert = require('assert'); //Standard library in node.js for testing 
const ganache = require('ganache-cli');
const Web3 = require('web3'); //'Web3' is the constructor for every instance of the use of the Web library
//Purpose of each instance is to connect to a different Etheruem network //Capital 'W' for Web3 is a constructor and lowercase 'w' is an instance for web3
const { interface, bytecode } = require('../compile');

const provider = ganache.provider(); //The 'ganache.provider()' will change depending on what network we use
const web3 = new Web3(provider);

const INITIAL_STRING = 'Hi there!';

let accounts;
let inbox;
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts()
  //Use one of those accounts to deploy 
  //the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ 
    data: bytecode, 
    arguments:  ['Hi there!'] })
  .send({ 
    from: accounts[0], 
    gas: '1000000' })

  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address); //'assert.ok' tests if the value given is a real value and not null or undefined 
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call(); //message() - arguments for 'message' can be placed there if needed, 'call' is how its going to be executed (gas, etc)
    assert.equal(message, 'Hi there!');
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] })

    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye')
  })
});