
function render() {
    var userText = document.getElementById("textarea").value;
    document.getElementById("render").innerHTML = marked.parse(userText);
    // if(localStorage.getItem("fmy")!="1"){
        localStorage.setItem("md", userText);
}