class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(public name: string, private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false,
  public tenants: Person[] = []
  
  constructor(
    protected key: Key,
  ) {}

  abstract openDoor(key: Key): void;

  abstract getTenants(): void;

  comeIn(person: Person): void {
    if (!this.door) {
      console.log(`The door is locked. You should have a valid key`)
      return;
    }
    
    if (this.door && !this.tenants.find((tenant: Person) => tenant.name === person.name)) {
      this.tenants.push(person);
      return;
    } 

      console.log(`Such tenant is already in the house`)
    
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    } else {
      this.door = false;
    }
  }

  getTenants(): void {
    console.log(
      `Tenants of the house: ${
        this.tenants.map((tenant) => tenant.name).join(", ") || "No tenants yet"
      }`
    );
  }
}

//  Usage
const key = new Key();
const fakeKey = new Key();

const husband = new Person("Husband", key);
const wife = new Person("Wife", key);
const burglar = new Person("Burglar", fakeKey);

const house = new MyHouse(key);

house.getTenants(); // No tenants yet
house.openDoor(husband.getKey());
house.comeIn(husband);
house.comeIn(husband); // Such tenant is already in the house
house.getTenants(); // Tenants of the house: Husband

house.openDoor(wife.getKey());
house.comeIn(wife);
house.getTenants(); //Tenants of the house: Husband, Wife

house.openDoor(burglar.getKey());
house.comeIn(burglar); // The door is locked. You should have a valid key
house.getTenants(); //Tenants of the house: Husband, Wife
