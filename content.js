var count = 0;

var videoLoadedTimer = window.setInterval(function () {
    count++;

    let videos = document.getElementsByTagName("video");
    if (videos.length == 0) {
        if (count == 100) {
            clearInterval(videoLoadedTimer);
        }
        return;
    }

    let video = videos[0];

    document.onkeydown = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                var t = video.currentTime - 10;
                video.currentTime = (t <= 0) ? 0 : t;
                break;
            case "ArrowRight":
                var t = video.currentTime + 10;
                video.currentTime = (t >= video.duration) ? video.duration : t;
                break;
            case " ":
                (video.paused) ? video.play() : video.pause();
                break;
            default:
                return;
        }
        event.preventDefault();
    };

    clearInterval(videoLoadedTimer);
}, 100);
