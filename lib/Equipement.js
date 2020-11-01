const Equipement = function(type, name){
  this.type = type
  this.name = name
  this.bonusAttaque = 0
  this.bonusDefense = 0
  this.description = ''
  this.bonusRapidite = 0

  this.setBonusAttaque = (newBonusAttaque) => {
    this.bonusAttaque = newBonusAttaque
  }
  this.setBonusDefense = (newBonusDefense) => {
    this.bonusDefense = newBonusDefense
  }
  this.setDescription = (newDescription) => {
    this.description = newDescription
  }
  this.setBonusRapidite = (newBonusRapidite) => {
    this.bonusRapidite = newBonusRapidite
  }
}
