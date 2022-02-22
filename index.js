// //creat map
// const myMap = {
//     coordinates:[],
//     businesses: [],
//     map:{},
//     markers: {},

//     makeMap(){
//         myMap.map = L.map('map', {
//             center: [pos.coords.latitude, pos.coords.longitude],
//             zoom: 10,
//         });
//     }


// }


//get user coordinates
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    const myMap = L.map('map', {
        center: [pos.coords.latitude, pos.coords.longitude],
        zoom: 10,
    });
    
    const marker = L.marker([pos.coords.latitude, pos.coords.longitude])
    marker.addTo(myMap).bindPopup('<p1><b>The No Longer A Secret, Lair</b></p1>').openPopup()


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
    }).addTo(myMap)

    return [pos.coords.latitude, pos.coords.longitude]
}


// var searchButton = document.getElementById("searchBttn")
// var searchBttnClick = searchButton.addEventListener("click", function(e){
//     console.log(e.value);
// })


console.log(getCoords());


//FourSquare API key
// fsq31p4CqS6CSqCZi6PHVRf2MnYjzbU/rwJWYn5onLwGFUA=