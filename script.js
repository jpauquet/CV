
function myFuncisilon() {
    var checkBox = document.getElementById("option1");
    var isilon = document.getElementById("isilon");
    if (checkBox.checked == true){
    isilon.style.display = "block";
    } else {
    isilon.style.display = "none";
    }
}
function myFuncunity() {
    var checkBox = document.getElementById("option2");
    var unitytest = document.getElementById("unity");
    if (checkBox.checked == true){
    unitytest.style.display = "block";
    } else {
    unitytest.style.display = "none";
    }
}
function myFuncdatadomain(){
        var checkBox = document.getElementById("option3");
        var datadomain = document.getElementById("datadomain");
        if (checkBox.checked == true){
        datadomain.style.display = "block";
        } else {
        datadomain.style.display = "none";
    }  
}
function myFuncmminfo(){
    var checkBox = document.getElementById("option4");
    var mminfo = document.getElementById("mminfo");
    if (checkBox.checked == true){
        mminfo.style.display = "block";
    } else {
        mminfo.style.display = "none";
    }  
}


function myFuncfilter1() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("isilon");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function myFuncfilter2() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("unity");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function myFuncfilter3() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("mminfo");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }




// function csv_To_Array(str, delimiter = ",") {
//     const header_cols = str.slice(0, str.indexOf("\n")).split(delimiter);
//     const row_data = str.slice(str.indexOf("\n") + 1).split("\n");
//     const arr = row_data.map(function (row) {
//         const values = row.split(delimiter);
//         const el = header_cols.reduce(function (object, header, index) {
//             object[header] = values[index];
//             return object;
//         }, {});
//         return el;
//     });
//     return arr;
// }


// Array = $.NAS-DPA_datadomain_utilization.csv.toArrays(NAS-DPA_datadomain_utilization.csv,{
//     delimiter: "'",
//     separator: ';',
// })


