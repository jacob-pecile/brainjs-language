import brain from "brainjs";
import french from "./trainFrench";

let {smalltrainingData, largeTrainingData, confirmData} = french;

console.log(`language: FRENCH\nnumber of training data: ${largeTrainingData.length}\nnumber of test data: ${confirmData.length}\n`)

let net = new brain.NeuralNetwork();
net.train(largeTrainingData);

let totalAccuracy = 0;
confirmData.forEach(data => {
    let result = net.run(data.test);
    console.log(`data: ${data.test}  accuracy: ${result[data.answer]}`)
    totalAccuracy += result[data.answer];
});

console.log(`\naverage accuracy: ${totalAccuracy / confirmData.length}`);