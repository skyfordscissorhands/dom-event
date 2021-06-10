// Use an addEventListener
//  to attach a "mouseover" and "mouseout" event to a h3 element.
//The h3 should change size when mouseovered

{/* <h3 id="mouse">Quick Trivia</h3> */}
//  <!-- add a trivia question -->
 
//  <div onmouseover="mOver(this)" onmouseout="mOut(this)"> Capital of CO</

const changeSize = document.getElementById('mouse');
document.addEventListener('mouseover', goOver, true)
document.addEventListener('mouseout', goOut, true);

function goOver() {
    document.getElementById('mouse').style.fontSize  = "125%";
}
function goOut() {
    document.getElementById('mouse').style.fontSize  = "100%";
}

//Part II
// Use an addEventListener
//  to attach a "mouseover" and "mouseout" element that asks 
// and answers a trivia question



