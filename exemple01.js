function terminator(someInput, callback) {
  callback(`${someInput} and terminated by executing callback `);
}

function middleware(someInput, callback) {
  return terminator(`${someInput} touched by middleware `, callback);
}

function initiate() {
  const someInput = "hello this is a function ";
  middleware(someInput, function (result) {
    console.log(result);
  });
}

initiate();
