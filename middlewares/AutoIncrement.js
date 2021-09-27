const AutoIncrement = (model, fieldName,value) => {
  const findId = await model.findOne().sort({ _id: -1 });
  const oldId = findId.fieldName;
  const newId = oldId.substr(value);
  return newId;
};
module.exports = AutoIncrement;
