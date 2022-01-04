function Tugas24() {
    var sebelum = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log("Sebelum :", sebelum.join(","));
    var ascen = sebelum.sort();
    console.log("Ascending :", ascen.join(","));
    var descen = ascen.reverse();
    console.log("Descending :", descen.join(","));  
}
Tugas24()