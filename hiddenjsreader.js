var sectionnumber = 0
var paranumber = 0

var prevs = document.createElement("button")
prevs.innerText = "<<"
prevs.setAttribute("onclick", "sectionnumber--; setText()")
document.body.appendChild(prevs)

var nexts = document.createElement("button")
nexts.innerText = ">>"
nexts.setAttribute("onclick", "sectionnumber++; setText()")
document.body.appendChild(nexts)

var prevp = document.createElement("button")
prevp.innerText = "<"
prevp.setAttribute("onclick", "paranumber--; setText()")
document.body.appendChild(prevp)

var nextp = document.createElement("button")
nextp.innerText = ">"
nextp.setAttribute("onclick", "paranumber++; setText()")
document.body.appendChild(nextp)

var book = document.createElement("book")
setBook("https://standardebooks.org/ebooks/henryk-sienkiewicz/the-deluge/jeremiah-curtin/text/single-page")
setText()


function setText() {
  const readerelement = document.getElementById("readerelement")
  readerelement.innerText = book.getElementsByTagName("section")[sectionnumber].children[paranumber].innerText
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
