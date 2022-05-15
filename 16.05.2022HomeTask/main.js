"use strict";

class MyCollection {
  constructor() {
    this.elements = arguments;
  }

  // ----------------ForEach----------------------

  forEachC = function () {
    let result = [];
    for (let i = 0; i < this.elements.length; i++) {
      result.push(this.elements[i]);
    }
    console.log(result);
  };

  // -------------------Map---------------------
  mapC = function (callback) {
    let result = [];

    for (let i = 0; i < this.elements.length; i++) {
      result.push(callback(this.elements[i]));
    }

    return result;
  };

  // ---------------------Filter----------------------
  filterC = function (callback) {
    let result = [];
    for (let i = 0; i < this.elements.length; i++) {
      if (callback(this.elements[i])) {
        result.push(this.elements[i]);
      }
    }
    return result;
  };

  //   -------------------reduce-------------------

  //   reduceC = function (callback) {
  //       let result = [];
  //     for (let i = 0; i < this.elements.length; i++) {

  //     }
  //     return result;
  //   };

  // -------------------------every------------------

  everyC = function (callback) {
    for (let i = 0; i < this.elements.length; i++) {
        if (callback(this.elements[i])<callback) {
            return false;
        }
        return true;
    }
}
}

let myCollection = new MyCollection(1, 2, 3, 4, 5, 6, true, "mamed");
let collection = [1, 2, 3, 4, 5, 6, true, "mamed"];

let res = myCollection.everyC((x) => {
  return x > 2;
});

console.log(res);

// let res = myCollection.forEachC();

// let res2 = collection.forEach(x => {
//     console.log(x);
// });
