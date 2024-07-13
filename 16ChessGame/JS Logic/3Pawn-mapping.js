
// Push All the pawn elements inside this array
const arrayPawn = [];

// For black pawn...
for(const i of filesName){
    arrayPawn.push(document.getElementById(i + 2));
}
// For white pawn...
for(const i of filesName){
    arrayPawn.push(document.getElementById(i+7));
}

// Add event listener function to all the pawn elements
for(const i of arrayPawn){
    i.addEventListener('click' , ()=>{
        // Print the clicked pawn element
        console.log(i);

        // To store clicked elements
        const clickedElements = i;

        // To find ID of the clicked elements
        const currentId = i.getAttribute('id');

        // print id of the clicked element
        // console.log(currentId);

        // Get number from id
        let change = parseInt(currentId[1]);
        // console.log(change);

        // Array of elements that we want to add in the circle.
        const addCircleToElements = [];

        // Push the elements in array (to which we want to add circles)
        for(let i = 0 ; i<2 ; i++){
            change += (currentId.includes('2') ? 1 : -1); // Adjust the change based on the pawn's color
            addCircleToElements.push(document.getElementById(currentId[0] + change));
        }

        // Add circle to each elements of passed array
        console.log(addCircleToElements);
        highlightCircle(addCircleToElements , clickedElements);
    })
}

// Track in which square we added the circle
const insertedCircle = [];

// Add circle to each elements of passed array
const highlightCircle = function(attachCircle , clickedElements){
    // To check the inserted circle
    if(insertedCircle.length != 0){
        removeMyCircle(insertedCircle);
    }

    const child = `<div class="circle"></div>`;
    // Attach the created childs to parent
    attachCircle.forEach((i)=>{
        // Add class to square in which we want to add circle
        i.classList.add("flex");

        // Movement of pawn occurs here
        i.addEventListener('click',function(){
            i.innerHTML = clickedElements.innerHTML;
            const removeCircleFromthis = attachCircle.filter((ele)=> ele !== i);
            removeMyCircle(removeCircleFromthis);
            clickedElements.innerHTML = "";
        })
        // Add circle to square
        i.innerHTML = `<div class="circle"></div>`;
        
        // Add all element in Array which we have inserted circles
        insertedCircle.push(i);
    })
}

/// Remove my circle function to remove the circle
const removeMyCircle = function(removalArray){
    removalArray.forEach((i)=>{
        i.innerHTML = "";
        i.classList.remove("flex");
    });
};

