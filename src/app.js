import { Generator } from "./generator.js";

const auxVerbs = [        
    "can",
    "cant",
    "could",
    "couldnt",
    "may",
    "maynot",
    "might",
    "mightnot",
    "must",
    "mustnt",
    "should",
    "shouldnt",
    "will",
    "willnot",
    "would",
    "wouldnt"
];

const people = [
    "jon",
    "p-dawg",
    "bry",
    "geesus"
];

const generator = new Generator(people, auxVerbs);
document.getElementById('generate').addEventListener('click', async () => {
    const newName = await generator.generate();
    document.getElementById('name').textContent = newName;
});