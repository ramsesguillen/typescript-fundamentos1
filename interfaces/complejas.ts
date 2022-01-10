(() => {

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress( id: string ): string;
  }


  interface Address {
    id: number;
    zip: string;
    city: string;
  }



  const client: Client = {
    name: 'Fulano',
    age: 25,
    address: {
      id: 123,
      zip: 'KYF SUD',
      city: 'LA'
    },
    getFullAddress( id: string ) {
      return this.address.city;
    }
  }


  const client2: Client = {
    name: 'Laura',
    age: 25,
    address: {
      id: 12,
      city: "NY",
      zip: 'AS OS'
    },
    getFullAddress( id: string ) {
      return this.address.city;
    }
  }

})()