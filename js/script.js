const videoPlayer = document.querySelector('.video-player');

videoPlayer.addEventListener('click', () => {
    videoPlayer.classList.add('active');
});

document.querySelector('.play-reel a').addEventListener('click', () => {
    document.querySelector('video').click();
});

document.querySelector('.theme__toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

document.querySelector('.nav-bar-icon').addEventListener('click', () => {
    document.querySelector('.nav-bar-icon-color').classList.toggle('active');
    document.querySelector('.nav-bar-mobile').classList.toggle('active');
});


// if (window.matchMedia("(max-width: 720px)").matches) {
//     document.querySelector('video').setAttribute('width', '480px');
//     document.querySelector('video').setAttribute('height', '360px');
//     document.querySelector('video').atr;
// }
