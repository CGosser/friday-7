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
    expect(testAge.venus()).toEqual(21.08)
  });

  it("can convert the ages to those in years of mars", function(){
    expect(testAge.mars()).toEqual(63.92)
  });

  it("can convert the ages to those in years of jupiter", function(){
    expect(testAge.jupiter()).toEqual(403.24)
  });

})
