function doDamage(damage){
    var hBar = $('#enemyBar'),
        bar = hBar.find('.lifeBar'),
        hit = hBar.find('.healthHit'),
        total = hBar.data('total'),
        value = hBar.data('value');

        if (value < 0){
            console.log("Enemy is already dead");
            return;
        }

        var newValue = value - damage;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";

        hit.css('width', hitWidth);
        hBar.data('value', newValue);

        setTimeout(function(){
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
        }, 500);
}

function drainMana (mana){
    var mBar = $('#playerBar'),
        bar = mBar.find('.manaBar'),
        hit = mBar.find('.manaHit'),
        total = mBar.data('total'),
        value = mBar.data('value');

        if (value < 0){
            console.log("You have no mana");
            return;
        }

        var newValue = value - mana;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (mana / value) * 100 + "%";

        hit.css('width', hitWidth);
        mBar.data('value', newValue);

        setTimeout(() =>{
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
        }, 500);
}

class Fighter {
    constructor(name) {
        //Fighter Stats
        this.name = name;
        this.maxLife = 100;
        this.life = 100;
        this.maxMana = 20;
        this.mana = 20;
        this.strength = 18;
        this.vitality = 15;
        this.dex = 14;
        this.int = 10;
        this.charisma = 14;
        this.wisdom = 12;
        this.moveList = ['Attack', 'Power Strike', 'Status'];
        this.speak = this.speak.bind(this);
        this.attack = this.attack.bind(this);
        this.powerStrike = this.powerStrike.bind(this);
        this.status = this.status.bind(this);
        this.moveCalls = [this.attack, this.powerStrike, this.status];
    }

    attack(target) {
        let dmg = Math.floor(Math.random() * this.strength);
        target.setHealth(dmg);
        let attackMessage = `${this.getName()} attacked ${target.getName()} for ${dmg} damage`;
        this.speak(attackMessage);
        return dmg;
    }

    powerStrike(target) {
        let dmg = Math.floor(Math.random() * this.int) + 15;
        target.setHealth(dmg);
        this.mana -= 10;
        drainMana (10);
        let powerStrikeMessage = `${this.getName()} charges up their weapon and performs a power strike on ${target.getName()} for ${dmg} damage`;
        this.speak(powerStrikeMessage);
        return dmg;
    }
    
    status() {
        let healthNotice = `${this.getName()} shouts: "I currently have ${this.getHealth()} hitpoints"`;
        this.speak(healthNotice);
    }

    speak(sayThis) {
        document.getElementById('updateID').innerText = sayThis;
    }

    setHealth(amount){
        this.life -= amount;
    }

    getHealth(){
        return this.life;
    }

    getName(){
        return this.name;
    }

    drainMana (mana){
        var mBar = $('#playerBar'),
            bar = mBar.find('.manaBar'),
            hit = mBar.find('manaHit'),
            total = mBar.data('total'),
            value = mBar.data('value');

        if (value < 0){
            console.log("You have no mana");
            return;
        }

        var newValue = value - mana;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";

        hit.css('width', hitWidth);
        mBar.data('value', newValue);

        setTimeout(() => {
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
        }, 500);
    }
}

class Ninja {
    constructor(name) {
        //Thief Stats
        this.name = name;
        this.maxLife = 70;
        this.life = 70;
        this.maxMana = 60;
        this.mana = 60;
        this.strength = 12;
        this.vitality = 13;
        this.dex = 18;
        this.int = 12;
        this.charisma = 12;
        this.wisdom = 14;
        this.moveList = ['Attack', 'Flip Strike', 'Status'];
        this.speak = this.speak.bind(this);
        this.attack = this.attack.bind(this);
        this.flipStrike = this.flipStrike.bind(this);
        this.status = this.status.bind(this);
        this.moveCalls = [this.attack, this.flipStrike, this.status];
    }
    
    attack(target) {
        let dmg = Math.floor(Math.random() * this.dex);
        target.setHealth(dmg);
        let attackMessage = `${this.getName()} attacked ${target.getName()} for ${dmg} damage`;
        this.speak(attackMessage);
        return dmg;
    }
    
    flipStrike(target) {
        let dmg = this.dex + this.int;
        target.setHealth(dmg);
        this.mana -= 10;
        drainMana(10);
        let flipStrikeMessage = `${this.getName()} flips over ${target.getName()} and performs a quick strike for ${dmg} damage`
        this.speak(flipStrikeMessage);
        return dmg;
    }

    status() {
        let healthNotice = `${this.getName()} shouts: "I currently have ${this.getHealth()} hitpoints"`;
        this.speak(healthNotice);
    }

    speak(sayThis) {
        document.getElementById('updateID').innerText = sayThis;
    }

    setHealth(amount){
        this.life -= amount;
    }

    getHealth(){
        return this.life;
    }

    getName(){
        return this.name;
    }

    drainMana (mana){
        var mBar = $('#playerBar'),
            bar = mBar.find('.manaBar'),
            hit = mBar.find('manaHit'),
            total = mBar.data('total'),
            value = mBar.data('value');

        if (value < 0){
            console.log("You have no mana");
            return;
        }

        var newValue = value - mana;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";

        hit.css('width', hitWidth);
        mBar.data('value', newValue);

        setTimeout(() => {
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
        }, 500);
    }
}

class Mage {
    constructor(name) {
        //Mage Stats
        this.name = name;
        this.maxLife = 50;
        this.life = 50;
        this.maxMana = 50;
        this.mana = 80;
        this.strength = 10;
        this.vitality = 11;
        this.dex = 16;
        this.int = 18;
        this.charisma = 11;
        this.wisdom = 16;
        this.moveList = ['Attack', 'Fireball', 'Status'];
        this.speak = this.speak.bind(this);
        this.attack = this.attack.bind(this);
        this.fireball = this.fireball.bind(this);
        this.status = this.status.bind(this);
        this.moveCalls = [this.attack, this.fireball, this.status];
    }

    attack(target) {
        let dmg = Math.floor(Math.random() * this.strength);
        target.setHealth(dmg);
        let attackMessage = `${this.getName()} attacked ${target.getName()} for ${dmg} damage`;
        this.speak(attackMessage);
        return dmg;
    }

    fireball(target) {
        let dmg = this.int + Math.floor(Math.random() * (this.int / 2));
        target.setHealth(dmg);
        this.mana -= 5;
        drainMana(5);
        let fireballMessage = `${this.getName()} launched a fireball at ${target.getName()} blasting for ${dmg} damage`;
        this.speak(fireballMessage);
        return dmg;
    }

    status() {
        let healthNotice = `${this.getName()} shouts: "I currently have ${this.getHealth()} hitpoints"`;
        this.speak(healthNotice);
    }

    speak(sayThis) {
        document.getElementById('updateID').innerText = sayThis;
    }

    setHealth(amount){
        this.life -= amount;
    }

    getHealth(){
        return this.life;
    }

    getName(){
        return this.name;
    }

    drainMana (mana){
        var mBar = $('#playerBar'),
            bar = mBar.find('.manaBar'),
            hit = mBar.find('manaHit'),
            total = mBar.data(this.maxMana),
            value = mBar.data(this.mana);

        if (value < 0){
            console.log("You have no mana");
            return;
        }

        var newValue = value - mana;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";

        hit.css('width', hitWidth);
        mBar.data('value', newValue);

        setTimeout(()=> {
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
        }, 500);
    }
}

function battleSimulate(fighter1, fighter2) {
    while (fighter1.life > 0 && fighter2.life > 0) {

    }
}

function playerTurn(player1, bill) {
    for (let i = 0; i < player1.moveList.length; i++) {
        if(player1.moveList[i] === "Status") {
            $('#turnArea').append('<button class="' + i + '">' + player1.moveList[i] + '</button>');
            $('.' + i).click(() => {
                player1.moveCalls[i](bill);
            });
        } else {
            $('#turnArea').append('<button class="' + i + '">' + player1.moveList[i] + '</button>');
            $('.' + i).click(() => {
                doDamage(player1.moveCalls[i](bill));
            });
        }
    }
}


var Wizard = new Mage('Wizard');
var Barbarian = new Fighter('Barbarian');
playerTurn(Wizard,Barbarian);







