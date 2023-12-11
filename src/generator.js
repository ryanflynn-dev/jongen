const ADJECTIVE_API_URL = "https://random-word-form.repl.co/random/adjective";
const ANIMAL_API_URL = "https://random-word-form.repl.co/random/animal";
const NOUN_API_URL = "https://random-word-form.repl.co/random/noun";

export class Generator {
    constructor(people, auxVerbArray) {
        this.people = people;
        this.auxVerbArray = auxVerbArray;
    }
    async generate() {
        const person = this.getPerson();
        const auxVerb = this.getAuxVerb();
        const adj = await this.getAdjective();
        const nou = await this.getNoun();
        const ani = await this.getAnimal();

        return person + auxVerb + adj;
    }
    async getAdjective() {
        try {
            const response = await fetch(ADJECTIVE_API_URL);
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.error('No Jon', error);
            return 'Boob'
        }
    }    
    async getAnimal() {
        try {
            const response = await fetch(ANIMAL_API_URL);
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.error('No Jon', error);
            return 'Boob'
        }
    }    
    async getNoun() {
        try {
            const response = await fetch(NOUN_API_URL);
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.error('No Jon', error);
            return 'Boob'
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