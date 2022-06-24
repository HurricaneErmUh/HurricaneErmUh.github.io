var paranumber = 0

var readerelement = document.getElementById("readerelement")

var ctrldiv = document.createElement("div")
readerelement.parentElement.insertBefore(ctrldiv, readerelement.nextSibling)

var nextp = document.createElement("button")
nextp.innerText = ">"
nextp.setAttribute("onclick", "paranumber++; setText()")

var prevp = document.createElement("button")
prevp.innerText = "<"
prevp.setAttribute("onclick", "paranumber--; setText()")

var nexttp = document.createElement("button")
nexttp.innerText = ">>"
nexttp.setAttribute("onclick", "paranumber += 10; setText()")

var prevtp = document.createElement("button")
prevtp.innerText = "<<"
prevtp.setAttribute("onclick", "paranumber -= 10; setText()")

var section = document.createElement("a");

ctrldiv.appendChild(prevtp);
ctrldiv.appendChild(prevp);
ctrldiv.appendChild(section);
ctrldiv.appendChild(nextp);
ctrldiv.appendChild(nexttp);

var book = document.createElement("html")
setBook("https://standardebooks.org/ebooks/henryk-sienkiewicz/the-deluge/jeremiah-curtin/text/single-page")
setText()


function setText() {
  readerelement.innerText = book.getElementsByTagName("p")[paranumber].innerText;
  var h2 = book.getElementsByTagName("p")[paranumber].parentElement.getElementsByTagName("h2");
  section.innerText = h2.item(0) ? h2.item(0).innerText : "No header";
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function setBook(url) {
  book.innerHTML = httpGet(url);
}
