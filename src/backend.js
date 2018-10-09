export class galacticAge {
  constructor(age){
    this.age = age;
  }

  checker(){
    return typeof this;
  }
  mercury(){
    return parseFloat((this.age * (1/0.24)).toFixed(2));
  }
  venus(){
    return parseFloat((this.age * (1/0.62)).toFixed(2));
  }
  mars(){
    return parseFloat((this.age * (1/1.88)).toFixed(2));
  }
  jupiter(){
    return parseFloat((this.age * (1/11.86)).toFixed(2));
  }
  lifeExpectancy(planet){
    if (planet == "mercury"){
      return parseFloat((78.74 * (1/0.24)).toFixed(2))
    }
    if (planet == "venus"){
      return parseFloat((78.74 * (1/0.62)).toFixed(2))
    }
    if (planet == "mars"){
      return parseFloat((78.74 * (1/1.88)).toFixed(2))
    }
    if (planet == "jupiter"){
      return parseFloat((78.74 * (1/11.86)).toFixed(2))
    }
  }

}
