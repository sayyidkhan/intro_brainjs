const brain = require('brain.js');
const network = new brain.NeuralNetwork();
var net = new brain.recurrent.LSTM();

//// part 1 //// to test 
// testing data based on this site
// https://coderoncode.com/machine/learning/2016/06/06/machine-learning-a-simple-neural-network.html
/*
network.train([
    {input: [0,0,0], output: [0]},
    {input: [0,0,1], output: [0]},
    {input: [0,1,1], output: [0]},
    {input: [1,0,1], output: [1]},
    {input: [1,1,1], output: [1]},
]);
*/
//// part 1 ////

//// part 2 ////
/// in the game of the soccer context ///
// 1 refers to team 1
// 2 refers to team 2
// 3 refers to team 3
// 4 refers to team 4

network.train([
    {input: [1,2], output: [1]}, // Team 2 wins
    {input: [1,3], output: [1]}, // Team 3 wins
    {input: [2,3], output: [0]}, // Team 2 wins
    {input: [2,4], output: [1]}, // Team 4 wins
    {input: [1,2], output: [0]}, // Team 1 wins
    {input: [1,3], output: [0]}, // Team 1 wins
    {input: [3,4], output: [0]}, // Team 3 wins
]);

//// part 2 ////



// show the result; for testing the neural network
const output = network.run([1,4]);
// show the result; for testing the neural network
//// this is to test how close is the probablity from a one to a zero
console.log(`team datasets`);
console.log(`probability: ${output}`);

/////////////////////////////////////////////////////////////////////