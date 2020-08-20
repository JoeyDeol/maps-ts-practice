import faker from 'faker';

export class User {
  public name: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${faker.fake("{{name.lastName}}")}`;
  }
}
