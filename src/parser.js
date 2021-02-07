const parsers = {
  json: JSON.parse,
};

export default (data, fileFormat) => parsers[fileFormat](data);
