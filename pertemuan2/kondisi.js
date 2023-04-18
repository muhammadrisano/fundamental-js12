const nilai = 90;
const test = nilai > 60;
// console.log(test);

// let grade = "";

// if (nilai > 85) {
//   grade = "A";
// } else if ( nilai > 75) {
//   grade = "B";
// } else if (nilai > 65){
//     grade = "C"
// } else {
//     grade = "D"
// }
// console.log(grade)

const myNilai = 80

const myNilai2 = 81

// if(myNilai !== myNilai2){
//     console.log("nilai tidak sama")
// }else{
//     console.log("nilai saya sama")
// }

const result = myNilai === myNilai2 ? 'nilai sama': 'nilai tidak sama'

console.log(result)

const nilaihari = 1
let keterangan = ''

switch (nilaihari){
    case 1 :
    keterangan = "hari ini senin"
    break;
    case 2 :
    keterangan = " hari ini selasa"
    break;
    default:
    keterangan = "anda salah mengisi nlai hari"
}
console.log(keterangan)