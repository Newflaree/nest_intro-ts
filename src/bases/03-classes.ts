export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${ this.id }.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  public scream() {
    console.log( `${ this.name.toUpperCase() }!!!` );
  }

  public speak() {
    console.log( `${ this.name }, ${ this.name }` );
  }
}

export const charmander = new Pokemon( 4, 'Charmander' );

console.log( charmander );

charmander.scream();
charmander.speak();
