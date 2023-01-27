
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
  console.log("Uh oh... the pyramid is under construction.");
  console.log("Check back soon, our developers are hard at work as we speak!");
  let space = " ";
  let brick = "#";
  let string = "";
  
  for(let i = 1; i <= height; i++){
    
    for(x = 0; x < height-i; x++){
    string += space;
    }
    
    for(let s = 0; s < i+1; s++){ 
    string += brick;
    }
    
    string += "\n";
  }
  // TODO #1
  // print that pyramid!
  console.log(string);

}
