const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const  weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const error = document.querySelector('.not-found')


search.addEventListener('click',()=>{
    const APIKey = '4f342b8c16c3ec29abb7943592f7e2d7';
    const City = document.querySelector('.search-box input').value


    if(City === '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${APIKey}`)
    .then(response => response.json()).then(json => {



        
    if(json.cod == '404'){
        container.style.height = '400px';
        weatherBox.classList.remove('active')
        weatherDetails.classList.remove('active')
        error.classList.add('active')
        return
    }

    container.style.height = '555px';
    weatherBox.classList.add('active')
    weatherDetails.classList.add('active')
    error.classList.remove('active')




        const image = document.querySelector('.weather-box img')
        const temperature = document.querySelector('.weather-box .temp')
        const description = document.querySelector('.weather-box .desc')
        const humidity = document.querySelector('.weather-details .humidity span')
        const wind = document.querySelector('.weather-details .wind span')


        switch(json.weather[0].main){
            case 'Clear':
                image.src = './img2.png';
                break;
            case 'Rain':
                image.src = './img3.png';
                break;
            case 'Snow':
                image.src = './img5.jpg';
                break;
            case 'Clouds':
                image.src = './img7.jpeg';
                break;
            case 'Mist':
                image.src = './img4.png';
                break;
            case 'Haze':
                image.src = './img6.jpeg';
                break;

                default:
                    image.src = './img1.png'
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


    })

})



let i = 0;

const press = () => {
    if (i === 0) {
        document.getElementById("img").style.background = "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)";
        i = 1;
    } else if (i === 1) {
        document.getElementById("img").style.background = "linear-gradient(179.4deg, rgb(12, 20, 69) -16.9%, rgb(71, 30, 84) 119.9%)";
        i = 2;
    } else if(i === 2){
        document.getElementById("img").style.background = "linear-gradient(135deg, #578ae3, #feb47b, #e7c586)";
        i = 0;
    }
     
    
};
setInterval(press , 3000)