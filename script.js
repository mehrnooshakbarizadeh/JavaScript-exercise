for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
    continue;
  }
  if (i % 5 === 0) {
    console.log("Buzz");
    continue;
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    continue;
  } else {
    console.log(i);
  }
}
