$(document).ready(function(){
    var hitBtn = $('button.damage'),
        hBar = $('#enemyBar'),
        bar = hBar.find('.lifeBar'),
        hit = hBar.find('.hit');

    hitBtn.on("click", function(){
        var total = hBar.data('total'),
            value = hBar.data('value');

        if (value < 0){
            log("you dead, reset");
            return;
        }

        var damage = Math.floor(Math.random()*total);
        var newValue = value - damage;
        var barWidth = (newValue / total) * 100;
        var hitWidth = (damage / value) * 100 + "%";

        hit.css('width', hitWidth);
        hBar.data('value', newValue);

        setTimeout(function(){
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
        }, 500);

        log(value, damage, hitWidth);

        if( value < 0){
            log("DEAD");
        }
    });
});
function doDamage(damage){
    var hBar = $('#enemyBar'),
        bar = hBar.find('.lifeBar'),
        hit = hBar.find('.hit');
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

class Fighter {
    constructor(name) {
        //Fighter Stats
        this.name = name;
        this.life = 100;
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
        target.life -= dmg;
        let attackMessage = `${this.name} attacked ${target.name} for ${dmg} damage`;
        this.speak(attackMessage);
        return dmg;
    }

    powerStrike(target) {
        let dmg = Math.floor(Math.random() * this.int) + 15;
        target.life -= dmg;
        this.mana -= 10;
        let powerStrikeMessage = `${this.name} charges up their weapon and performs a power strike on ${target.name} for ${dmg} damage`;
        this.speak(powerStrikeMessage);
        return dmg;
    }
    
    status() {
        let healthNotice = `${this.name} shouts: "I currently have ${this.life} hitpoints"`;
        this.speak(healthNotice);
    }

    speak(sayThis) {
        document.getElementById('updateID').innerText = sayThis;
    }
}

class Ninja {
    constructor(name) {
        //Thief Stats
        this.name = name;
        this.life = 70;
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
        target.life -= dmg;
        let attackMessage = `${this.name} attacked ${target.name} for ${dmg} damage`;
        this.speak(attackMessage);
        return dmg;
    }
    
    flipStrike(target) {
        let dmg = this.dex + this.int;
        target.life -= dmg;
        this.mana -= 10;
        let flipStrikeMessage = `${this.name} flips over ${target.name} and performs a quick strike for ${dmg} damage`
        this.speak(flipStrikeMessage);
        return dmg;
    }

    status() {
        let healthNotice = `${this.name} shouts: "I currently have ${this.life} hitpoints"`;
        this.speak(healthNotice);
    }

    speak(sayThis) {
        document.getElementById('updateID').innerText = sayThis;
    }
}

class Mage {
    constructor(name) {
        //Mage Stats
        this.name = name;
        this.life = 50;
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
        target.life -= dmg;
        let attackMessage = `${this.name} attacked ${target.name} for ${dmg} damage`;
        this.speak(attackMessage);
        return dmg;
    }

    fireball(target) {
        let dmg = this.int + Math.floor(Math.random() * (this.int / 2));
        target.life -= dmg;
        this.mana -= 5;
        let fireballMessage = `${this.name} launched a fireball at ${target.name} blasting for ${dmg} damage`;
        this.speak(fireballMessage);
        return dmg;
    }

    status() {
        let healthNotice = `${this.name} shouts: "I currently have ${this.life} hitpoints"`;
        this.speak(healthNotice);
    }

    speak(sayThis) {
        document.getElementById('updateID').innerText = sayThis;
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
            $('.' + i).click(function () {
                player1.moveCalls[i](bill);
            });
        } else {
            $('#turnArea').append('<button class="' + i + '">' + player1.moveList[i] + '</button>');
            $('.' + i).click(function () {
                doDamage(player1.moveCalls[i](bill));
            });
        }
    }
}







