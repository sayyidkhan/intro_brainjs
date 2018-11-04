const brain = require('brain.js');
let net = new brain.NeuralNetwork();

net.train([
    {input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
    {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
    {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}
]);

let output = net.run({ r: 1, g: 1, b: 1 }); 
console.log(`color black: ${output.black}`);
console.log(`color white: ${output.white}`);