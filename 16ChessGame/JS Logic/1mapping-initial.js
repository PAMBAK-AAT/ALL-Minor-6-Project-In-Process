
// Here we select our files and we store it in an array

const arrayOfFiles = document.querySelectorAll('.files');

// Counter for file array...
let fileNo = 0;

const filesName = ["a","b","c","d","e",'f',"g","h"];

for(const file of arrayOfFiles){
    // Counter variable for rank(row)...
    let counter = 1;
    for(const ele of file.children){
        ele.setAttribute("id", filesName[fileNo]+counter);
        // console.log(ele);
        counter++;
    }
    fileNo++;
}

