function printString(str: string): void {
  console.log(str);
}

const myString: string | null = null;
printString(myString); // Error: Argument of type 'string | null' is not assignable to parameter of type 'string'.