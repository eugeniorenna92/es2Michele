const fs = require("fs");

function readFileAsync() {
  return new Promise((res, rej) => {
    fs.readFile("input.txt", "utf-8", (err, data) => {
      if (err) rej(err);
      res(data);
    });
  });
}

readFileAsync()
  .then((data) => {
    let array = data.toString().split("\n");
    let repeat = true;
    for (i = 0; i < array.length - 1; i++) {
      for (j = i + 1; j < array.length; j++) {
        for (m = j + 1; m < array.length - 2; m++) {
          if (parseInt(array[i]) + parseInt(array[j]) === 2020 && repeat) {
            console.log(
              `La somma dei numeri ${array[i]} e ${array[j]} é uguale a 2020, la loro moltiplicazione è: `
            );
            console.log(parseInt(array[i]) * parseInt(array[j]));
            repeat = false;
          }
          if (
            parseInt(array[i]) + parseInt(array[j]) + parseInt(array[m]) ===
            2020
          ) {
            console.log(
              `La somma dei numeri ${array[i]}, ${array[j]} e ${array[m]} é uguale a 2020, la loro moltiplicazione è: `
            );
            console.log(
              parseInt(array[i]) * parseInt(array[j]) * parseInt(array[m])
            );
          }
        }
      }
    }
  })
  .catch((e) => console.log(e));

// fs.promises
//   .readFile("README.md", "utf-8")
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
