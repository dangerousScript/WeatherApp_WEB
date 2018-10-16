$(document).ready(function () {
    $('#submitCity').click(function () {
        return getWeather();
    });
});

function getWeather() {
    var city = $('#city').val();

    if (city != '') {
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=63db795291be5ac82fdcc53d99fdf9af',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $('#showWeather').html();
            }
        });
    } else {
        $('#error').html("<div>City field cannot be empty</div>");
    }
}