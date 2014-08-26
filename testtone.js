function testtone(){
    var context = new AudioContext();
    var whiteNoise = context.createWhiteNoise();
    whiteNoise.connect(context.destination);
};

//testtone();
