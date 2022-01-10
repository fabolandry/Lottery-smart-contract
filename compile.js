// Using path for cross coompatibily 
const path = require('path');
//Using the file system module
const fs = require('fs');
//Using the solidity compiler
const solc = require('solc');
// Getting the path
const LotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
//reading the raw source code from the contract
const source = fs.readFileSync(LotteryPath, 'utf8');
//Compiling and exporting the contract
module.exports = solc.compile(source, 1).contracts[':Lottery'];