let 置換前一覧 = ["F", "C", "L", "i", "l", "j", "f", "c", "q", "X", "="];
let 置換後一覧 = ["ˋ", "ˎ", "—", "ı", "·", "\u0307", "ˈ", "ˌ", "¿", "\u0301", "\u0304"];

const 入力欄 = document.getElementById("入力欄");
let clipCopy = () => {
    入力欄.select();
    document.execCommand("copy");
}
let clearRequest = () => 入力欄.value = "";
let design = () => {
    if (現文字配列.length < 20) {
        入力欄.style.fontSize = ウィンドウ幅 * 0.7 * 0.1 + "px";
    } else if (現文字配列.length < 30) {
        入力欄.style.fontSize = ウィンドウ幅 * 0.7 * 0.06 + "px";
    } else {
        入力欄.style.fontSize = ウィンドウ幅 * 0.7 * 0.03 + "px";
    }
}
let ウィンドウ幅 = window.innerWidth;
let 現文字配列 = 変更前文字配列 = [];
let 変更前文字列 = "";
入力欄.addEventListener("input", () => {
    現文字配列 = 入力欄.value.split("");
    変更前文字配列 = 変更前文字列.split("");
    let 差分 = 現文字配列.length - 変更前文字配列.length;
    let i = j = カーソル位置 = 0;
    if (差分 >= 0) {
        for (; i < 現文字配列.length;) {
            if (現文字配列[i] != 変更前文字配列[j] && 現文字配列[i - 1] != "\u005c") {
                for (let k = 0; k < 置換前一覧.length; k++) {
                    現文字配列[i] = 現文字配列[i].replace(new RegExp(置換前一覧[k], 'g'), 置換後一覧[k]);
                }
                j--;
                カーソル位置 = i;
            } else if (現文字配列[i - 1] == "\u005c") {
                現文字配列.splice(i - 1, 1);
            }
            i++; j++;

        }
    }
    変更前文字列 = 現文字配列.join("").replace("ı̇", "i").replace("ı̄", "ī").normalize("NFC");
    入力欄.value = 変更前文字列;
    if (カーソル位置 >= 1) {
        入力欄.setSelectionRange(カーソル位置 + 1, カーソル位置 + 1);
    }

})


document.getElementById("copy").addEventListener("click", clipCopy);
document.getElementById("clear").addEventListener("click", clearRequest);

// design for computers below

window.onload = () => {
    if (ウィンドウ幅 > 480) {
        入力欄.addEventListener("input", design);
        入力欄.style.fontSize = ウィンドウ幅 * 0.7 * 0.1 + "px";
        入力欄.focus();
    }
}
