/* 
// The data model for pet is as follows 
{
  "name": "Buddy",
  "species": "Dog",
  "age": 1,
  "color": "Brown",
  "weight": 2
}
*/
let petArray = [];

let nextId = 1;

const getAll = () => petArray;

const addOne = (name, species, age, color, weight) => {
  if (!name || !species || !age || !color || !weight) return false;

  const newPet = {
    id: nextId++,
    name,
    species,
    age,
    color,
    weight,
  };

  petArray.push(newPet);
  return newPet;
};

const findById = (id) => {
  const pet = petArray.find((item) => item.id == id);
  return pet || false;
};

const updateOneById = (id, updatedData) => {
  const pet = findById(id);
  if (!pet) return false;

  if (updatedData.name) pet.name = updatedData.name;
  if (updatedData.species) pet.species = updatedData.species;
  if (updatedData.age) pet.age = updatedData.age;
  if (updatedData.color) pet.color = updatedData.color;
  if (updatedData.weight) pet.weight = updatedData.weight;

  return pet;
};

const deleteOneById = (id) => {
  const pet = findById(id);
  if (!pet) return false;

  const initialLength = petArray.length;
  petArray = petArray.filter((pet) => pet.id != id);
  return petArray.length < initialLength;
};

if (require.main === module) {
  let result = addOne("Buddy", "Dog", 3, "Brown", 20);
  console.log(result);

  result = addOne("Mittens", "Cat", 2, "Black", 10);
  console.log(result);

  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));

  console.log("updateOne called:", updateOneById(1, { age: 4, weight: 22 }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const Pet = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Pet;
