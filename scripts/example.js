function magic() {
  // variables
  let nr = 5.6;
  console.log(nr);

  let nr1 = 3.2;
  console.log((nr * nr1).toFixed(2));

  console.log(Math.sqrt(nr));

  let text = "Hello JS!";
  let b = true;

  if (text == "no") {
    console.log("blablabla");
  } else {
    console.log("else statement");
  }

  // arrays
  let arr = [4, "strings", true];
  console.log(arr[0]);
  console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    console.log("loop:", arr[i]);
  }

  arr.shift(); //remove first
  arr.push("something"); // append
  console.log(arr);

  // objects
  let person = {
    name: "Jinthar",
    hobby: ["angular", "python", "jigsaw puzzles"],
    pet: {
      type: "german shephard",
      name: "ryan",
    },
  };

  let x = "hobby";
  console.log(person.name);
  console.log(person[x]);

  console.log(person.hobby[2]);
  console.log(person.pet.name);

  // interacting with the DOM
}
