
function favoriteDivs() {
    //create a div for the favorite park to go in
    let favoriteTitleDiv = document.createElement("div")
    //add a class for alignment
    favoriteTitleDiv.classList.add("center-align")
    //append to container
    document.getElementById('contain').appendChild(favoriteTitleDiv)
    //create a button
  }
  let favorite= localStorage.getItem("park")
  console.log(favorite)
  //write a function to check local storage and display based on what's there
  function displayFavs() {
    if(!localStorage.getItem("park")){
    document.getElementsByClassName('center-align')[0].innerText="What are you doing?!? Choose a favorite park!"
  }else {
    document.getElementsByClassName('center-align')[0].innerText=`Your Favorite Park is ${favorite}`
  }
  }
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded")

favoriteDivs()
displayFavs()

  //DOM Content Loaded bracket
})
