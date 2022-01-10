(() => {

  let avenger:any = 123;
  let exist;
  let power;


  avenger = 'Dr Strange';

  // casting
  console.log( (avenger as string).charAt(0) );

  avenger = 1500.123
  console.log( (<number>avenger).toFixed(2) );

})()