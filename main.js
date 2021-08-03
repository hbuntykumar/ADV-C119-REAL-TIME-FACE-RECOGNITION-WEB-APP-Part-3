function setup(){
    Canvas=createCanvas( 300,300);
    Canvas.position(555,325);
    video=createCapture(VIDEO);
    video.hide();

    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Zbi7nVxCA/model.json", model_loaded)
}


function model_loaded(){
    console.log("model has been loaded");   
}

function draw(){
image(video, 0, 0,  300, 300);
classifier.classify(video, got_result)
}

function got_result(error, results){
        if(error){
         console.error(error);
        }
        else{
         console.log(results);  
         document.getElementById("Who_span").innerHTML=results[0].label;
         document.getElementById("Accuracy_span").innerHTML=results[0].confidence.toFixed(3);
        }
        }   


