(() => {

  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string
  }

  // console.log(object);

  let myCustomVariable: (string | number | Hero) = 'Whatever';
  console.log( typeof myCustomVariable );

  myCustomVariable = 20;
  console.log( typeof myCustomVariable );

  // console.log(object);
  myCustomVariable = {
    name: 'Bruce',
    age: 43,
    powers: [1]
  }
  console.log( typeof myCustomVariable );

})()