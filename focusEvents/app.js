// When you enter the input field, a function is triggered which sets the background 
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.


const color = document.getElementById('myForm');
color.addEventListener('focus', myFocusFunction, true);
color.addEventListener('blur', myBlurFunction, true);

function myFocusFunction() {
    document.getElementById('text').style.backgroundColor="skyBlue";
}
function myBlurFunction() {
    document.getElementById('text').style.backgroundColor="grey";
}


// var inputField = document.querySelectorAll("input");
//   for (var i = inputField.length - 1; i >= 0; i--) {
//     inputField[i].style.backgroundColor = "grey"
//     }
   
//  var labelField = document.querySelectorAll("label");
//     for (var i = labelField.length - 1; i >= 0; i--) {
//         labelField[i].onclick.backgroundColor = "skyBlue"
//         }


