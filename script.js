
let song = document.getElementById('audio');
let play = false;
let loop = false;
let val = document.getElementById('duration').value = 0;

let interval;
let toggle = false;


function playBtn() {


    play = !play;
    play ? (song.play(), disk(),
        document.getElementById('playBtn').innerHTML = `<span class="glyphicon glyphicon-pause"></span>`,
        interval = setInterval(() => {
            val++;
            document.getElementById('duration').value = val;
            let duration = document.getElementById('audio').duration;
            document.getElementById('duration').max = Math.floor(duration);
            console.log(val - Math.floor(duration));
            if (val == Math.floor(duration)) {
                val = 0;
                document.getElementById('duration').value = 0;
                console.log('eto na stop na');
                if (loop == false) {
                    clearInterval(interval)
                }

            }
        }, 1000)


    ) : (song.pause(), disk(),
        document.getElementById('playBtn').innerHTML = `<span class="glyphicon glyphicon-play">`,
        clearInterval(interval));



}

function repeat() {
    loop = !loop;
    let audioRepeat
    loop ? (audioRepeat = document.getElementById('audio'), popup(),
        audioRepeat.loop = true,
        document.getElementById('repeat').style = `color: rgb(7, 125, 172);`) : (audioRepeat = document.getElementById('audio'), popup(),
            audioRepeat.loop = false,
            document.getElementById('repeat').style = `color: white;`);

}

document.onkeydown = function (e) {
    if (e.keyCode == 32) {
        playBtn();
    }
}



function disk() {
    if (play) {
        document.getElementById('icon').style = `animation-play-state: running;`;
    }
    else {
        document.getElementById('icon').style = `animation-play-state: paused;`
    }
    console.log('eto ung play ', play);
}


function selectSong(value) {
    document.getElementById('musicName').textContent = value;
    console.log('test to')
    console.log(value)
    document.getElementById('playBtn').disabled = false;
    document.getElementById('audio').src = value;
    console.log(document.getElementById('audio').src)
    play = false;
    clearInterval(interval)
    val = 0;
    playBtn();
    songList();
}


function songList() {
    toggle = !toggle;
    console.log(toggle)
    toggle ? (document.getElementById('songlist').style = `display: block;
         width: 300px;
        animation: open 2s;`) : (document.getElementById('songlist').style = `display:none;
    width:initial;`
    );
}


function popup() {
    console.log('eto ung loop status ', loop)
    loop ? (document.getElementById('popupContent').textContent = `Repeat On`, document.getElementById('popup').style = `display:flex;`,
        setTimeout(() => {
            document.getElementById('popup').style = `display:none;`
        }, 1000)
    ) : (document.getElementById('popupContent').textContent = `Repeat Off`, document.getElementById('popup').style = `display:flex;`,
        setTimeout(() => {
            document.getElementById('popup').style = `display:none;`
        },1000));
}
