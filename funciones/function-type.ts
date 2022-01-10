(() => {

  const addNumber = ( a: number, b: number ): number => a + b;
  const greet = ( name: string ) => `Hi ${ name }`;
  const saveTheWorld = () => `World is save`;


  let myFunction: (x: number, y: number) => number;

  myFunction = addNumber;
  // myFunction = greet ;

  // myFunction = 10;


})()