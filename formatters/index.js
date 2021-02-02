import makeJson from './json.js';

const formatter = { 
  json:  makeJson,
};

export default (format) => formatter[format];


  