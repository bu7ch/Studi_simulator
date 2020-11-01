let Joueur = function(pseudo, email, password) {
  this.pseudo = pseudo;
  this.email = email;
  this.password = password;
  this.personnages = [];
  this.team = null;
  this.choisirTeam = () => {};
  this.createPersonnage = () => {};
  this.addPersonnage = (personnage) => {
    this.personnages.push(personnage);
  };
};

