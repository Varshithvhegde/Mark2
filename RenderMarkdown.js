
function render() {
    var userText = document.getElementById("textarea").value;
    document.getElementById("render").innerHTML = marked.parse(userText);
    // if(localStorage.getItem("fmy")!="1"){
        localStorage.setItem("md", userText);
        
    // }
    // else{
        // localStorage.setItem("fmy", "0");
        // var md=localStorage.getItem("md");
        // document.getElementById('textarea').innerHTML=md;
      
        
    // }
}