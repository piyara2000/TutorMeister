const fs = require("fs");
const natural = require("natural");
const { TfIdf, PorterStemmer } = natural;
const { BayesClassifier } = require("natural");

// Function to load the pre-trained model
function loadModel() {
  const model_filename = "naive_bayes_model.json";
  const modelData = fs.readFileSync(model_filename, "utf-8");
  return BayesClassifier.restore(JSON.parse(modelData));
}

// Load the pre-trained model
const classifier = loadModel();

// Function to preprocess input text
function preprocessText(sentence) {
  const tokenizer = new natural.WordTokenizer();
  sentence = sentence.toLowerCase();
  const tokens = tokenizer.tokenize(sentence);
  const filteredTokens = tokens.filter(
    (word) => !natural.stopwords.includes(word)
  );
  return filteredTokens.map((token) => PorterStemmer.stem(token)).join(" ");
}

// Function to predict learning style based on input sentence
function predictLearningStyle(inputSentence) {
  const preprocessedInput = preprocessText(inputSentence);
  return classifier.classify(preprocessedInput);
}

// Export the function
module.exports = predictLearningStyle;
