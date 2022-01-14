
document.body.addEventListener('keyup', (event) =>{
    playSound(event.code.toLowerCase());
}); //Qualquer parte do site reconhece as teclas tocadas

document.querySelectorAll('.tecla').forEach(element => {
    element.addEventListener('click', () => {
        const cliqueTecla = element.getAttribute('data-key')
        playSound(cliqueTecla)
    })
}) //Opção de clicar

document.querySelector('.compositor button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== " "){
        let songArray = song.split('');
        playComposicao(songArray);
    }
    
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },400 );
    }
};

function playComposicao(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        },wait);

        wait += 250;

        
    }
};

