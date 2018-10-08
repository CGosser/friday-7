export class galacticAge {
  constructor(age){
    this.age = age;
  }

  checker(){
    return typeof this;
  }
  mercury(){
    return this.age * 0.24
  }
  venus(){
    return this.age * 0.62
  }
  mars(){
    return this.age * 1.88
  }
  jupiter(){
    return this.age * 11.86
  }
}
