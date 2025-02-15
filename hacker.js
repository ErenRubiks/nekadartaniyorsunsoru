const hackerText = document.getElementById("hacker-text");

let messages = [
    "Bağlantı Kuruluyor...",
    "Sisteme Erişim Sağlandı!",
    "Telefon Bilgileri Çekiliyor...",
    "Dosyalar Siliniyor...",
    "Cihaz Formatlanıyor...",
    "FORMAT TAMAMLANDI."
];

let index = 0;
let interval = setInterval(() => {
    if (index < messages.length) {
        hackerText.innerText = messages[index];
        index++;
    } else {
        clearInterval(interval);
        blackScreenAndFreeze();
    }
}, 1000);

function blackScreenAndFreeze() {
    document.body.style.background = "black";
    hackerText.innerText = "";

    setTimeout(() => {
        document.body.innerHTML = "";
    }, 5000);
}
