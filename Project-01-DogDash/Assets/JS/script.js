
//Sign up for the pet Owner
var userNameInput = document.querySelector("#user-name");
var userEmailInput = document.querySelector("#user-email");
var userAddressInput = document.querySelector("#user-address");
var userInfoInput = document.querySelector("#user-info");
var userSignUp= document.querySelector("#user-submit");


userSignUp.addEventListener("click", function(event) {
    event.preventDefault();
//create user object
var user= {
    name: userNameInput.value.trim(),
    address: userAddressInput.value.trim(),
    email: userEmailInput.value.trim(),
    info: userInfoInput.value.trim(),
};

//local storage functions
localStorage.setItem("user",JSON.stringify(user));
});


//Sign uo for the Walker

var walkerNameInput = document.querySelector("#walker-name");
var walkerEmailInput = document.querySelector("#walker-email");
var walkerAddressInput = document.querySelector("#walker-address");
var walkerInfoInput = document.querySelector("#walker-info");
var walkerSignUp= document.querySelector("#walker-submit")


walkerSignUp.addEventListener("click", function(event) {
    event.preventDefault();
//create user object
var walker= {
    name: walkerNameInput.value.trim(),
    address: walkerAddressInput.value.trim(),
    email: walkerEmailInput.value.trim(),
    info: walkerInfoInput.value.trim(),
};

//local storage functions
localStorage.setItem("walker",JSON.stringify(walker));
});

//apiKey5687dedd3daac998d60647cb89f0066d
//Weather Api
var button=document.querySelector(".button");
var weatherInput=document.querySelector(".weatherInput")
var cityName=document.querySelector(".name");
var info=document.querySelector(".info");
var temp=document.querySelector(".temp");

button.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+weatherInput.value+'&appid=5687dedd3daac998d60647cb89f0066d')
    .then(response => response.json())
    .then(data => {
        var townName = date['name'];
        var cityTemp =data['main']['temp'];
        var weathInfo = data['weather'][0]['description'];

        cityName.innerHTML = townName;
        temp.innerHTML=cityTemp;
        info.innerHTML= weathInfo;
    })
    .catch(error= alert("Cannot locate this location"))
})