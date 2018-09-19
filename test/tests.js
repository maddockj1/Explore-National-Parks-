const expect = chai.expect

describe("check tests are running",()=>{
  it("ran a test", ()=>{
    expect(true).to.equal(true);
  })
})


describe("favoriteDivs should be a function",()=>{
  it("is a function", ()=>{
    expect(favoriteDivs).to.be.a('function')
  })
})

describe("displayFavs should be a function",()=>{
  it ("is a funciton", ()=>{
    expect(displayFavs).to.be.a('function')
  })
})
describe("check local storage",()=>{
  it("is empty", ()=>{
    expect(displayFavs()).to.equal(false)
  })
})
