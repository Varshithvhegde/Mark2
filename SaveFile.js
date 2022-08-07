document.getElementById("savebutton").addEventListener("click", function () {
    saveFile();
});

function saveFile() {
    download(document.getElementById("textarea").value, prompt("What is the name of file?", "") + ".md", "text/plain");
}

function download(data, filename, type) {
    var userFile = new Blob([data], { type: type });

    var a = document.createElement("a"),
        url = URL.createObjectURL(userFile);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
