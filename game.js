

function Wizard(options){
  var option = options || {};
  this.wizName = option.wizName || "Mr.Wizard";
  this.health = option.health;
  this.spell = 
  this.status = 1;
  this.cast = function(enemyWizard){
    var hitOrMiss = Math.floor ((Math.random() *12) +1);
    if (hitorMiss > 4) {
      spell.damage = enemyWizard.health - this.spell.damage;
      console.log("You hit the enemy wizard with your spell! You do ");
    }
  };
}
function Spells (option){
  this.name = option.name;
  this.school = option.school;
  this.damage = option.damage;
}


function Weather (option){
  this.name = option.name;
  this.typeID = option.typeID;
}


var heat = new Weather ({name: "Heat Wave", typeID:1});
var cold = new Weather ({name: "Cold Snap", typeID:2});
var storm = new Weather ({name: "Storm", typeID:3});

//DEATH
var deathWiz = new Wizard ({wizName: "Rot", health:75,});
var decay = new Spells({name:"Decay", damage:20,school: "Death"});
// var death2Zomb = new Spells({name:"Summon Undead", damage:20,school: Death, affects: familar });
// var death3Fright =new Spells({name:"Decay", damage:5,school: Death, affects: frighten });
// var curse = new Affects({name: "Cursed", damage: 5 })
//NATURE
var natureWiz = new Wizard ({wizName: "Bear Oakwood", health:120,});
var roots = new Spells({name:"Roots", damage: 20 ,school: "Nature"});
// var nat2Trnsfrm = new Spells({name:"Bear Form", damage: -100 ,school: Nature, affects: bear });

//FIRE
var fireball = new Spells({name:"Fireball", damage:25,school: "Fire"});
var fireWiz = new Wizard ({wizName: "Phoenix Burnslayer", health:100, spell: fireball});

// var burn = new Affects ({name: "Burn", affectType: "Damage over Time", damage: 7 });
//THUNDER
var thunderWiz = new Wizard ({wizName: "Griswold Thunder", health:90,});
var lightning = new Spells({name:"Lightning", damage:15 ,school: "Sky"});
//ILLUSION
var Illusion = new Wizard ({wizName: "Frederick Free", health:100,});
var invisibility= new Spells({name:"Invisibility", damage:35,school: "Illusion"});
// var ill2Blind = new Spells({name:"Blind", damage:5,school: Illusion});
// var ill3Dark = new Spells({name:"Darkness", damage:0, school: Illusion,});
var waterWiz = new Wizard ({wizName: "Jaina Iceheart", health:100,});
var icebreath = new Spells({name:"Icy Breath", damage:35,school: "Water"});


var enemyWizard = fireWiz;
