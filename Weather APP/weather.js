// let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e883c4b754eb3f40ffa1ed8b60fb1d5a`

let city=`https://api.openweathermap.org/data/2.5/weather?q=erode&appid=e883c4b754eb3f40ffa1ed8b60fb1d5a`



function getcurrent(){
  navigator.geolocation.getCurrentPosition((result)=>{
    console.log(result);
    const l = result.coords
    var lon;
    var lat;
    // Object.entries(result)
    lon = l.longitude
    lat = l.latitude
    console.log(lon);
    console.log(lat);
    let url = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e883c4b754eb3f40ffa1ed8b60fb1d5a`)
    .then((res)=>{
      return res.json()
    })
    .then((msg)=>{
      Object.entries(msg)
      console.log(msg[0]);
    })
    
})
}
getcurrent()
// async function getdata(){
  
//   let data = await function(){
//     getcurrent()
//   }
// }

















