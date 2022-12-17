// Open & Close contact modal

var contactBtn = document.querySelector(".contact-modal_close");
var openContactmodal = document.querySelector("#about-us-btn");
var modal = document.querySelector(".contact-modal");

contactBtn.addEventListener("click", function (e) {
  modal.classList.toggle("close");
  modal.classList.toggle("open");
});

openContactmodal.addEventListener("click", function (e) {
  modal.classList.toggle("open");
  modal.classList.toggle("close");
});

// fullscreen

var html = document.querySelector("html");
var fsBtn = document.querySelector(".fullscreen-btn");

fsBtn.onclick = (e) => {
  e.stopPropagation();
  var isFullScreen = document.fullscreenElement;
  if (isFullScreen === null) {
    html.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

// Open & Close more modal

var moreBtn = document.querySelector(".more-close-btn");
var openMoreModal = document.querySelector("#more-btn");
var moreModal = document.querySelector(".more-modal");

moreBtn.addEventListener("click", function (e) {
  moreModal.classList.toggle("close");
  moreModal.classList.toggle("open");
});

openMoreModal.addEventListener("click", function (e) {
  moreModal.classList.toggle("open");
  moreModal.classList.toggle("close");
});

// Volume
var mainAudio = document.querySelector(".audio-player");
var mainVolume = document.querySelector(".nav-volume_btn");
mainVolume.addEventListener("input", function () {
  mainAudio.volume = this.value / 100;
});

// Play and Pause button

var playBtn = document.querySelector(".media-play_btn-wrap");
var pauseBtn = document.querySelector(".media-pause_btn-wrap");

// change icon
function changeToPauseBtn() {
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function changeToPlayBtn() {
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
}

// play/pause button

playBtn.onclick = function (e) {
  e.stopPropagation();
  changeToPauseBtn();
  // set up music
  mainAudio.play();
};

pauseBtn.onclick = function (e) {
  e.stopPropagation();
  changeToPlayBtn();
  // set up music
  mainAudio.pause();
};

// list music

var musicList = [
  "./assets/audio/music_2.mp3",
  "./assets/audio/music_3.mp3",
  "./assets/audio/music_4.mp3",
  "./assets/audio/music_5.mp3",
  "./assets/audio/music_6.mp3",
  "./assets/audio/music_7.mp3",
  "./assets/audio/music_8.mp3",
];

// Next & Prev song function
var nextSong = document.querySelector(".media-next_btn-wrap");
var prevSong = document.querySelector(".media-prev_btn-wrap");

nextSong.onclick = function (e) {
  e.stopPropagation();
  playNextSong();
};

prevSong.onclick = function (e) {
  e.stopPropagation();
  playPrevSong();
};

function playNextSong() {
  var currentSong = musicList.indexOf(mainAudio.getAttribute("src"));
  if (currentSong !== musicList.length - 1) {
    mainAudio.setAttribute("src", musicList[currentSong + 1]);
    console.log(currentSong);
  } else {
    mainAudio.setAttribute("src", musicList[0]);
  }
  changeToPauseBtn();
  mainAudio.play();
}

function playPrevSong() {
  var currentSong = musicList.indexOf(mainAudio.getAttribute("src"));
  if (currentSong !== 0) {
    mainAudio.setAttribute("src", musicList[currentSong - 1]);
  } else {
    mainAudio.setAttribute("src", musicList[musicList.length - 1]);
  }
  changeToPauseBtn();
  mainAudio.play();
}

// Rain sound
var previousValueOfRainVolume = 0;
var rainAudio = document.querySelector(".rain-sound_player");
var rainVolume = document.querySelector(".rain-sound_tab");

rainVolume.addEventListener("input", function () {
  rainAudio.volume = this.value / 100;
  previousValueOfRainVolume = this.value;
  rainAudio.play();
});

// switch background

var listBackground = [
  "./assets/video/main-bg-1.mp4",
  "./assets/video/main-bg-2.mp4",

  "./assets/video/main-bg-4.mp4",
];
var mainBackground = document.querySelector(".main-background");
var switchBgBtn = document.querySelector(".switch-bg_icon");

switchBgBtn.onclick = function (e) {
  e.stopPropagation();
  switchBackground();
};

function switchBackground() {
  var currentBackground = listBackground.indexOf(
    mainBackground.getAttribute("src")
  );

  if (currentBackground !== listBackground.length - 1) {
    mainBackground.setAttribute("src", listBackground[currentBackground + 1]);
    setTimeout(function () {
      currentBackground.style.opacity = 0;
      mainBackground.style.opacity = 1;
    }, 1000);
  } else {
    mainBackground.setAttribute("src", listBackground[0]);
    currentBackground.style.opacity = 0;
    mainBackground.style.opacity = 0;
  }
}

// open & close donation modal

var donationBtn = document.querySelector("#donation-btn");
var donationClose = document.querySelector(".donation-close-icon");
var donationModal = document.querySelector(".donation-modal");

donationBtn.addEventListener("click", function (e) {
  donationModal.classList.toggle("close");
  donationModal.classList.toggle("open");
});

donationClose.addEventListener("click", function (e) {
  donationModal.classList.toggle("close");
  donationModal.classList.toggle("open");
});

// Autoplay next song

var currentMusic = 0;

mainAudio.addEventListener("ended", function () {
  mainAudio.src = musicList[currentMusic];
  mainAudio.play();
  currentMusic++;
  if (currentMusic >= musicList.length - 1) {
    currentMusic = 0;
  }
});
