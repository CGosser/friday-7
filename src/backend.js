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
  actuarial(planet){
    if (planet == "mercury"){
      if (mercury() < lifeExpectancy("mercury")) {
        return lifeExpectancy("mercury") - mercury()
      } else if (mercury() >= lifeExpectancy("mercury")){
        return mercury() - lifeExpectancy("mercury")
      }
    }
    if (planet == "venus"){
      if (venus() < lifeExpectancy("venus")) {
        return lifeExpectancy("venus") - venus()
      } else if (venus() >= lifeExpectancy("venus")){
        return venus() - lifeExpectancy("venus")
      }
    }
    if (planet == "mars"){
      if (mars() < lifeExpectancy("mars")) {
        return lifeExpectancy("mars") - mars()
      } else if (mars() >= lifeExpectancy("mars")){
        return mars() - lifeExpectancy("mars")
      }
    }
    if (planet == "jupiter"){
      if (jupiter() < lifeExpectancy("jupiter")) {
        return lifeExpectancy("jupiter") - jupiter()
      } else if (jupiter() >= lifeExpectancy("jupiter")){
        return jupiter() - lifeExpectancy("jupiter")
      }
    }

  }
}
