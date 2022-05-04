const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  // For each element in animal
  animalJSON.forEach(function(animal) {
    if (animal.species === "dog") {
      dogs.push(animal);
    } else if (animal.species === "cat") {
      cats.push(animal);
    }
  });

  // for(let i = 0; i < animalJSON.length; i++){
  //   if (animalJSON[i].species === "dog") {
  //     dogs.push(animalJSON[i]);
  //   } else if (animalJSON[i].species === "cat") {
  //     cats.push(animalJSON[i]);
  //   }
  // }

  // const dogsArr = animalJSON.filter(animal => {
  //   return animal.species === "dog";
  // })

  // const catsArr = animalJSON.filter(animal => {
  //   return animal.species === "cat";
  // })

  // Turn the arrays into JSON strings so they can be written to files
  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  fs.writeFile("dogs.json", dogJSON, function(err) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to dogs.json file");
  });

  fs.writeFile("cats.json", catJSON, function(err) {
    if (err) {
      throw err;
    }

    console.log("Successfully wrote to cats.json file");
  });
});



