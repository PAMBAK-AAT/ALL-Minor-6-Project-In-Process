
            /// Initialize the variables
let songIndex = 0
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('hamdBar');
let gif = document.getElementById('gif');
let hamdItems = Array.from(document.getElementsByClassName('hamdItem'));
let masterSongName = document.getElementById('masterSongName');

let hamd = [
    {hamdName: "Labbaik Yaa Aqsa" , filePath: "songs/1.mp3" , coverPath: "makkahsharif2.jpg"},
    {hamdName: "Labbaik Yaa Palestine" , filePath: "songs/2.mp3" , coverPath: "masjideAqsa2.jpg"},
    {hamdName: "Inshallah , Jeetenge hamin ham jeetenge" , filePath: "songs/3.mp3" , coverPath: "nature2.jpg"},
    {hamdName: "Hamare liye duniya Jannat nahin hai" , filePath: "songs/4.mp3" , coverPath: "map of palestine.jpg"},
    {hamdName: "Qirdaar mein jazbaa paida kar" , filePath: "songs/5.mp3" , coverPath: "palestine flag.jpg"},
]

hamdItems.forEach((ele,i)=>{
    console.log(ele,i);
    ele.getElementsByTagName("img")[0].src = hamd[i].coverPath;
    ele.getElementsByClassName("songName")[0].innerText = hamd[i].hamdName;
})
/// Handle play , pause / click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

            /// Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    // Update our seekBar
    // here we calculate the percentage of hamd that is run out and we set it's value in progress bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value)*(audioElement.duration)/100;
    // Because ((audioElement.currentTime/audioElement.duration)*100) = %;
    // so , audioElement.currentTime = %*audioElement.duration / 100;
})

/// Now we add event listener on the button that displays on the screen

const makeAllPlays = ()=>{// This function makes play to our all classes of "hamdItemPlay" 
    Array.from(document.getElementsByClassName("hamdItemPlay")).forEach( (element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName("hamdItemPlay")).forEach( (element)=>{
    element.addEventListener('click',(ele)=>{
        // console.log(ele.target);
        makeAllPlays();
        songIndex = parseInt(ele.target.id);
        ele.target.classList.remove("fa-play-circle");
        ele.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = hamd[songIndex].hamdName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener('click' , ()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    // audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = hamd[songIndex].filePath;
    masterSongName.innerText = hamd[songIndex].hamdName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = hamd[songIndex].hamdName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})

