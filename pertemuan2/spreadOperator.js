// untuk array ke dalam array lain
const myHobi = ['ngoding', 'joging']

const newHobi = [...myHobi, 'berenang', 'gaming']

// console.log(newHobi)

// untuk menggabungkan 2 array
const menuMakanan1 = ['nasi goreng', 'bakso']
const menuMakanan2 = ['nasi padang', 'picel lele']

const resultMenu = [...menuMakanan1, ...menuMakanan2]
// console.log(resultMenu)

// untuk mengcopy / clone object
// const biodata = {
//     nama: 'risano akbar',
//     email: "risano@gmail.com",
//     age: 18
// }


// const newBiodata = {...biodata}
// newBiodata.nama = "budi tanjung"

// console.log(newBiodata)


// untuk menggabungkna 2 object
// const biodata = {
//     nama: 'risano akbar',
//     email: "risano@gmail.com",
//     age: 18
// }
// const newData = {
//     alamat: 'jalan padang',
//     hobi: ['ngoding', 'gaming']
// }

// const newBiodata = {
//     ...biodata,
//     ...newData
// }
// console.log(newBiodata)
