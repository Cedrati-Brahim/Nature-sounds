var keyLeft
var keyCenter
var keyRight
var playing = false;
var firstRainSound = new Audio("sound/rain1-looped.mp3");
var secondRainSound = new Audio("sound/rain2-looped.mp3");
var thirdRainSound = new Audio("sound/rain3-looped.mp3");
var rainSound = [firstRainSound, secondRainSound, thirdRainSound];
var playedSound;
var loop = new SeamlessLoop();


/**
 * @brief KeyDown Handler
 *
 * @param et
 *
 * @return 
 */




window.onload = function() {
    document.getElementById("firstRainSound").focus();
    setUp();
    start();
};

function start() {


    loop.addUri("sound/rain1-looped.mp3", 13000, "rain0");
    loop.addUri("sound/rain2-looped.mp3", 14000, "rain1");
    loop.addUri("sound/rain3-looped.mp3", 14000, "rain2");
}



function playSound(index) {

    var playPauseIcon = document.activeElement.childNodes;
    if (playing) {
        for (let i = 0; i < rainSound.length; i++) {
            document.getElementById(i).style.backgroundImage = "url(icons/playIcon.png)";
        }
        playedSound.pause();
        loop.stop();
    } else {
        playedSound = rainSound[index];
        playedSound.loop = true;
        // playedSound.play();
        loop.start("rain" + index);
        playPauseIcon[1].style.backgroundImage = "url(icons/pauseIcon.png)";

    }

    playing = !playing;

    if (playedSound != rainSound[index]) {

        playedSound = rainSound[index];
        playedSound.loop = true;
        // playedSound.play();
        loop.start("rain" + index);
        playPauseIcon[1].style.backgroundImage = "url(icons/pauseIcon.png)";
        playing = !playing;

    }

    handleSoftkeyValue();

}

function handleSoftkeyValue() {
    var playPauseIcon = document.activeElement.childNodes;
    var playIcon = "url(\"icons/playIcon.png\")";
    var pauseIcon = "url(\"icons/pauseIcon.png\")";


    if (playPauseIcon[1].style.backgroundImage == playIcon) {
        document.getElementById("softkey-center").innerHTML = "Play";
    }
    if (playPauseIcon[1].style.backgroundImage == pauseIcon) {
        document.getElementById("softkey-center").innerHTML = "Pause";
    }

}


function nav(move) {

    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.items');
    const targetElement = items[next];
    if (targetElement != null) {
        targetElement.focus();
    }
    handleSoftkeyValue();
}

function handleKeyDown(et) {


    switch (et.key) {
        case 'SoftLeft':
            break;

        case 'Enter':
            document.activeElement.click();
            break;

        case 'SoftRight':
            break;

        case 'ArrowUp':
            nav(-1);
            break;

        case 'ArrowDown':
            nav(1);
            break;

        case 'ArrowRight':
            nav(1);
            break;

        case 'ArrowLeft':
            nav(-1);
            break;

    }

}




function setUp() {
    document.getElementById("0").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("1").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("2").style.backgroundImage = "url(icons/playIcon.png)";
    document.getElementById("firstRainSound").focus();

}

document.addEventListener("keydown", handleKeyDown);

document.addEventListener("DOMContentLoaded", () => {
    // getKaiAd( config )
    getKaiAd({
        publisher: 'c0cc2f38-fd2f-4012-ad91-b1299e32c729',
        app: 'Nature_sounds',
        slot: 'Nature_sounds_Slot',
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display')
            ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
            ad.on('close', () => {
                document.getElementById("softKeysContainer").style.display = "block";
                document.getElementById("firstRainSound").focus();
            })
        }
    })



});

const interval = setInterval(() => {

    getKaiAd({
        publisher: 'c0cc2f38-fd2f-4012-ad91-b1299e32c729',
        app: 'Nature_sounds',
        slot: 'Nature_sounds_Slot',
        test: 1,
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display')
            ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
            ad.on('close', () => {
                document.getElementById("softKeysContainer").style.display = "block";
                document.getElementById("firstRainSound").focus();
            })
        }
    })

}, 120000);