var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);

}
function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
    }
    function save(){
        link = document.getElementById("link");
        image = document.getElementById("selfie_image").src;
        link.href = image;
        link.click();
    }
    Webcam.set({
        width:360,
        height:250,
        image_format:"png",
        png_quality:90
    });
    camera = document.getElementById("camera");
    if(Content=="take my selfie"){
        console.log("taking selfie----------------------------------")
        speak();
    }