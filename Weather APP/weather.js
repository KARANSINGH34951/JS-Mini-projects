// let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e883c4b754eb3f40ffa1ed8b60fb1d5a`

// let city=`https://api.openweathermap.org/data/2.5/weather?q=erode&appid=e883c4b754eb3f40ffa1ed8b60fb1d5a`
let city = document.getElementById("city")
let temp = document.getElementById("temp")
let wind = document.getElementById("wind")
let humidity = document.getElementById("humidity")
let perc = document.getElementById("perc")
let cname = document.getElementById("name")


function getcurrent(){
  navigator.geolocation.getCurrentPosition(async(result)=>{
    console.log(result);
    const l = result.coords
    var lon;
    var lat;
    // Object.entries(result)
    lon = l.longitude
    lat = l.latitude
    console.log(lon);
    console.log(lat);

    const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e883c4b754eb3f40ffa1ed8b60fb1d5a`)
    // console.log(data);

    if(data.status==200){
      // console.log(data.json());
      // console.log("");
      const info=await data.json()
      // console.log(info);

        cname.innerHTML=info.name
        let K=info.main.temp

        let C = K - 273.15
        // console.log(C);

        temp.innerHTML=parseInt(C)
        wind.innerHTML=info.wind.speed + "km/h"
        // humidity.innerHTML=info.humidity  + "km/h"
        humidity.innerHTML=info.main.humidity  + "km/h"
        perc.innerHTML=info.main.pressure  + "km/h"

    }  
})
}

  
async function search() {

  // let cityvalue = city.value;
  const data1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=e883c4b754eb3f40ffa1ed8b60fb1d5a`);
  if (data1.status == 404) {
    const info1 = await data1.json();
    console.log("search func");
    console.log(info1);

    cname.innerHTML = info1.name;
    let K = info1.main.temp;
    let C = K - 273.15;
    console.log(C);

    temp.innerHTML = parseInt(C);
    wind.innerHTML = info1.wind.speed;
    humidity.innerHTML = info1.humidity;
    perc.innerHTML = info1.main.pressure;
  }
}

getcurrent()



















