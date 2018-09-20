document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
    $('.materialboxed').materialbox();
  })
  $(document).ready(function() {
    $('select').formSelect();
  })


  //Event Listener triggers getting data
  document.getElementById('submit').addEventListener('click', function() {
    event.preventDefault()
    //varaiable for getting value of state drop list
    let stateSelect = document.getElementById("mySelect").value
    //console.log(stateSelect)
    //allows URL to be changed by drop menu
    let url = `https://api.nps.gov/api/v1/parks?api_key=v8ZxkynxpNzIjrYpuGL7Vr6trBu2WzWT9CSPaowj&fields=images&parkCode=${stateSelect}`
    //console.log(url)
    let stateData
    let objData
           axios.get(url)
           .then((response) => {
    objData = response["data"]
    stateData=objData.data
    //console.log(stateData)
    //console.log(stateData.length)

//need a function to delete previous Divs for when you switch states otherwise it will contiune making buttons and divs
    function clearLayout(){
      //get newcontain and set html to empty
      document.getElementById("newContain").innerHTML=""
    }
    clearLayout()
    //function to create proper divs
    function createDivLayout() {
      for (let i = 0; i < stateData.length; i++) {

        //create row for title
        let titleDiv = document.createElement("div")
        titleDiv.classList.add("row")
        titleDiv.id = "title"
        titleDiv.classList.add("title1")

        //create an element for title to go in
        let parkTitle = document.createElement("h3")
        //add a class to adust the title into the center
        parkTitle.classList.add("center-align")

        //create row div for img and text
        let alignImgText = document.createElement("div")
        alignImgText.classList.add("row")
        alignImgText.id = "alignment"

        let imgTag = document.createElement("img")
        //add a class to img div for sizing
        imgTag.classList.add("materialboxed")
        imgTag.classList.add("col")
        imgTag.classList.add("s4")

        imgTag.classList.add("parkPhoto")
        //create a Div for text next to image

        let textDiv = document.createElement("div")
        //add a class to text div for sizing
        textDiv.classList.add("col")
        textDiv.classList.add("s8")

        //add a div row for button
        let buttonDiv = document.createElement("div")
        //add row class to div
        buttonDiv.classList.add("row")
        buttonDiv.id = "button"
        //add a button to Favorite a park
        let favButton = document.createElement("a")
        favButton.classList.add("waves-effect")
        favButton.classList.add("waves-light")
        favButton.classList.add("btn")
        favButton.classList.add("green")
        favButton.classList.add("darken-4")
        favButton.classList.add("btn1")
        //append divs to results div so they appear before selector screen
        //appending title row to container
        document.getElementById('newContain').appendChild(titleDiv)
        //append title to is row

        document.getElementById("newContain").appendChild(alignImgText)

        document.getElementById('newContain').appendChild(buttonDiv)

        titleDiv.appendChild(parkTitle)
        //append row to add img and description

        //append img and descript to row
        alignImgText.appendChild(imgTag)
        alignImgText.appendChild(textDiv)
        //append button row to contain

        //append button to its row
        buttonDiv.appendChild(favButton)

      }
    }
    createDivLayout()
    //function to get data needed from the api
    //let parkImg
    //loop to get info for page
    function parkData() {
      for (i = 0; i < stateData.length; i++) {
        document.getElementsByClassName("center-align")[i].innerText = stateData[i].fullName
        document.getElementsByClassName("s4")[i + 1].src = stateData[i].images[0].url
        document.getElementsByClassName("s8")[i].innerText = stateData[i].description
        document.getElementsByClassName("btn1")[i].innerText = "Favorite!"
      } console.log(stateData[0].fullName)
    }
  parkData()

    //console.log(document.getElementsByClassName("btn1"))


    //eventlistener function for all fav buttons
    function addFavorites() {
      let favoriteButtons = document.getElementsByClassName("btn1")
      //console.log(favoriteButtons);
      for (let i = 0; i < favoriteButtons.length; i++) {
        favoriteButtons[i].addEventListener('click', function() {
          event.preventDefault()
          //array of park names
          let nameArr = document.getElementsByClassName("center-align")
          //console.log(nameArr[i])
          //arrayof img src
          let imgArr= document.getElementsByClassName("parkPhoto")
          //console.log(imgArr[i])
          // description array
          let descriptArr= document.getElementsByClassName("s8")
          console.log(descriptArr[i]);
          //loop through buttons and names hopefully
          localStorage.setItem("park", nameArr[i].innerText)
          localStorage.setItem("img", imgArr[i].src)
          localStorage.setItem("descript", descriptArr[i].innerText)
        })
      }
    }
    addFavorites()
  })
    //end brackets of submit
  })
  //end bracket DOM content loaded
})
