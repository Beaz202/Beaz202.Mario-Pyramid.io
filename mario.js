
printPyramid(5);
// TODO #1
// Take in user input for the height]
let height = prompt("Enter the Height: ");
let space = " ";
let brick = "#";
let layer = space+space+brick+brick;

for(let i = 1; i<=height; i++){
  for(let x = 0; x<height-1; x++){
    space += " ";
  }
  for(let s = 0; s < i; s++){ 
    space += '*';
  }
  space += "/n";
}
console.log(space);



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

  // TODO #1
  // print that pyramid!

}
