class Character {

    constructor(name, image) {
        this.charName = name;
        this.image = image;
    }

};

let defaultChars = [new Character("Asylum Demon", "https://i.imgur.com/kqzxm5z.png?1"),
new Character("Bell Gargoyles", "https://i.imgur.com/yZb2c4E.png?1"),
new Character("Capra Demon", "https://i.imgur.com/9dMlg6J.png")];

function sendVote(event) {
    choice = event.currentTarget.innerText;
    console.log("Voted " + choice);
};

function addListeners() {
    choiceIds = ["a-choice", "b-choice", "tie-choice", "undo-choice"];
    for (let choiceId of choiceIds) {
        choice = document.getElementById(choiceId);
        console.log(choice);
        choice.addEventListener("click", sendVote);
    }
};

function updateChoices(choiceA, choiceB) {
    aImage = document.getElementById("a-image");
    aImage.src = choiceA.image;
    aText = document.getElementById("a-text");
    aText.innerText = choiceA.charName;
    bImage = document.getElementById("b-image");
    bImage.src = choiceB.image;
    bText = document.getElementById("b-text");
    bText.innerText = choiceB.charName;
}

addListeners();
console.log(defaultChars);
updateChoices(defaultChars[0], defaultChars[1]);