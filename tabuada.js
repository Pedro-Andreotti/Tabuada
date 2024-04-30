function generateTable() {
    var num = parseInt(document.getElementById('number').value);
    var table = '';

    for (var i = 1; i <= 10; i++) {
        table += num + ' x ' + i + ' = ' + (num * i) + '<br>';
    }

    document.getElementById('table').innerHTML = table;
}
