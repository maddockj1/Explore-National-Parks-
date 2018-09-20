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

describe("test create display layouts",()=>{
  let div
  before(()=>{
    div=favoriteDivs()
  })
  it("does displayFavs exist", ()=>{
    expect(displayFavs).to.be.a("function")
  })
  it("the h3 have text", ()=>{
    expect(document.getElementsByClassName('center-align')[0].innerText).to.not.equal("")
  })
  it("does the Image have a src", ()=>{
    expect(document.getElementsByClassName('materialboxed')[0].src).to.not.equal("")
  })

})
