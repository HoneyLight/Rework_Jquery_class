$(document).ready(function(){
    let tableData = [
        { name: 'Binta', age: '30'},
        { name: 'John', age: '29'},
        {name: 'Tina', age: '50'},
    ];

    $('#popTable').click(function() {
        $.each(tableData, function(index, value) {
            let studentNo = index + 1;
            let tableRow =
            ` <tr><td>${studentNo}
              </td><td> ${value.name}
              </td><td>${value.age}</td></tr>`;
            $('.tableDiv tbody').append(tableRow);
        });
    });
// alert("name" + tableData.name[0] + "age" + tableData.age[0]);
// alert(`name:${tableData.name[0]}, age: ${tableData.age[0]}`)
});