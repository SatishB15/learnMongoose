const url = 'mongodb://localhost:27017/students';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const config = {
  url,
  options,
};

module.exports = config;
