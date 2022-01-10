(() => {

  const batman:string = 'Batman';
  const greenLight:string = "Light's Green";
  const blackVolcano:string = `Hero: Black Volcano`;


  console.log( batman.toUpperCase() )
  console.log( batman[10]?.toUpperCase() || 'Is not')

})()