
function render() {
    var userText = document.getElementById("textarea").value;
    document.getElementById("render").innerHTML = marked.parse(userText);
    localStorage.setItem("md", userText);
}