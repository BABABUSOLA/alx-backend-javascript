const groceriesList = () => {
  const res = new Map();
  const objects = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objects)) {
    res.set(key, objects[key]);
  }
  return res;
};

export default groceriesList;
