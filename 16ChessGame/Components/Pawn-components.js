
/// Note: If we add number and string then bydefault it produces a string ...
/// But If we want to produce a number then we have to convert it into a number

// Always manipulate UI(user Interface) by data not  data by UI...

// Create a pawn component

const pawnCompo = "<div class='pawnCompo'> <img src='images/pawn.png' alt='pawn-image'> </div>";

filesName.forEach((fileName) => {
    const id = fileName + 2;
    const element = document.getElementById(id);
    element.innerHTML = pawnCompo;
});

