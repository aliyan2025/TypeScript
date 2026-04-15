"use strict";
let nama = "Budi";
let umur = 17;
let aktif = true;
console.log(nama, umur, aktif);
const siswa1 = {
    id: 1,
    nama: "Aliyan Ridho",
    kelas: "XI RPL 1"
};
console.log(siswa1);
function hitungUmur(tahunLahir) {
    const tahunSekarang = new Date().getFullYear();
    const umur = tahunSekarang - tahunLahir;
    return umur;
}
const umurSaya = hitungUmur(2008);
console.log("Umur:", umurSaya);
