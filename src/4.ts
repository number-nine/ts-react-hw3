// import { nanoid } from "../node_modules/nanoid/index"
const { nanoid } = require("nanoid");

interface IKey<T> {
  signature: T;
  getSignature(): T;
}

type Signature = ReturnType<typeof nanoid>;

class Key implements IKey<Signature> {
  signature: Signature; // як задається прайват-паблік при використанні інтерфесів? тут не дає, бо в інтерфейсі не задано, в інтерфейсі не дає, бо в типах неможна

  constructor()  {
    this.signature = true; //nanoid() йому пофіг, тип не перевіряє
  }
  getSignature(): Signature { //якщо типи задані в інтерфейсі, нашо їх дублювати тут?
    return this.signature;
  }
}

class Person {
    constructor(private key: Key) { }
    getKey(): Key {
        return this.key
    }
}

abstract class House {
   protected door: boolean;
  protected lock: Key;
  protected tenants: Person[] = [];
    public comeIn(visitor: Person):void {
        this.tenants.push(visitor);
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(protected lock: Key) {
    super();
    this.door = false;
  }
  public openDoor(key: Key): void {
    if (key === this.lock) {
      this.door = true;
    }
  }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

// export {};
