let addBtn = $('#add');
addBtn.css('background', '#336');
let taskInput = $('#taskInput');


$(document).ready(function(){
    if (localStorage.getItem('todo-list')) {
        $('#taskList').html(localStorage.getItem('todo-list'));
    }
    addBtn.click(function(){
        
        let mainDiv = $('<div></div>');
        mainDiv.addClass('list');
        // mainDiv.addClass('mainDiv');

        $('.container').append(mainDiv);
        // $('.mainDiv').remove();

        let p = $('<p></p>').text(taskInput.val());
        p.innerHtml = taskInput.val();

        let div = $('<div></div>');
        div.addClass('btns');

        // deletebutton
        let deleteButton = $('<button>Delete</button>');
        deleteButton.css('background', 'red');

        //edit button
        let editButton = $('<button>Edit</button>');
        editButton.css('background', '#336');

        // completedbutton
        let completedButton = $('<button>Completed</button>');

        div.append(deleteButton, editButton, completedButton);

        mainDiv.append(p, div);

        updateLocalStorage();

        // change the button field when empty

        if ($('#add').html === 'Add Task') {
            taskInput.val('');
        } else {
            $('#add').html('Add Task');
            taskInput.val('');
        }

        deleteButton.click(function(){
            // mainDiv.fadeOut(1000, function() {
            // });
            mainDiv.remove();
            updateLocalStorage();
            });

        editButton.click(function(){
            let removedIndex = $(this).parent().parent();
            let selectedIndex = removedIndex.children().first().html();
            console.log(selectedIndex);
            taskInput.val(selectedIndex);
            $('#add').html('Update');
            removedIndex.remove();
            });

        completedButton.click(function(){
            let removedIndex = $(this).parent().parent();
            let selectedIndex = removedIndex.children().first();
            selectedIndex.toggleClass('lineThrough');
            mainDiv.toggleClass('complete');
            // p.toggleClass('lineThrough');
            });    
    });
    function updateLocalStorage() {
        let items = $('#taskList').html();
        localStorage.setItem('todo-list', items);
    };

});


