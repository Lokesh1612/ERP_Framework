$('a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('id');
    // Send your data to php
    if (id === 'addbutton') {
        console.log("add clicked");
        $('#addbutton').hide();
        $('#savebutton').show();
        $('#tableview').hide();
        $('#addview').show();
    } else {
        console.log("add clicked");
        $('#savebutton').hide();
        $('#addbutton').show();
        $('#addview').hide();
        $('#tableview').show();
    }
});