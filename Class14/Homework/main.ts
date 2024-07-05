//OOPS [Final class]

//Static
class speak {
  brand: string;

  constructor(mybrand: string) {
    this.brand = mybrand;
  }

  static say() {
    console.log("s");
  }
}
speak.say();
