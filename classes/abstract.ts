(() => {

  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,
    ){}
  }


  class Xmen extends Mutante {
    salvarElMundo() {
      return 'Mundo salvado';
    }
  }
  class Villain extends Mutante {
    conquistarElMundo() {
      return 'Mundo Conquistado';
    }
  }


  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villain('Magneto', 'Magnus');
  // console.log( wolverine.salvarElMundo() );
  // console.log( magneto.conquistarElMundo() );


  const printName = ( character: Mutante ) => {
    console.log( character.realName );
  }

  // printName( wolverine )

})()