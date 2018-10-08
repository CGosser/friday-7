import { galacticAge } from "../src/backend";

describe("dates", function(){
let testAge = new galacticAge(34);

  it("should test whether ages are converted into objects", function(){
    expect(testAge.checker()).toEqual("object");
  })

  it("can convert the ages to those in years of mercury", function(){
    expect(testAge.mercury()).toEqual(8.16)
  });

  it("can convert the ages to those in years of  venus", function(){

  });

  it("can convert the ages to those in years of mars", function(){

  });

  it("can convert the ages to those in years of jupiter", function(){

  });

})
