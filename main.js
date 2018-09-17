
document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function() {
    $('select').formSelect();
  })
  //function to create proper divs
  function createDivLayout() {
    for (let i = 0; i < stateSelect.length; i++) {
      //create a Div for image
      let imgDiv = document.createElement("div")
      //add a class to img div for sizing
      imgDiv.classList.add("col-s4")
      //create a Div for text next to image
      let textDiv = document.createElement("div")
      //add a class to text div for sizing
      textDiv.classList.add("col-s8")
      //create a title Div
      let parkTitle = document.createElement("h3")
      //add a class to adust the title into the center
      parkTitle.classList.add("center-align")
      //append divs to results div so they appear before selector screen
      document.getElementById("results").appendChild(parkTitle)
      document.getElementById('results').appendChild(imgDiv)
      document.getElementById('results').appendChild(textDiv)
    }
  }
  //function to get data needed from the api
  let parkName
  let parkDescript
  let parkImg
//loop to get info for page
  function parkData() {
    for (i = 0; i < parkData.length; i++) {
      parkName = stateData[i].fullName
      parkDescript = stateData[i].description
      parkImg = stateData[i].images[0].url
      console.log(parkName)
    }
  }
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
        //create a Div for image
        let imgDiv = document.createElement("div")
        //add a class to img div for sizing
        imgDiv.classList.add("col-s4")
        //create a Div for text next to image
        let textDiv = document.createElement("div")
        //add a class to text div for sizing
        textDiv.classList.add("col-s8")
        //create a title Div
        var parkTitle[i] = document.createElement("h3")
        //add a class to adust the title into the center
        parkTitle.classList.add("center-align")
        //append divs to results div so they appear before selector screen
        document.getElementById("results").appendChild(parkTitle)
        document.getElementById('results').appendChild(imgDiv)
        document.getElementById('results').appendChild(textDiv)
      }
    }
    createDivLayout()
    //function to get data needed from the api
    var parkName=[]
    var parkDescript=[]
    //let parkImg
  //loop to get info for page
    function parkData() {
      for (i = 0; i < stateData.length; i++) {
        ParkTitle.innerText=stateData[i].fullName
        parkDescript = stateData[i].description
        //parkImg = stateData[i].images[0].url
      }console.log(parkName)
    }
    parkData()

  })
  //
  //end bracket DOM content loaded
})
