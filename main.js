// Select THe start Game Button
document.querySelector('.contorl-buttons span').onclick = function (){
    // Prompt Window To Ask For Name
    let yourName = prompt("Whats Your Name?");
    // if Name IS Empty 
    if(yourName==null || yourName == ''){
        // Set Name To Unkown
        document.querySelector(".name span").innerHTML ='UnKnown';
        // Name Is No Empty
    }else {
        // Set Name To Your Name 
        document.querySelector(".name span").innerHTML =yourName;

    }
    // Romove Splash Screen
    document.querySelector(".contorl-buttons").remove();
}
// Effect Duration
 let duration = 1000 ;
//  Select Blocks Container 
 let blockContainer = document.querySelector('.container-game');
//  Creat Array from Game Blocks
 let blocks = Array.from(blockContainer.children);

//  Creat Range of Keys

let orderRange = [...Array(blocks.length).keys()];
Shuffle(orderRange)

//add order css property to game blocks
blocks.forEach((block, index) => {
    block.style.order = orderRange[index] ;
   
    // Add Click Event 
    block.addEventListener('click', function() {
    //    Trigger the flip Block Function
        flipBlock(block);

    })
});

// Flip Block Function 
function flipBlock(SelectedBlock) {
    // Add class is flied
    SelectedBlock.classList.add('is-flipped');
    // Collect All Flipped Caeds 
    let allFlippedBlocks = blocks.filter(flippedBlock =>flippedBlock.classList.contains('is-flipped'));
    // if Thers Two Selected Blocks
    if(allFlippedBlocks.length === 2) {


        // Stop clicking Function
        StopClicking()
        
    // Check Matched Block Function 
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    
}


}
function StopClicking(){
    // add class No clicking on main Container
    blockContainer.classList.add('no-clicking');
    setTimeout(() => {
        // Remove Class No Clicking After The duration
        blockContainer.classList.remove('no-clicking')

    }, duration);
} 
    // check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {

        let triesElement =document.querySelector('.tries span');
       
        if(firstBlock.dataset.techology === secondBlock.dataset.techology){

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        
            firstBlock.classList.add('has-match');
            secondBlock.classList.add('has-match');
            
            document.getElementById('success').play();
        }else {
            triesElement.innerHTML = parseInt( triesElement.innerHTML) + 1;

            setTimeout(() =>{
         
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        
        }, duration);

        document.getElementById('fail').play();
        
    }
}
    
// Shuffle Function 
function Shuffle(array) {
    // Setting Vars
    let current = array.length ,
    temp,
    random;
    while(current > 0) {
       
        // Get Random number 
        random =Math.floor(Math.random() * current);
        // Decreasw length by one
        current --;

        // [1] Save Current Element In stash
        temp  = array[current];

        // [2] current Element = Random Element
        array[current] = array[random];
        // Random Elment = Get Element from Stash
        array[random] = temp;
    }
    return array;
}