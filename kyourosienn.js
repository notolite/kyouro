var Nyuuryokugunn = ["ff", "cc", "--", "i", "l", "j", "f", "c", "q", "dˋ", "dˎ", "d—", "d·", "ḋ", "dˈ", "dˌ", "d¿"];
var Syuturyokugunn = ["ˋ", "ˎ", "—", "ı", "·", "̇", "ˈ", "ˌ", "¿", "ff", "cc", "--", "l", "j", "f", "c", "q"];
var Yousosuu = Nyuuryokugunn.length;
function Zikkou() {
    var Taisyou = document.getElementById("Nyuuryoku").value;
    for (var i = 0; i < Yousosuu; i++) {
        Taisyou = Taisyou.replace(new RegExp(Nyuuryokugunn[i], 'g'), Syuturyokugunn[i]);
    }
    document.getElementById("Kekka").value = Taisyou;
}
function clipcopy() {
    document.getElementById("Kekka").select();
    document.execCommand("copy");
}
function clearrequest() {
    document.getElementById("Nyuuryoku").value = "";
}