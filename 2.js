
function cariMedian(arr = []) {
    let k = arr.length - 1;
    let median;

    // Iterasi array dengan index ke i dan index ke k = n - 1
    // gerakkan pointer i ke kanan dan pointer k ke kiri
    for (let i = 0; i < arr.length; i++, k--) {
        // Untuk jumlah arr bernilai angka ganjil
        // angka paling tengah didapat ketika pointer i sama dengan pointer k
        if (k === i) {
            // median adalah angka dimana array index ke i
            median = arr[i];
        } else if (k - i === 1) {
            // Untuk jumlah arr bernilai angka genap
            // angka paling tengah didapat ketika pointer k dikurang pointer i sama dengan 1
            // median adalah angka dimana array index ke i ditambah array index ke k lalu dibagi 2
            median = (arr[i] + arr[k]) / 2;
        }
    }

    return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5