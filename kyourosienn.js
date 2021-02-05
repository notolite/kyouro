let mark = ["\u200bF", "\u200bC", "\u200b--", "\u200bl", "\u200bj", "\u200bf", "\u200bc", "\u200bq","\u200bi","F", "C", "--", "i", "l", "j", "f", "c", "q","ı̇", "dˋ", "dˎ", "d—", "d·", "ḋ", "dˈ", "dˌ", "d¿","ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ"];
let output = ["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ","ˋ", "ˎ", "—", "ı", "·", "̇", "ˈ", "ˌ", "¿", "\u200bi","\u200bF", "\u200bC", "\u200b--", "\u200bl", "\u200bj", "\u200bf", "\u200bc", "\u200bq","\u200bF", "\u200bC", "\u200b--", "\u200bl", "\u200bj", "\u200bf", "\u200bc", "\u200bq","\u200bi"];
let target;
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

tar.addEventListener("input", () => {
    target = tar.value;
    for (var i = 0; i < mark.length; i++) {
        target = target.replace(new RegExp(mark[i], 'g'), output[i]);
    }
    target = target.normalize("NFC");
    tar.value = target;
})


document.getElementById("copy").addEventListener("click", clipCopy);
document.getElementById("clear").addEventListener("click", clearRequest);

document.addEventListener("keydown", event => {
    if (event.altKey === true) {
        switch (event.code) {
            case "KeyC":
                clipCopy();
                break;
            case "KeyD":
                clearRequest();
                break;
        }
    }
});

// design for computers below

window.onload = () => {
    if (winwid > 480) {
        tar.addEventListener("input", design);
        tar.style.fontSize = winwid * 0.7 * 0.1 + "px";
        tar.focus();
    }
}