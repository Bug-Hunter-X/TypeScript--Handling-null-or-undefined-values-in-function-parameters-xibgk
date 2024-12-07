function printString(str: string | null): void {
  if (str === null) {
    console.log('String is null');
    return;
  }
  console.log(str);
}

const myString: string | null = null;
printString(myString); // Works correctly

// Alternative solution using optional chaining and nullish coalescing
function printString2(str: string | null): void {
  console.log(str?.length ? str : 'String is null or empty');
}
printString2(myString);
printString2('hello');