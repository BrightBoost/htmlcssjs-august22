window.onload = function () {
  const myForm = document.getElementById("myForm");
  myForm.onsubmit = handleForm;
}
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

  for (let key in person) {
    console.log("key:", key);
    console.log("value:", person[key]);
  }

  // interacting with the DOM
}

function changePicture() {
  // somehow get access to the img element
  const image = document.getElementById("drink");
  console.log(image);

  // somehow update the src property
  if (image.src.search("tea.jpeg") != -1) {
    image.src = "./images/coffee.jpeg";
  } else {
    image.src = "./images/tea.jpeg";
  }
}

function handleForm() {
  const favoriteNr = document.getElementById("favoriteNr");
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  console.log(favoriteNr.value);
  console.log(name.value);
  message.innerHTML = "Nice to meet you, " + name.value + ". That's a great number indeed: " + favoriteNr.value;
  

  return false;
}