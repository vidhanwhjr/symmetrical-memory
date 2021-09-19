https://teachablemachine.withgoogle.com/models/CTCCUpo58/model.json

function DS(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CTCCUpo58/model.json', model87654321)
}

function model87654321(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results)
  }
}