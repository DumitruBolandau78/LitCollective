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

document.querySelectorAll('.nav-bar-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-bar-icon-color').classList.toggle('active');
        document.querySelector('.nav-bar-mobile').classList.toggle('active');
    });
});