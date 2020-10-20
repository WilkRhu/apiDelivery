const convertString = (i) => {
  const array = i.split(',')
  if(array.length <= 3)
  {
    const object = Object({
      ig1: array[0],
      ig2: array[1],
      ig3: array[2]
    });
  
    return object;
  }
  return {
    error: "Max value 3",
    status: 400
  }
}
module.exports = convertString;