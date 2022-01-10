(() => {


  // nunca tiene un retorno
  const error = ( message:string ):never => {
    throw new Error(message);
  }

  // error('Help!');

})()