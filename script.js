console.log("Welcome to spotify");
// initialized veriables
let songsindex = 0;
let audioelement = new Audio("songs/1.mp3")
// audioelement.play();
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'))

let songs =[
    {songname:"Vaikunth vithu",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"kacha badam rap",filepath:"songs/2.mp3",coverpath:"covers/1.jpg"},
    {songname:"Panjabi",filepath:"songs/3.mp3",coverpath:"covers/1.jpg"},
    {songname:"le galla teri",filepath:"songs/4.mp3",coverpath:"covers/1.jpg"},
    {songname:"shrivalli",filepath:"songs/5.mp3",coverpath:"covers/1.jpg"},
    {songname:"o ye ye ya",filepath:"songs/6.mp3",coverpath:"covers/1.jpg"},
    {songname:"Jat o teri",filepath:"songs/7.mp3",coverpath:"covers/1.jpg"}
]
songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname
//   let play =  element.getElementsByClassName("songitemplay")
//   if(play.classList ="fa-pause-circle" ){
//     console.log("song is running");
// element.addEventListener('click',(e)=>{
//    e.target.classList.add("fa-play-circle")
//    console.log("pause click");
// })

// }else{
//    e.target.classList.add("fa-play-circle")

// }
})

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
audioelement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
gif.style.opacity=1;
    }
    else{
        audioelement.pause();
masterplay.classList.add('fa-play-circle');
masterplay.classList.remove('fa-pause-circle');
gif.style.opacity=0;
    }
});
// listen to events
audioelement.addEventListener('timeupdate',()=>{
    //update seekbar
     progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime =( myprogressbar.value*audioelement.duration/100)
})
const makeallplace =()=>{Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
   element.classList.add("fa-play-circle")
   element.classList.remove("fa-pause-circle")
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplace()
        songsindex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioelement.src = `songs/${songsindex+1}.mp3`
        audioelement.currentTime=0;
        audioelement.play();
        mastersongname.innerText = songs[songsindex].songname
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})






document.getElementById("next").addEventListener('click',()=>{
    if(songsindex>7){
        songsindex = 0
    }
    else{
        songsindex +=1;
    }
    audioelement.src = `songs/${songsindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.play();
    mastersongname.innerText = songs[songsindex].songname
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
document.getElementById('prev').addEventListener('click',()=>{
    if(songsindex<0){
        songsindex = 0
    }
    else{
        songsindex -=1;
    }
    audioelement.src = `songs/${songsindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.play();
    mastersongname.innerText = songs[songsindex].songname
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
