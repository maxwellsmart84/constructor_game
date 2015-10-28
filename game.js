
    var deathMage = new Wizard ({name: "Rot", health:75,});
    var death1Decay = new Spells({name:"Decay", damage:20,school: Death, affects: curse });
    var death2Zomb = new Spells({name:"Summon Undead", damage:20,school: Death, affects: familar });
    var death3Fright =new Spells({name:"Decay", damage:5,school: Death, affects: frighten });

    var natureMage = new Wizard ({name: "Bear Oakwood", health:120,});
    var nat1Growth = new Spells({name:"Growth", damage: -20 ,school: Nature, affects: heal });
    var nat2Trnsfrm = new Spells({name:"Lichen", damage: -100 ,school: Nature, affects: heal });

    var fireMage = new Wizard ({name: "Phoenix Burnslayer", health:100,});
    var fire1Fball = new Spells({name:"Fireball", damage:25,school: Fire, affects: burn });
    var burn = new Affects ({name: "Burn", affectType: "Damage over Time", damage: 7 });


    var thunderMage = new Wizard ({name: "Griswold Thunder", health:90,});
    var thunder1Fly = new Spells({name:"Fly", damage:0 ,school: Sky, affects: fly });


    var illusionMage = new Wizard ({name: "Frederick Free", health:100,});
    var ill1Invis= new Spells({name:"Invisibility", damage:35,school: Illusion, affects: invis });
    var ill2Blind = new Spells({name:"Blind", damage:5,school: Illusion, affects: blind });
    var ill3Dark = new Spells({name:"Darkness", damage:0, school: Illusion, affects: darkness });

    var waterMage = new Wizard ({name: "Jaina Iceheart", health:100,});
    var ice1IceBrth = new Spells({name:"Icy Breath", damage:35,school: Water, affects: freeze });






console.log("Two wizards on the high tower meet.  Each, a candidate from their school, every 4 years only a single wizard survives to find his way in the world, which school do you represent?  Choose from the following: School of Fire, School of Water, School of Nature, School of Death, School of Illusion, School of Sky, School of Earth");

Math.floor ((Math.random() *12) +1);
function Wizard(options){
  var option = options || {};
  $(this).name = option.name;
  $(this).health = option.health;
  $(this).spell = new Spells ({name:"Magic Missle", damage:5, Affects: "none"});
  $(this).cast = function(enemy){
    var hitOrMiss = Math.floor ((Math.random() *12) +1);
    if (hit > 4) {
      console.log("You were unable to avoid being hit! Suffer the spell damage and affects");
      if (){

      }
      if (){

      }
      if (){

      }
      if (){

      }
      if (){

      }
      if (){

      }
      if (){

      }
      if (){

      }
      if (){

      }
      if (){

      }
    }

  };
}

function Spells (option){
  $(this).name = option.name;
  $(this).school = option.school;
  $(this).damage = option.damage;
  $(this).affects = new Affects ({name: "none"});
}


function Affects (option){
  $(this).name = option.name;
  $(this).affectType = option.affect;
  $(this).damage = option.damage;
  $(this).familarHP = 50;
  $(this).
}



//DEATH
var deathMage = new Wizard ({name: "Rot", health:75,});
var death1Decay = new Spells({name:"Decay", damage:20,school: Death, affects: curse });
var death2Zomb = new Spells({name:"Summon Undead", damage:20,school: Death, affects: familar });
var death3Fright =new Spells({name:"Decay", damage:5,school: Death, affects: frighten });
var curse = new Affects({name: "Cursed", damage: 5 })
//NATURE
var natureMage = new Wizard ({name: "Bear Oakwood", health:120,});
var nat1Growth = new Spells({name:"Growth", damage: -20 ,school: Nature, affects: heal });
var nat2Trnsfrm = new Spells({name:"Bear Form", damage: -100 ,school: Nature, affects: bear });

//FIRE
var fireMage = new Wizard ({name: "Phoenix Burnslayer", health:100,});
var fire1Fball = new Spells({name:"Fireball", damage:25,school: Fire, affects: burn });
var burn = new Affects ({name: "Burn", affectType: "Damage over Time", damage: 7 });
//THUNDER
var thunderMage = new Wizard ({name: "Griswold Thunder", health:90,});
var thunder1Fly = new Spells({name:"Fly", damage:0 ,school: Sky, affects: fly });
//ILLUSION
var illusionMage = new Wizard ({name: "Frederick Free", health:100,});
var ill1Invis= new Spells({name:"Invisibility", damage:35,school: Illusion, affects: invis });
var ill2Blind = new Spells({name:"Blind", damage:5,school: Illusion, affects: blind });
var ill3Dark = new Spells({name:"Darkness", damage:0, school: Illusion, affects: darkness });

var waterMage = new Wizard ({name: "Jaina Iceheart", health:100,});
var ice1IceBrth = new Spells({name:"Icy Breath", damage:35,school: Water, affects: freeze });
