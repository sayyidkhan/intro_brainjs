/// part 3 ///
/// using datasets to predict whether the test is related to hardware or software
const brain = require('brain.js');
const data = require('./data.json');

// for training data in LSTM; long short term memory
// https://github.com/brainjs/brain.js#for-training-with-rnn-lstm-and-gru
const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData,{
    iterations: 2000
});

const output = network.run('I fixed the power supply');
console.log(`category: ${output}`);
/// part 3 ///

