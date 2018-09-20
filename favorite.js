function favoriteDivs() {
  //create a div for the favorite park to go in
  let favoriteTitleDiv = document.createElement("h4")
  //add a class for alignment
  favoriteTitleDiv.classList.add("center-align")
  //append to container
  document.getElementById('contain').appendChild(favoriteTitleDiv)
  //create an img tag
  let favImg = document.createElement("img")
  //add a class for sizing probs
  favImg.classList.add("materialboxed")
  //favImg.classList.add("col")
  //favImg.classList.add("s6")
  favImg.classList.add("responsive-img")
  // append to container
  document.getElementById('contain').appendChild(favImg)
  //create a div for text
  let favDescript = document.createElement("p")
  // add a class
  favDescript.classList.add("left-align")
  favDescript.classList.add("col")
  favDescript.classList.add("s6")
  //append to container
  document.getElementById('contain').appendChild(favDescript)
}
let favorite = localStorage.getItem("park")
let imgSrc = localStorage.getItem("img")
let storeDescript = localStorage.getItem("descript")
console.log(favorite)
//write a function to check local storage and display based on what's there
function displayFavs() {
  if (!localStorage.getItem("park")) {
    document.getElementsByClassName('center-align')[0].innerText = "What are you doing?!? Choose a favorite park!"
  } else {
    document.getElementsByClassName('center-align')[0].innerText = `Your Favorite Park is ${favorite}`
    //document.getElementsByClassName('materialboxed')[0].style="width:50%;"
    document.getElementsByClassName('materialboxed')[0].src = imgSrc
    document.getElementsByClassName('left-align')[0].innerText=storeDescript
  }
}
document.addEventListener('DOMContentLoaded', function() {
      console.log("DOMContentLoaded")
      $(document).ready(function() {
        $('.materialboxed').materialbox();
      })
        favoriteDivs()
        displayFavs()

        //DOM Content Loaded bracket
})
