// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//create variables
var height, width, color;

//make the grid with submit function
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);

})

function makeGrid(x, y) {
    // Your code goes here!
    //remove the grid
    $('tr').remove();

    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + ' ></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //add color when color is chosen
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}