document.querySelectorAll('.head-btn1').forEach((item) => {
    item.addEventListener('click', () => {
        location.replace('./regisration.html')
    })
})
document.querySelectorAll('.head-btn2').forEach((item) => {
    item.addEventListener('click', () => {
        location.replace('./authorization.html')
    })
})
const API_KEY = "64389c256a6d20179644053a";
const BASE_URL = "https://dummyapi.io/data/v1/";

async function makeQuery(endpoint, method = `GET`, payload = ``) {
    let options = {
        method,
        headers: {
            "app-id": API_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        ...(method.toLowerCase() !== "get" && { body: JSON.stringify(payload) }),
    };
    const response = await fetch(BASE_URL + endpoint, options);
    return await response.json();
}
async function usersDataBase() {
    let {data} = await makeQuery(`user?created=1`)
    console.log(data);
    return data
}
let usersOfCinemania = usersDataBase()
console.log(usersOfCinemania)


var isPlaying = false;
var audio = new Audio('sounds/b-music.mp3');

  document.querySelector(".footer-logo").addEventListener("click", function() {
    if (isPlaying) {
      audio.pause(); 
      audio.currentTime = 0; 
      isPlaying = false;
    } else {
      audio.play(); 
      isPlaying = true;
    }
  });

  document.querySelector(".findjob").addEventListener("mouseover",function() {
    document.querySelector(".findjob").style.color = 'black';
  });

  document.querySelector(".findjob").addEventListener("mouseout",function() {
    document.querySelector(".findjob").style.color = '';
  });


  
var inputElements = document.querySelectorAll("input");
  inputElements.forEach(function(inputElement) {
    inputElement.addEventListener("keypress", function(event) {
      console.log(event.key);
    });
  });

  console.log(`Betters`)