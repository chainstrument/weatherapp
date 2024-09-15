 let valueSearch = document.getElementById('valueSearch'); 

 let city = document.getElementById('city'); 

 let temperature = document.getElementById('temperature');
 let description = document.querySelector('.description');
 let clouds = document.getElementById('clouds');
 let humidity = document.getElementById('humidity');
 let pressure = document.getElementById('pressure');

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(valueSearch.value != '')
    {
        searchWeather();
    }
})

let id = 'b47e368a40b89e4cdc426535743f6607';
let url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=' + id; 

//console.log(url);

//https://api.openweathermap.org/data/2.5/weather?q=lille&appid=b47e368a40b89e4cdc426535743f6607&units=metric

const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(response => response.json())
    .then(data => {
       console.log(data);
       if(data.cod == 200)
       {
            city.querySelector('figcaption').innerHTML = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/' + data.sys.country + '/shiny/32.png';
       }
       console.log(data.cod);
        //console.log(data.main)
 


        
    })


}