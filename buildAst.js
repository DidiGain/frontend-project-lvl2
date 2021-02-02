import _ from 'lodash';

const buildAst = (obj1, obj2) => {
  const unitedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  
  return unitedKeys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!_.has(obj1, key)) {
      return {
        name: key,
        type: 'added',
        value: value2,
      };
    }
    if (!_.has(obj2, key)) {
      return {
        name: key,
        type: 'removed',
        value: value1,
      };
    }
    if (_.isEqual(value1, value2)) {
      return {
        name: key,
        type: 'equal',
        value: value1,
      };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        name: key,
        type: 'nested',
        children: buildAst(value1, value2),
      };
    }
    return {
      name: key,
      type: 'updated',
      oldValue: value1,
      newValue: value2,
    };
  });
};

export default buildAst;