document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');

        menuToggle.classList.toggle('animate');
        
        if (navLinks.classList.contains('active')) {
            navLinks.style.opacity = '1';
            navLinks.style.transform = 'translateX(0)';
        } else {
            navLinks.style.opacity = '0';
            navLinks.style.transform = 'translateX(-100%)';
        }
    });
});

const display = document.getElementById("display");
    function appendToDisplay(input){
        display.value += input;
    }
    function clearDisplay(){
        display.value = "";

    }
    function calculate(){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
        }
    }
    function percent(){
        try{
            display.value = display.value * 0.01;
        }
        catch{
            display.value = "Error";
        }
    }
    function invert(){
        try{
            display.value = display.value * -1;
        }
        catch{
            display.value = "Error";
        }
    }
    
function openStarWars(){
    window.open("starwars.html", "_blank");
}

const apiKey = '6c7ee377f5948a672a700ae586c41e4b';

const city = 'Ann Arbor';
const countryCode = 'US';

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;

fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else{
            throw new Error('Failed to retrieve weather data.');
        }
    })
    .then(data => {
        const kelvin = data.main.temp;
        const description = data.weather[0].description;

        const temp = (kelvin - 273.15) * 9/5 + 32;
        document.getElementById('temp').textContent = `Temperature: ${Math.round(temp)} °F`;
        document.getElementById('description').textContent = `Description: ${description}`;
    })
    .catch(error => {
        console.error(error.message);
    });
