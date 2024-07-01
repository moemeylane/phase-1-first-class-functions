function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("Inside named function!");
  }

  return namedFunction;
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("Inside anonymous function!");
  };
}
