var height = document.getElementById('slider');
var pyramid = document.getElementById('pyramid');


document.addEventListener('mousemove', pyramidSlider, false);



function printPyramid(height) {
  let space = ".";
  let brick = document.getElementById("symbols").value;
  let string = "";
  
  for(let i = 1; i <= height; i++){
    let rowStr = string;
    for(x = 0; x < height-i; x++){
      rowStr += space;
    }
    
    for(let s = 0; s < i+1; s++){ 
      rowStr += brick;
    }
    
    rowStr += "\n";
    let newElement = document.createElement("p");
    let node = document.createTextNode(rowStr);
    newElement.appendChild(node);
    let divPyramid = document.getElementById("pyramid");
    divPyramid.appendChild(newElement);

  }

}

function pyramidSlider(){
  document.addEventListener('change', symbolChange, false);
  var newHeight = pyramid.innerHTML = slider.value;
  printPyramid(newHeight);
}

function symbolChange(brick){
  brick = document.getElementById("symbols").value;
  pyramid.innerHTML = brick;
}