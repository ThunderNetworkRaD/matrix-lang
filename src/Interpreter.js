const { ErrorHandler } = require('./ErrorHandler');
const { Lexer } = require('./Lexer');
const { Environment } = require('./Environment');
const { Parser } = require('./Parser');

class Interpreter {
  constructor(input) {
    this.errorHandler = new ErrorHandler();
    this.environment = new Environment(null);
    
    this.lexer = new Lexer(input);
    this.parser = new Parser(this.environment);
    this.parser.load(this.lexer.tokens);
    this.statements = this.parser.parse();
  };
};

module.exports = {
  Interpreter,
};

