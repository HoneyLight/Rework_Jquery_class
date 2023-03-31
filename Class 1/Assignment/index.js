/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
let inputTag = $('#text');
let inputBtn = $('#btn');
let list = $("body");
let listTag = $('<ul></ul>');


// val()
// html()
// append
// prepend
// addClass
// CSS
// removeClass


$(document).ready(function(){
    inputBtn.click(function(){
        // alert($('#myList').html());
        $('body').append('<li>Hello</li>')

        listTag.append('<li>Beans</li>');
        listTag.append('<li>Garri</li>');
        listTag.append('<li>sugar</li>');

        $('body').append(listTag);

        styleDiv()
    })

    $('#removeBtn').click(function(){
        $('#myList').removeClass('divOne')
    })

    function styleDiv(){
        $('#myList').css('background', 'red');
        $('#myList').addClass('divOne')
    }

    // inputBtn.click(function(){
    //     alert(inputTag.val())
    // })

    // inputBtn.click(function(){
    //     list.append("<li>working</li>")
    // })
    // what we did here is, we give our button a .CLICK and opened a function () then we append <li>working</li> to it 

})

