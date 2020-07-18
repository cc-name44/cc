function getElement(str) {
    // console.log(str.charAt(0));
    if (str.charAt(0) === ".") {
        return document.getElementsByClassName(str);
    } else if (str.charAt(0) === "#") {
        return document.getElementById(str);
    } else {
        return document.getElementsByTagName(str);
    }
}


/**
   * html of method chang innerhtml of ELements
   * options(elemnts|str)
   */
function html(el, str) {
    console.log(el)
    el.innerHTML = str;
    return el
}


/**
       * hide of method  can hide element;
       * option:(element)
       */

function hide(el) {
    var val = 1;
    el.style.opacity = val;
    var timer = setInterval(function () {
        val -= 0.1;
        if (val <= 0) {
            el.style.opacity = 0;
            el.style.display = "none";
            clearInterval(timer);
            return;
        }
        el.style.opacity = val;
    }, 30);
    return el;
}


function show(el) {
    el.style.display = "block";
    var val = 0
    el.style.opacity = val;
    var timer = setInterval(function () {
        val += 0.1;
        if (val >= 1) {
            el.style.opacity = 1;
            clearInterval(timer);
            return;
        }
        el.style.opacity = val;
    }, 30);
    return el
}

function toggle(el) {
    var none = getComputedStyle(el, null)["display"];
    if (none === "none") {
      // 初始化隐藏=
      el.style.display = "block";
      var val = 0;
      el.style.opacity = val;
      var timer = setInterval(function () {
        val += 0.1;
        if (val >= 1) {
          el.style.opacity = 1;
          clearInterval(timer);
          return;
        }
        el.style.opacity = val;
      }, 30);
    } else {
      var val = 1;
      el.style.opacity = val;
      var timer = setInterval(function () {
        val -= 0.1;
        if (val <= 0) {
          el.style.opacity = 0;
          el.style.display = "none";
          clearInterval(timer);
          return;
        }
        el.style.opacity = val;
      }, 30);
    }

    return el
  }