import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import buildAst from './buildAst.js';
import getFormatedAst from './formatters/index.js';

const getParsedData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const formatType = _.last(filepath.split('.'));
  const fileData = fs.readFileSync(fullPath, 'utf-8');
  return parse(fileData, formatType);
};

const genDiff = (filepath1, filepath2, format = 'json') => {
  const parsedData1 = getParsedData(filepath1);
  const parsedData2 = getParsedData(filepath2);

  const diff = buildAst(parsedData1, parsedData2);
  const makeFormat = getFormatedAst(format);

  return makeFormat(diff);
};

export default genDiff;
