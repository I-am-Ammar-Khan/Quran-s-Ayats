function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var random_ayat = getRandomInt(6236+1);

var ara = 'https://api.alquran.cloud/v1/ayah/'+random_ayat
var eng = 'https://api.alquran.cloud/v1/ayah/'+random_ayat+'/en.asad'

fetch(ara)
.then((response) =>{
    return response.json();
})
.then((data) =>{
    surah = data.data.surah["englishName"]
    ayatno = data.data['numberInSurah']
    var aratext = data.data["text"]
    console.log(surah)
    console.log(ayatno)
    console.log(aratext)
    document.getElementById("ayat").innerHTML = aratext
    document.getElementById("refrence").innerHTML = `${surah}:${ayatno}`
})


fetch(eng)
.then((response2) =>{
    return response2.json();
})
.then((data2) =>{
    var engtext = data2.data["text"]
    document.getElementById("meaning").innerHTML = engtext
})

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);

