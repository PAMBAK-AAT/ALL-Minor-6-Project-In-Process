
const allSquare = document.getElementsByClassName('square');

let clickedElement = [];

for(const x of allSquare){
    x.addEventListener('click' , function(){
        // console.log(clickedElement);

        const idOfElement = x.getAttribute('id');
        const innerHtmlOfElement =x.innerHTML;
        if(clickedElement.length > 0){
            clickedElement[0].removeAttribute("style");
            clickedElement.length = 0;// here we remove the existing yellow color
        }
        // console.log(innerHtmlOfElement);
        if(innerHtmlOfElement.includes("images")){
            x.style.backgroundColor = "#f6f669";
            // push the clicked element in an empty array
            clickedElement.push(x);
        }
    })
}