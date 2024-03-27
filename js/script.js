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
