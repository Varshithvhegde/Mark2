
document.getElementById("renderbutton").addEventListener("click", function(){
    render();
  });

function render() {
    var userText = document.getElementById("textarea").value;
    document.getElementById("render").innerHTML = marked.parse(userText);
}