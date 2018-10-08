import { galacticAge } from "../src/backend";

describe("dates", function(){
let testAge = new galacticAge(50);

  it("should test whether ages are converted into objects", function(){
    expect(testAge.checker()).toEqual("string");
  })

  it("should perform mathematical operations upon these ages", function(){

  });

  it("can convert the ages to those in years of mercury", function(){

  });

  it("can convert the ages to those in years of  venus", function(){

  });

  it("can convert the ages to those in years of mars", function(){

  });

  it("can convert the ages to those in years of jupiter", function(){

  });

})
