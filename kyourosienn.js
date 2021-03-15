let mark = ["F", "C", "L", "i", "l", "j", "f", "c", "q"];
let output = ["ˋ", "ˎ", "—", "ı", "·", "̇", "ˈ", "ˌ", "¿"];

const tar = document.getElementById("tar");
let clipCopy = () => {
    tar.value = target.replace(new RegExp("\u200bi","g"),"");
    tar.select();
    document.execCommand("copy");
}
let clearRequest = () => tar.value = "";
let design = () => {
    if (target.length < 20) {
        tar.style.fontSize = winwid * 0.7 * 0.1 + "px";
    } else if (target.length < 30) {
        tar.style.fontSize = winwid * 0.7 * 0.06 + "px";
    } else {
        tar.style.fontSize = winwid * 0.7 * 0.03 + "px";
    }
}
let winwid = window.innerWidth;
let target = extarget = [];
tar.addEventListener("input", () => {
    target = tar.value.split("");
    let iDiff = target.length - extarget.length;
    let i = j = position = 0;
    if (iDiff >= 0){
        for (; i < target.length;) {
            if (target[i] != extarget[j] && target[i - 1] != "\u005c") {
                for (let k = 0; k < mark.length; k++) {
                    target[i] = target[i].replace(new RegExp(mark[k], 'g'), output[k]);
                }
                j--;
                position = i;
            } else if (target [i - 1] == "\u005c") {
                target.splice(i-1,1);
            }
            i++; j++;
        }
    }
    tar.value = target.join("").normalize("NFC");
    if (position >= 1) {
        tar.selectionStart = position + 1;
        tar.selectionEnd = position + 1;
    }
    extarget = target;
})


document.getElementById("copy").addEventListener("click", clipCopy);
document.getElementById("clear").addEventListener("click", clearRequest);

// design for computers below

window.onload = () => {
    if (winwid > 480) {
        tar.addEventListener("input", design);
        tar.style.fontSize = winwid * 0.7 * 0.1 + "px";
        tar.focus();
    }
}
