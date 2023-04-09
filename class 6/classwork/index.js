$(document).ready(function() {
    $('#get').click(function() {
        $.ajax({
          url: 'data.json',
          method: 'get',
          dataType: 'json',
          success: function(response) {
            $.each(response.Oraimo, function(index, value) {
              let list = index + 1;
              let tabledata = `<tr>
              <td>${list}</td>
              <td>${value.Category}</td>
              <td>${value.name}</td>
              <td>${value.price}</td>
              <td>${value.Warranty}</td>
            </tr>`;
              $('#oraimo').append(tabledata);
            });
          },
          error: function(err) {
            alert('server error');
          },
        });
      });
})