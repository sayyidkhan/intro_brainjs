const brain = require('brain.js');
const trainingData = require('./kanye.json'); // training datasets

/// prompt for input for kardashian vs trump predictor ///
function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

prompt('Please enter your code to be predict whether is it kardashian or trump quote?', function (input) {
    console.log(input); // default prompt
    console.log(execute(input)); // execute text
    process.exit();
});
/// prompt for input for kardashian vs trump predictor ///


let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.trump > results.kardashian ?
   output = {trump: results.trump.toFixed(2), kardashian: results.kardashian.toFixed(2)}
   :
   output = {trump: results.trump.toFixed(2), kardashian: results.kardashian.toFixed(2)};
   return output;
}

train(trainingData);

/// execute the data ///
//console.log(execute("These aren't real. Kanye would never write Yeezy on the side"));
/// execute the data ///

