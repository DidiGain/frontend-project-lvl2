import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const format = 'json';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getExpectedResult = (filename) => (fs.readFileSync(getFixturePath(filename), 'utf-8')).trim();

describe((`${format}`), () => {
  const before = getFixturePath(`before.${format}`);
  const after = getFixturePath(`after.${format}`);
  const expected = getExpectedResult(`expected-${format}.txt`);

  test((`${format}`), () => {
    expect(genDiff(before, after, format)).toEqual(expected);
  });
});
