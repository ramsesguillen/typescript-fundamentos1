(() => {


  class Apocalipsis {

    static instance: Apocalipsis;

    private constructor( public name: string ) {

    }

    static callApocalipsis(): Apocalipsis {
      if ( !Apocalipsis.instance ) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis');
      }

      return Apocalipsis.instance;
    }


    changeName( newName: string ): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName('Xavier');
  // console.log( apocalipsis1 );
  // console.log( apocalipsis2 );
  // console.log( apocalipsis3 );


  // const apocalipsis = new Apocalipsis('Soy apocalipsis....');
  // const apocalipsis2 = new Apocalipsis('Soy apocalipsis....2');
  // const apocalipsis3 = new Apocalipsis('Soy apocalipsis....3');

  // console.log( apocalipsis )


})()