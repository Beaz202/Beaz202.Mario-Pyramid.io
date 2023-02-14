
// TODO #1
// Take in user input for the height]
let height = prompt("Enter the Height: ");
printPyramid(parseInt(height));
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  let space = ".";
  let brick = "#";
  let string = "";
  console.clear();
  
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
function determineHeightAndThenDrawPyramid(){
  var newHeight = document.getElementById("height").value;
  document.getElementById("pyramid").innerHTML = newHeight;
  printPyramid(newHeight);
}