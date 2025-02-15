const hackerText = document.getElementById("hacker-text");

let messages = [
    "Hacklendiniz :)",
    "Cihaza Bağlantı Kuruluyor...",
    "Telefon Bilgileri Çalınıyor %0",
    "Telefon Bilgileri Çalınıyor %10",
    "Telefon Bilgileri Çalınıyor %20",
    "Telefon Bilgileri Çalınıyor %30",
    "Telefon Bilgileri Çalınıyor %40",
    "Telefon Bilgileri Çalınıyor %50",
    "Telefon Bilgileri Çalınıyor %60",
    "Telefon Bilgileri Çalınıyor %70",
    "Telefon Bilgileri Çalınıyor %80",
    "Telefon Bilgileri Çalınıyor %90",
    "Telefon Bilgileri Çalınıyor %100",
    "Telefon Bilgileri Başarıyla Çalındı",
    "Dosya Bilgiler Çalınıyor %0",
    "Dosya Bilgileri Çalınıyor %0",
    "Dosya Bilgileri Çalınıyor %10",
    "Dosya Bilgileri Çalınıyor %20",
    "Dosya Bilgileri Çalınıyor %30",
    "Dosya Bilgileri Çalınıyor %40",
    "Dosya Bilgileri Çalınıyor %50",
    "Dosya Bilgileri Çalınıyor %60",
    "Dosya Bilgileri Çalınıyor %70",
    "Dosya Bilgileri Çalınıyor %80",
    "Dosya Bilgileri Çalınıyor %90",
    "Dosya Bilgileri Çalınıyor %100",
    "Dosya Bilgileri Başarıyla Çalındı",
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
