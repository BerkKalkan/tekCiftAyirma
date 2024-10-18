let tekSayilar = [];
let ciftSayilar = [];

function listNumbers(){
    console.log("girilen tek sayilar:")
    for(const sayi of tekSayilar){
        console.log(sayi)
    };
    console.log("girilen cift sayilar: ")
    for(const say1 of ciftSayilar){
        console.log(say1)
    };
};

function sayiEkle() {
    for (let i = 0; i < 10; i++) {
        let girilenSayi = Number(prompt("10 sayidan"+ " "+(i + 1) + ". sayiyi giriniz"))

        if (girilenSayi % 2 == 0) {
            ciftSayilar.push(girilenSayi);
        } else {
            tekSayilar.push(girilenSayi);
        }
    };
    listNumbers();
}