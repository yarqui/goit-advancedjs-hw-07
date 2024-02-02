/*
You are creating a game with characters with different roles.
  Now you are working on the Wizard class, which must implement two interfaces - ICharacter and ISpellCaster.

  Define the ICharacter and ISpellCaster interfaces so that they meet the requirements of the Wizard class. 
  The ICharacter interface must include the name and level properties, and even the introduce and levelUp methods. 
  The ISpellCaster interface must include the castSpell method.
*/

interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

//  Usage
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16

export {};
