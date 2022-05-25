window.addEventListener('load' ,()=>{
    let sounds=document.querySelectorAll('#sound');
    let pads=document.querySelectorAll('.pads div');
    let visul=document.querySelector('.visul')

    const colors = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#606bd3',
        '#60c2d3'
    ]
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
        sounds[index].currentTime=0;
        StopSound(index)
        sounds[index].play();
       CreateBabble(index)
         
        })
    })

function CreateBabble(index){
    let babble=document.createElement('div');
    visul.appendChild(babble);
    babble.style.backgroundColor =colors[index]
    babble.style.animation='jump 1s ease'
    babble.addEventListener('animationend',function(){
        visul.removeChild(this)
    })
}


    function StopSound(index) {
        sounds.forEach((sound)=> {
            sound.pause();
            sound.currentTime=0;
        })
        }
})







