console.log("loaded extention")
var count = 0
var loop
function ready(){
    setTimeout(()=>{
        count = parseInt(document.getElementById("guesses-left").innerText) - 1
        console.log("LOOP=",count)
        document.getElementsByClassName("svg-base")[0].parentElement.click()
        loop = setInterval(()=>{
            solve()
        },500)
    },3000)
}
function solve(){
    if (count < 1){clearInterval(loop)}
    let word = document.getElementById("question-box").innerText
    if (word == "Press play!"){return}
    let box = document.querySelectorAll(`[data-text="${word}"]`)[1]
    if (typeof box == "undefined"){
        word = word.split(" ").join("  ")
        box = document.querySelectorAll(`[data-text="${word}"]`)[1]
    }
    console.log(`Items left: ${count}, solving for: "${word}". Found: ${box.nodeName}, ${box.nodeName}#${box.id}`)
    box.click()
    count = count - 1
}
document.body.onload = ready
//console.log("loaded extention");var count=0;var loop;function ready(){setTimeout(()=>{count=parseInt(document.getElementById("guesses-left").innerText)-1;console.log("LOOP=",count);document.getElementsByClassName("svg-base")[0].parentElement.click();loop=setInterval(()=>{solve()},500)},3000)}function solve(){if(count<1){clearInterval(loop)};let word=document.getElementById("question-box").innerText;if(word=="Press play!"){return};let box=document.querySelectorAll(`[data-text="${word}"]`)[1];if(typeof box=="undefined"){word=word.split(" ").join("  ");box=document.querySelectorAll(`[data-text="${word}"]`)[1]}console.log(`Items left:${count},solving for:"${word}".Found:${box.nodeName},${box.nodeName}#${box.id}`);box.click();count=count-1}ready();