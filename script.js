function start(){
    var md=localStorage.getItem("md");
    if(md!=null){
        document.getElementById('textarea').innerHTML=md;
        render();
    }
    else{
    var str="# MarkDown Editor\n\n> GitHub Flavored Markdown Editor\n# How to Use\n- Clear the all codes on the left panel\n- Write some markdown codes there\n- Enjoy!";
    document.getElementById('textarea').innerHTML=str;
    render();
    }
}
var i=0;
function convertToHTML(){
  if(i==0){
    i=1;
    document.getElementById("textarea").readOnly = true;
    var md=localStorage.getItem("md");
    document.getElementById("converttohtml").innerHTML="Convert to Markdown";
    var converter = new Remarkable();

//   var converter = new showdown.Converter();
//   var html = converter.makeHtml(md);

    var html = converter.render(md);
    document.getElementById('textarea').value=html;
  }
  else{
    i=0;
    document.getElementById("textarea").readOnly = false;
    document.getElementById("converttohtml").innerHTML="Convert to HTML";
    // localStorage.setItem("fmy",0);
    var md=localStorage.getItem("md");
    document.getElementById('textarea').value=md;
  }
   
}