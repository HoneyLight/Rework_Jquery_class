$(document).ready(function() {
  if (localStorage.getItem('todo-list')) {
    $('#output').html(localStorage.getItem('todo-list'));
  }

  //add task
  $('#btn').click(function() {
    if ($('#txt').val() != '') {
      let todo = `<div class="list">
        <p>${$('#txt').val()}</p>
        <div class="btns">
          <button class="blue">Edit</button><button class="red">Delete</button
          ><button class="green">Completed</button>
        </div>
      </div>`;
      $('#output').append(todo);
      updateLocalStorage();
      if ($('#btn').html() === 'Add task') {
        $('#txt').val('');
      } else {
        $('#btn').html('Add task');
        $('#txt').val('');
      }
    } else {
      alert('Enter a task');
    }
  });

  //delete task
  $('#output').on('click', '.red', function() {
    $(this)
      .parent()
      .parent()
      .remove();
    updateLocalStorage();
  });

  //edit task
  $('#output').on('click', '.blue', function() {
    let removedIndex = $(this)
      .parent()
      .parent();
    let selectedIndex = removedIndex
      .children()
      .first()
      .html();
    console.log(selectedIndex);
    $('#txt').val(selectedIndex);
    $('#btn').html('Update');
    removedIndex.remove();
    updateLocalStorage();
  });

  //completed
  $('#output').on('click', '.green', function() {
    let removedIndex = $(this)
      .parent()
      .parent();
    let selectedIndex = removedIndex.children().first();
    selectedIndex.toggleClass('complete');
  });

  function updateLocalStorage() {
    let items = $('#output').html();
    localStorage.setItem('todo-list', items);
  }

// JSON data is like a javascript object only that it takes in keys and values and they are always both stringed.
// Its a text format for storing and transporting Data.
// for example:
// ('{"name": "John", "age": "30", "city": "New York"}');

// AJAX - Asynchronous javascript and XML
// its a web devt technique that allows for free interacton with your webpage eg you can go ahead to do wat ever you want to do on your webpage even if your webpage is slow which can make some parts of your webpage not to respond quickly. so you dont need to be waiting, you ca go ahead to do other things.
// it has 4 methods eg post, put(update), delete, and get.
// it is not an API but it helps us interact with it.
// Now we will interact with a JSON data where it will act as our dummy database and our AJAX will be helping with that.


  $('#get').click(function() {
    $.ajax({
      url: 'data.json',
      method: 'get',
      dataType: 'json',
      success: function(response) {
        $.map(response.employees, function(value, index) {
          let tabledata = `  <tr>
          <td>${value.name}</td>
          <td>${value.age}</td>
          <td>${value.gender}</td>
        </tr>`;
          $('#employees').append(tabledata);
        });
      },
      error: function(err) {
        alert('server error');
      },
    });
  });
});
