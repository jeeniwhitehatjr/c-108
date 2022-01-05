function startclassification() 
{ navigator.mediaDevices.getUserMedia({ audio: true}); 
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady); }
 function modelReady()
 { classifier.classify( gotResults); }
 function gotResults(error,results)
 {
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         random_number_r =Math.floor(Math.random()*255)+1;
         random_number_g =Math.floor(Math.random()*255)+1;
         random_number_b =Math.floor(Math.random()*255)+1;
 document.getElementById("result_label").innerHTML="i can hear - "+results[0].label;
 document.getElementById("result_confidence").innerHTML="accuracy - "+(results[0].confidence*100).toFixed (2)+"%";
 document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
Img1=document.getElementById("aliens1");
Img2=document.getElementById("aliens2");
Img3=document.getElementById("aliens3");
Img4=document.getElementById("aliens4");
if(results[0].label=="clap"){
    Img1.src="aliens-01.gif";
    Img2.src="aliens-02.png";
    Img3.src="aliens-03.png";
    Img4.src="aliens-04.png";
}
else if(results[0].label=="bell"){
    Img1.src="aliens-01.png";
    Img2.src="aliens-02.gif";
    Img3.src="aliens-03.png";
    Img4.src="aliens-04.png";
}
else if(results[0].label=="snap"){
    Img1.src="aliens-01.png";
    Img2.src="aliens-02.png";
    Img3.src="aliens-03.gif";
    Img4.src="aliens-04.png";
}
else{
    Img1.src="aliens-01.png";
    Img2.src="aliens-02.png";
    Img3.src="aliens-03.png";
    Img4.src="aliens-04.gif";
}

        }
 }
