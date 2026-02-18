

const Welcome = document.querySelector('#Welcome')


const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const divWel = document.createElement('div')
Welcome.append(divWel)

var html;

if(isMorning){
html = '<div>Good Morning</div>';
}
else if(isAfternoon){
 html = '<div>Good Afternoon</div>';
}
else if(isEvening){ 
html = '<div>Good Evening</div>';
}
else{
 html = '<div>Error</div>';
}

divWel.innerHTML = html;

localStorage.setItem("It's a secret to everybody.", "The Brownie Recipe!")
