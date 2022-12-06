const { Interpreter } = require('./src/Interpreter');
const fs = require('fs');

class matrix {
  constructor() {
    this.input = this.fetchInput();
    this.interpreter = new Interpreter(this.input);
  };

  fetchInput() {
    let file = process.argv[2];
    if (!file) {
      console.log('USAGE -- [ mle <filename> ]');
    } else {
      try {
        const data = fs.readFileSync(file, 'utf8');
        return data  
      } catch(e) {
        console.log('USAGE -- [ mle <filename> ]');
        console.log('Error:', e.stack);
      };
    };
  };
};

new matrix();