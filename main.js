let API = 'http://api.openweathermap.org/data/2.5/weather?q=';
let second = '&appid=b067377a72c98ae6963cdae2e35408d9'
let input, btn, output
input = document.getElementById('input')
btn = document.getElementById('btn')
output = document.getElementById('output')
let text = input.value




const searchWeather = async () => {
    const url = API + input.value + second
    let requset = await fetch(url)
    let response = await requset.json()
    output.innerHTML=''
    renderWeather(response)
    console.log(response)
    input.value=''

}

const renderWeather = (results) => {
    output.innerHTML = results.name.toUpperCase()

        let div = document.createElement('div')
        let coord = document.createElement('h2')
        coord.innerHTML = 'cordinates: ' + 'lon:' + results.coord.lon +'   ' + 'lat:' + results.coord.lat
let temp=document.createElement('h2')
temp.innerHTML= 'tempurature: ' + 'min:'+(results.main.temp_min -273.15 ).toFixed(1)+'   ' +  'max:' + (results.main.temp_max -273.15).toFixed(1)
 let country=document.createElement('h2')
 country.innerHTML= 'country: ' + results.sys.country
let weather=document.createElement('h2')
weather.innerHTML='weather:'+ results.weather[0].main
        let wind=document.createElement('h2')
        wind.innerHTML='wind:'+ 'deg:' + '' + results.wind.deg   +  ''  +   'speed:' +results.wind.speed

        div.append(coord,temp,country,weather,wind)
        output.append(div)

}


document.body.append(input, btn,output)

btn.addEventListener('click', () => {
    searchWeather()
})




