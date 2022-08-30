function saveFile() {
    var fileName=prompt("What is the name of file?", "");
    if (fileName != null) {
        download(document.getElementById("textarea").value, fileName + ".md", "text/plain");
    }
}

// This function is from https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
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
