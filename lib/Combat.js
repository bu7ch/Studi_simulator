const Combat = function(perso1, perso2){
  let randomWin = Math.floor(Math.random() * 50) + 1;

  this.personnage1 = perso1;
  this.personnage2 = perso2;
  this.gagnant = null;
  this.perdant = null;
  // gestion de la date
  this.round = (attaque, defense) => {
    // TODO: FIX rules of combat into round
    // let randomGen = Math.floor(Math.random() * 50) + 1;
    // if (randomGen <= randomWin - 5) {
    //   this.gagnant = this.personnage1;
    // } else if (randomGen >= randomWin + 5) {
    //   this.gagnant = this.personnage2;
    // }
    // return this.setGagnant()
  };

  this.setGagnant = () => {
    return this.gagnant;
  };
  this.finDeCombat = () => {

  };
};



