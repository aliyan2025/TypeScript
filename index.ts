let nama: string = "Budi"; 
let umur: number = 17; 
let aktif: boolean = true; 
console.log(nama, umur, aktif);

interface Siswa {
  id: number;
  nama: string;
  kelas: string;
}


const siswa1: Siswa = {
  id: 1,
  nama: "Aliyan Ridho",
  kelas: "XI RPL 1"
};


console.log(siswa1);

function hitungUmur(tahunLahir: number): number {
  const tahunSekarang = new Date().getFullYear();
  const umur = tahunSekarang - tahunLahir;
  return umur;
}


const umurSaya = hitungUmur(2008);


console.log("Umur:", umurSaya);