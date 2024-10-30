// character.js
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.inventory = [];
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name} for ${this.strength} damage.`);
        target.takeDamage(this.strength);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage. Remaining health: ${this.health}`);
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
        }
    }

    addToInventory(item) {
        this.inventory.push(item);
        console.log(`${item.name} has been added to ${this.name}'s inventory.`);
    }

    showInventory() {
        console.log(`${this.name}'s Inventory:`);
        this.inventory.forEach(item => console.log(`- ${item.name}`));
    }
}

// item.js
class Item {
    constructor(name, type, effect) {
        this.name = name;
        this.type = type;
        this.effect = effect;
    }
}

// quest.js
class Quest {
    constructor(title, description, reward) {
        this.title = title;
        this.description = description;
        this.reward = reward;
        this.completed = false;
    }

    completeQuest() {
        this.completed = true;
        console.log(`Quest "${this.title}" completed! Reward: ${this.reward.name}`);
    }
}

// game.js
class Game {
    constructor() {
        this.characters = [];
        this.quests = [];
        this.items = [];
    }

    addCharacter(character) {
        this.characters.push(character);
        console.log(`${character.name} has joined the game.`);
    }

    addQuest(quest) {
        this.quests.push(quest);
        console.log(`New quest added: "${quest.title}"`);
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item.name} has been added to the game.`);
    }

    start() {
        
