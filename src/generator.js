const ADJECTIVE_API_URL = "https://random-word-form.repl.co/random/adjective";

export class Generator {
    constructor(auxVerbArray) {
        this.auxVerbArray = auxVerbArray;
    }
    async generate() {
        const jon = "Jon";
        const auxVerb = this.getAuxVerb();
        const adj = await this.getAdjective();

        return jon + auxVerb + adj;
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
    getAuxVerb() {
        const random = Math.floor(Math.random() * this.auxVerbArray.length);
        return this.auxVerbArray[random];
    }
}