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
    if (iDiff >= 0){
        let i = j = 0;
        for (; i < target.length;) {
            if (i != 0 && target[i] != extarget[j] && target[i - 1] != "\u005c") {
                for (let k = 0; k < mark.length; k++) {
                    target[i] = target[i].replace(new RegExp(mark[k], 'g'), output[k]);
                }
                j--;
            } else if (target [i - 1] == "\u005c") {
                target.splice(i-1,1);
            }
            i++; j++;
            console.log(i); console.log(j);
        }
        console.log();
    }
    tar.value = target.join("").replace("ı̇","i").normalize("NFC");
    extarget = target;
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
