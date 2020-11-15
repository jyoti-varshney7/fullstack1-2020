//selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");

//event handler
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);
//function
function showtime()
{
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //AM  AND PM
    const amPm = hour > 12 ? 'PM' : 'AM';
    //12 hour formate
    hour = hour % 12 || 12;

    //output time

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showtime, 1000); 
}

function addZero(n){
    return ((parseInt(n,10) < 10 ? '0': '')+n);
}


//setGreeting 

function setGreeting(){
    let today = new Date();
    let hour = today.getHours();
    if(hour < 12){
        document.body.style.backgroundImage = 'url("../images/monring.jpg")'; 
        greeting.innerHTML = "Good Morning";
    } 
    else if(hour < 16){
        document.body.style.backgroundImage = 'url("../images/afternoon.jpg")'; 
        greeting.innerHTML = "Good Afternoon";
        document.body.style.color = "white"; 
    }
    else if(hour < 18){
        document.body.style.backgroundImage = 'url("../images/evening.jpg")'; 
        greeting.innerHTML = "Good Evening";
        document.body.style.color = "white"; 
    }
    else{
        document.body.style.backgroundImage = 'url("../images/night.jpg")'; 
        greeting.innerHTML = "Good Night";
        document.body.style.color = "white"; 
    }


}

function getName(){
    if(localStorage.getItem('myKeyname') === null){
        name.innerHTML = '[Enter name]';
    }
    else{
        name.innerHTML = localStorage.getItem('myKeyname');
    }
}

function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode==13) //enter key pressed
        {
            localStorage.setItem("myKeyname",e.target.innerHTML);
            name.blur();
        }
    }
    else{//blur event
        localStorage.setItem("myKeyname",e.target.innerHTML);
    }
}

function getFormattedDate() 
{
    var today = new Date();
    var week = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat');
    var month = new Array('Jan','Feb','Mar','Apirl','May','June','July','Aug','Sept','Nov','Dec');
    var day  = week[today.getDay()];
    var dd   = today.getDate();
    var mm   = month[today.getMonth()-1];
    var yyyy = today.getFullYear();

    if(dd<10)  { dd='0'+dd } 

    date.innerHTML = day+' '+mm+' '+dd+' '+yyyy;
}

//function call

showtime();
setGreeting();
getName();
getFormattedDate(date);