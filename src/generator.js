const WORD_API_URL = "https://random-word-api.vercel.app/api?words=1";

export class Generator {
  constructor(people, auxVerbArray) {
    this.people = people;
    this.auxVerbArray = auxVerbArray;
  }
  async generate() {
    const person = this.getPerson();
    const auxVerb = this.getAuxVerb();
    const word = await this.getWord();

    return person + auxVerb + word;
  }
  async getWord() {
    try {
      const response = await fetch(WORD_API_URL);
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error("No Jon", error);
      return "Boob";
    }
  }
  getAuxVerb() {
    const random = Math.floor(Math.random() * this.auxVerbArray.length);
    return this.auxVerbArray[random];
  }
  getPerson() {
    const random = Math.floor(Math.random() * this.people.length);
    return this.people[random];
  }
}
