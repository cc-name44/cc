function calcPageHeight(doc) {
    var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    var height = Math.max(cHeight, sHeight)
    console.log(doc.body.scrollHeight)
    return height;
}
var ifr = document.getElementById('content');
ifr.onload = function () {
    var iDoc = ifr.contentDocument || ifr.document || ifr.contentWindow;
    var height = calcPageHeight(iDoc);
    console.log(iDoc,height)
    ifr.style.height = height + 'px';
}