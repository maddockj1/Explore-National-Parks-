
document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function() {
    $('select').formSelect();
  })

  //Event Listener triggers getting data
  document.getElementById('submit').addEventListener('click', function() {
    event.preventDefault()
    //varaiable for getting value of state drop list
    let stateSelect = document.getElementById("mySelect").value
    console.log(stateSelect)
    //allows URL to be changed by drop menu
    let url = `https://api.nps.gov/api/v1/parks?api_key=v8ZxkynxpNzIjrYpuGL7Vr6trBu2WzWT9CSPaowj&fields=images&parkCode=${stateSelect}`
    //console.log(url)
     let stateData
    //       //axios.get(url)
    //       //.then((response) => {
           stateData = COLORADO["data"]
           console.log(stateData)
    //     })
    // }
    //function to create proper divs
    function createDivLayout() {
      for (let i = 0; i < stateData.length; i++) {

        //create row for title
        let titleDiv= document.createElement("div")
        titleDiv.classList.add("row")
        titleDiv.id="title"
        titleDiv.classList.add("title1")

        //create an element for title to go in
        let parkTitle= document.createElement("h3")
        //add a class to adust the title into the center
        parkTitle.classList.add("center-align")

//create row div for img and text
        let alignImgText=document.createElement("div")
        alignImgText.classList.add("row")
        alignImgText.id="alignment"

        let imgTag = document.createElement("img")
        //add a class to img div for sizing
        imgTag.classList.add("col")
        imgTag.classList.add("s4")
        //create a Div for text next to image

        let textDiv = document.createElement("div")
        //add a class to text div for sizing
        textDiv.classList.add("col")
        textDiv.classList.add("s8")

        //add a div row for button
        let buttonDiv=document.createElement("div")
        //add row class to div
        buttonDiv.classList.add("row")
        buttonDiv.id="button"
        //add a button to Favorite a park
        let favButton= document.createElement("a")
        favButton.classList.add("waves-effect")
        favButton.classList.add("waves-light")
        favButton.classList.add("btn")
        favButton.classList.add("green")
        favButton.classList.add("darken-4")

        //append divs to results div so they appear before selector screen
        //appending title row to container
        document.getElementById('contain').appendChild(titleDiv)
        //append title to is row

        document.getElementById("contain").appendChild(alignImgText)

        document.getElementById('contain').appendChild(buttonDiv)

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
        document.getElementsByClassName("center-align")[i].innerText=stateData[i].fullName
        document.getElementsByClassName("s4")[i].src = stateData[i].images[0].url
        document.getElementsByClassName("s8")[i].innerText = stateData[i].description
        document.getElementsByClassName("btn")[i+1].innerText= "Favorite!"
      }
    }
    parkData()

  })
  //
  //end bracket DOM content loaded
})
