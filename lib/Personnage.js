const Personnage = function (options) {
  this.name = options.name || "Anonyme";
  this.vie = options.vie || 100;
  this.attaque = options.attaque || 10;
  this.defense = options.defense || 10;
  this.experience = 0;
  this.inventaire = {};
  this.pouvoir = options.pouvoir || null;
  this.classe = "paysan";
  this.race = "humain";
  this.niveau = 1;
  this.rapidite = 100;

  this.attaquer = () => {
    let multiplier = Math.random() * 2 + 1;
    const degats = Math.ceil(this.attaque * multiplier);
    return degats;
  };
  this.defendre = (degats) => {
    this.multiplier = Math.random() * 2 + 1;
    degats = Math.ceil(degats - this.defense / multiplier);
    degats = degats >= 0 ? degats : 1;
    this.vie -= degats;
  };
  this.isMort = () => {
    return this.vie <= 0;
  };
  this.gagnerXP = (xp) => {
    console.log(`${this.name} gagne ${xp} d' experiences...`);
  };
  this.perdreXP = (xp) => {
    console.log(`${this.name} perd ${xp} d' experiences...`);
  };
  this.gagnerNiveau = () => {
    console.log(`${this.name} est de niveau ${this.niveau}`);
  };
  this.equiper = (item) => {
    let authorizedItem = [
      "bottes",
      "pantalon",
      "plastron",
      "gants",
      "casque",
      "mainGauche",
      "mainDroite",
      "pouvoir",
      "arme"
    ];

    if (authorizedItem.includes(item.type)) {
      if (this.inventaire[item.type]) {
        this.desequiper(this.inventaire[item.type]);
      }
      this.inventaire[item.type] = item;
      this.attaque += item.attaque;
      this.defense += item.defense;
      this.rapidite += item.rapidite;
      console.log(`vous êtes equipé : ${item.name}`);
    } else {
      console.log(`le type de l'item n'est pas authorisé`);
    }
  };
  this.desequiper = (itemOrType) => {
    let type =
      itemOrType.constructor.name === "Item" ? itemOrType.type : itemOrType;
    if (this.inventaire[type]) {
      let currentItem = this.inventaire[type];
      this.inventaire[type] = null;
      this.attaque -= currentItem.attaque;
      this.defense -= currentItem.defense;
      this.rapidite -= currentItem.rapidite;
      console.log(`vous retirez votre ${currentItem.name}`);
    } else {
      console.log(`vous n'avez pas cet objet`);
    }
  };
};
