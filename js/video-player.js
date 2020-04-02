function videoPlayer() {
    var posterUrl, carouselInnerWidth;
    document.querySelector('.video-carousel').addEventListener("click", function(e) {
        var videoContainer = e.target.closest('.video-container');
        var sectedElementID = e.target.getAttribute('id');
        console.log(sectedElementID);
        // Video
        video = videoContainer.querySelector('video');


        // Buttons
        var playButton = videoContainer.querySelector("#play-pause");
        var muteButton = videoContainer.querySelector("#mute");
        var fullScreenButton = videoContainer.querySelector("#full-screen");
        // Sliders
        var seekBar = videoContainer.querySelector("#seek-bar");
        var progressBar = videoContainer.querySelector("#progress-bar");
        var volumeBar = videoContainer.querySelector("#volume-bar");
        var carouselInner = document.querySelector(".video-carousel");
        var controls = videoContainer.querySelector("#video-controls");

        function pauseVideo(SelectedVideo) {
            // Pause the video
            SelectedVideo = document.querySelector('.parent-width video');
            SelectedVideo.src = "";
            SelectedVideo.pause();
            SelectedVideo.removeAttribute("src");
            SelectedVideo.style.background = 'none';
            posterUrl = sessionStorage.getItem("poster")
            SelectedVideo.setAttribute("poster", posterUrl);
            SelectedVideo.parentNode.querySelector('#video-controls').style.display = 'none';
            $(".video-carousel").width("-=450");
            SelectedVideo.parentNode.parentNode.classList.remove('parent-width');
            SelectedVideo.classList.remove('seleted-box');
            $('.carousel-container').css('padding-bottom', '80px');
            // Update the button text to 'Play'
            sessionStorage.setItem("video", "close");

        }

        function playVideo() {
            // Play the video
            video.play();
            playButton.classList.remove("play");
            playButton.classList.add('paused');
            posterUrl = video.getAttribute("poster");
            sessionStorage.setItem("poster", posterUrl);
            // Update the button text to 'Pause'
            video.setAttribute("poster", "");
            controls.style.display = 'flex';
            $(".video-carousel").width("+=400");
            videoContainer.parentNode.classList.add('parent-width');
            video.classList.add('seleted-box');
            sessionStorage.setItem("video", "open");
            playButton.classList.remove("paused");
            playButton.classList.add('play');
            $('.carousel-container').css('padding-bottom', '40px');
        }
        if (sectedElementID == "play-pause") {
            if (video.paused == true) {
                // Play the video
                video.play();
                playButton.classList.remove("paused");
                playButton.classList.add('play');

            } else {
                // Pause the video
                video.pause();
                playButton.classList.remove("play");
                playButton.classList.add('paused');
            }
        }


        // Event listener for the mute button
        if (sectedElementID == "mute") {

            if (video.muted == false) {
                // Mute the video
                video.muted = true;

                // Update the button text
                // muteButton.innerHTML = "Unmute";
                muteButton.classList.remove('mute');
                muteButton.classList.add('Unmute');
            } else {
                // Unmute the video
                video.muted = false;

                // Update the button text
                // muteButton.innerHTML = "Mute";
                muteButton.classList.remove('Unmute');
                muteButton.classList.add('mute');
            }
        };

        // Event listener for the full-screen button
        if (sectedElementID == "full-screen") {

            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen(); // Firefox
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen(); // Chrome and Safari
            }
        };

        // Event listener for the seek bar
        seekBar.addEventListener("change", function() {

            // Calculate the new time
            var time = video.duration * (progressBar.style.width / seekBar.style.width);
            // Update the video time
            video.currentTime = time;
        });

        // Update the seek bar as the video plays
        video.addEventListener("timeupdate", function() {
            // Calculate the slider value
            var value = (100 / video.duration) * video.currentTime;
            // Update the slider value
            progressBar.style.width = value + "%";
        });

        // Play the video when the seek handle is dropped
        seekBar.addEventListener("mouseup", function(evt) {
            var percent = evt.offsetX / this.offsetWidth;
            video.currentTime = video.duration * percent;
        });

        // Event listener for the volume bar
        volumeBar.addEventListener("change", function() {
            // Update the video volume
            video.volume = volumeBar.value;
        });


        if (sectedElementID == 'video') {

            if (sessionStorage.getItem("video") == "open") {
                if (video.parentNode.parentNode.classList.contains('parent-width')) {
                    pauseVideo();
                } else {
                    pauseVideo();
                    playVideo();
                }
            } else {

                playVideo();

            }
        }


    });


    // Event listener for the play/pause button

}