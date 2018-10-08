export class galacticAge {
  constructor(age){
    this.age = age;
  }

  checker(){
    return typeof this;
  }
  mercury(){
    return parseFloat(this.age * 0.24).toFixed(2);
  }
  venus(){
    return parseFloat(this.age * 0.62).toFixed(2);
  }
  mars(){
    return parseFloat(this.age * 1.88).toFixed(2);
  }
  jupiter(){
    return parseFloat(this.age * 11.86).toFixed(2);
  }
}
