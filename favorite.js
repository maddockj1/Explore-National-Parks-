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
let local= localStorage.getItem("location")
let localnum= local.match(/([0-9\.\-]*)\w+/g)
console.log(localnum)
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
//getting weather data from the api
let url = `https://api.weatherbit.io/v2.0/current?units=I&key=7430405f80bb407a9a105f8235ed186b&&lat=${localnum[1]}&lon=${localnum[3]}`
console.log(url)
axios.get(url)
.then((response) => {
  weatherData=response.data
  console.log(weatherData)
})
function weatherLayout(){
  //create element
  let weatherTitle= document.createElement("h6")
  //add a class
  weatherTitle.classList.add("weatherTitleClass")
  //append the weather title
  document.getElementById('contain').appendChild(weatherTitle)
  let weatherParagraph=document.createElement('p')
  weatherParagraph.classList.add("weatherParaClass")
  document.getElementById('contain').appendChild(weatherParagraph)
}
function addWeatherInfo(){
  if (!localStorage.getItem("location")) {
    document.getElementsByClassName("")[0].innerText=""
  }else{
    document.getElementsByClassName("weatherTitleClass")[0].innerText="Weather in the National park currently is:"
    document.getElementsByClassName("weatherParaClass")[0].innerText=``
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
