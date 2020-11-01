// const Joueur = require('./lib/Joueur')
// const Equipment = require('./lib/Equipement')
// const Personnage = require('./lib/Personnage')
// const Combat = require('./lib/Combat')


let joueur_Un = new Joueur('Jean-Claude','JCdu38','password_secret')
let perso1 = new Personnage({
  name: 'tatain',
  vie: 105,
  attaque:8,
  defense:11
})
let perso2 = new Personnage({
  name: 'barbosa',
  vie:80,
  attaque:5,
  defense:15
})

const hache = new Equipement('arme', 'hache')
hache.setBonusAttaque(2)
hache.setDescription('hache de combat')
hache.setBonusRapidite(-2)


perso1.equiper(hache)

let combat = new Combat(perso1,perso2)
while ( !combat.setGagnant()){
  combat.round()
}