noseX=0;
noseY=0;
function preload(){
clown_nose = loadimage("https://i.postimg.cc/DfX9VBMt/th.jpg");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('posNet is initialiazed');
}

function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30)



}
function take_snapshot(){
    save('Mukhyajyoti.png');
}
function gotPoses(results){

    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("Nose x = "+ noseX);
        console.log("Nose y = "+ noseY);
    }
}