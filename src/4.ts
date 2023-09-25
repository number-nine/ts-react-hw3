// import { nanoid } from "../node_modules/nanoid/index"
const { nanoid } = require("nanoid");

interface IKey<T> {
  signature: T;
  getSignature(): T;
}

type Signature = ReturnType<typeof nanoid>;

class Key implements IKey<Signature> {
  public signature: Signature;

  constructor() {
    this.signature = true;
  }
  getSignature() {
    return this.signature;
  }
}

console.log(nanoid());
console.log(typeof nanoid());

const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// export {};
