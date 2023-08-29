// [INSTRUCTION]
// Buatkan Algoritma untuk menentukan tahun yang di input merupakan tahun kabisat atau bukan

/*
function itahun(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
        return true; // Tahun kabisat
    } else {
        return false; // Bukan tahun kabisat
    }
}

// Test cases
console.log(itahun(2000)); // true
console.log(itahun(2020)); // true
console.log(itahun(2021)); // false
console.log(itahun(2100)); // false
*/



// 2. [INSTRUCTION]
// Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string.
// Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.

// function hapusSimbol(str) {
//     let iStr = "";

//     for (let i = 0; i < str.length; i++) {
//         if (/[a-zA-Z0-9]/.test(str[i])) {
//             iStr += str[i];
//         }
//     }

//     return iStr;
// }

// // TEST CASES
// console.log(hapusSimbol('test%$4aa')); // test4aa
// console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
// console.log(hapusSimbol('ma@#k!an~')); // makan
// console.log(hapusSimbol('coding')); // coding
// console.log(hapusSimbol('1+3-5*2=100')); // 1352100


// 3. [INSTRUCTIONS]
// MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang 
// sering muncul (mayoritas) dari daftar nilai array 

function MajoritySweeper(arr) {
    let nilai = {};
    let maxNilai = 0;

    for (let i = 0; i < arr.length; i++) {
        if (nilai[arr[i]] === undefined) {
            nilai[arr[i]] = 1;
        } else {
            nilai[arr[i]]++;
        }

        if (nilai[arr[i]] > maxNilai) {
            maxNilai = nilai[arr[i]];
        }
    }

    let result = [];

    for (let key in nilai) {
        if (nilai[key] === maxNilai) {
            result.push(parseInt(key));
        }
    }

    return result;
}

// CASES
console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])); // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]


// [EXAMPLE]
// INPUT: [9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]
// OUTPUT: [9, 3, 3, 4, 2, 5, 5, 5]

// INPUT: [22, 22, 100, 100, 100, 2000]
// OUTPUT: [22, 22, 2000]

// INPUT: [2, 2]
// OUTPUT: []

// INPUT:[4, 4, 4, 1, 1, 1, 2, 2]
// jika nilai minoritas/mayoritas sama, maka nilai yang digunakan yang pertama
// OUTPUT: [1, 1, 1, 2, 2]
