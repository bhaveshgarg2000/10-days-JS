//.findIndex() iterartor

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal =>{
  return animal === 'elephant'
});
const startsWithS = animals.findIndex(animals =>{
return animals[0] === 's'
});