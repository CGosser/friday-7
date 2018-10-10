export class galacticAge {
  constructor(age){
    this.age = age;
  }

  checker(){
    return typeof this;
  }

  planetConverter(planet, age) {
    const mercury = (1/0.24);
    const venus = (1/0.62);
    const mars = (1/1.88);
    const jupiter = (1/11.86);
    if (planet == "mercury"){
      return parseFloat((age * mercury).toFixed(2));
    }
    if (planet == "venus"){
      return parseFloat((age * venus).toFixed(2));
    }
    if (planet == "mars"){
      return parseFloat((age * mars).toFixed(2));
    }
    if (planet == "jupiter"){
      return parseFloat((age * jupiter).toFixed(2));
    }
  }

  planetAge(planet) {
    return this.planetConverter(planet, this.age);
  }

  lifeExpectancy(planet){
    return this.planetConverter(planet, 78.74);
  }

  actuarial(planet){
    const planetaryAge = this.planetAge(planet)
    const lifeExpectancy = this.lifeExpectancy(planet)
    let actuary = 0
      if ( planetaryAge < lifeExpectancy) {
        actuary = lifeExpectancy - planetaryAge;
      } else if (planetaryAge >= lifeExpectancy){
        actuary = planetaryAge - lifeExpectancy;
      }
    return parseFloat(actuary).toFixed(2)
    }
  }
