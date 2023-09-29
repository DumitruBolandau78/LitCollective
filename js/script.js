const videoPlayer = document.querySelector('.video-player');

videoPlayer.addEventListener('click', () => {
    videoPlayer.classList.add('active');
});

document.querySelector('.play-reel a').addEventListener('click', () => {
    document.querySelector('video').click();
});


const navList = document.querySelectorAll('header a');