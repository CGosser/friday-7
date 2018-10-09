import { galacticAge } from "../src/backend";

describe("dates", function(){
let testAge = new galacticAge(34);

  it("should test whether ages are converted into objects", function(){
    expect(testAge.checker()).toEqual("object");
  })

  it("can convert the ages to those in years of mercury", function(){
    expect(testAge.planetAge("mercury")).toEqual(141.67);
  });

  it("can convert the ages to those in years of  venus", function(){
    expect(testAge.planetAge("venus")).toEqual(54.84);
  });

  it("can convert the ages to those in years of mars", function(){
    expect(testAge.planetAge("mars")).toEqual(18.09);
  });

  it("can convert the ages to those in years of jupiter", function(){
    expect(testAge.planetAge("jupiter")).toEqual(2.87);
  });

  it("can determine remaining life expectancy on other planets", function(){
    expect(testAge.lifeExpectancy("mercury")).toEqual(328.08);
    expect(testAge.lifeExpectancy("venus")).toEqual(127);
    expect(testAge.lifeExpectancy("mars")).toEqual(41.88);
    expect(testAge.lifeExpectancy("jupiter")).toEqual(6.64);
  });
  it("Determines how many years a user has left to live on each planet", function(){
    expect(testAge.actuarial("mercury")).toEqual(328.08)
  })
})
