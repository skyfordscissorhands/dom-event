// Use an addEventListener
//  to attach a "mouseover" and "mouseout" event to a h3 element.
//The h3 should change size when mouseovered


const changeSize = document.getElementById('mouse');
document.addEventListener('mouseover', goOver, true)
document.addEventListener('mouseout', goOut, true);

function goOver() {
    document.getElementById('mouse').style.fontSize  = "125%";
    alert ("Trivia question here?");
}
function goOut() {
    document.getElementById('mouse').style.fontSize  = "10%";
}

//Part II
// Use an addEventListener
//  to attach a "mouseover" and "mouseout" element that asks 
// and answers a trivia question



