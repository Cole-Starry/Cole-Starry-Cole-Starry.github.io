

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


const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

document.querySelector('#prev').addEventListener('click', () => 
{
    currentImage--
    showImages()
}
)
document.querySelector('#next').addEventListener('click', () => 
{
    currentImage++
    showImages()
}
)
setInterval(() => {
    currentImage++
    showImages()
}, 5000)



