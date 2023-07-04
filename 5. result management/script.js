window.onload = function() {
  loadResults();
};

function loadResults() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "get_results.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var results = JSON.parse(xhr.responseText);
      displayResults(results);
    }
  };
  xhr.send();
}

function displayResults(results) {
  var table = document.getElementById("resultTable");
  for (var i = 0; i < results.length; i++) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = results[i].studentName;
    cell2.innerHTML = results[i].subject;
    cell3.innerHTML = results[i].marks;
  }
}

