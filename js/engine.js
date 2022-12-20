var blenderState ="off"
var blender = document.getElementById('blender')
var blenderSound = document.getElementById('blender-sound')
var blenderButtonSound = document.getElementById('blender-button-sound')

const controlBlender = ()=>{
    if(blenderState =="off"){
        blenderState = "on";
        controlSoundBlender();
        blender.classList.add('active');
        console.log('It,s On');
    }else {
        blenderState = "off"
        controlSoundBlender();
        blender.classList.remove('active')
        console.log('It,s Off');

    }
}

const controlSoundBlender =()=>{
    if(blenderSound.paused){
        blenderButtonSound.play();
        blenderSound.play();
    }else{
        blenderButtonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}