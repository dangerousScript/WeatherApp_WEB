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
            dataType: 'jsonp',
            success: function (data) {
                var widget = showResults(data);

                $('#showWeather').html(widget);

                $('#city').val('');
            }
        });
    } else {
        $('#error').html("<div>City field cannot be empty</div>");
    }
}

function showResults(data) {
    return  "<h3>Current Weather for " + data.name + ", " + data.sys.country + "</h3>" +
            "<p>Weather: " + data.weather[0].main + "</p>" +
            "<p>Weather Description: " + data.weather[0].description + "</p>" +
            "<p>Temperature: " + data.main.temp + " &deg;C</p>" +
            "<p>Pressure: " + data.main.pressure + " hpa</p>" +
            "<p>Humidity: " + data.main.humidity + " %</p>" +
            "<p>Min Temperature: " + data.main.temp_min + " &deg;C</p>" +
            "<p>Max Temperature: " + data.main.temp_max + " &deg;C</p>" +
            "<p>Wind Speed: " + data.wind.speed + " m/s</p>" +
            "<p>Wind Direction: " + data.wind.deg + " &deg;</p>";
}