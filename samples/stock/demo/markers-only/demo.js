$(function () {
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

        // Create the chart
        $('#container').highcharts('StockChart', {


            rangeSelector : {
                inputEnabled: $('#container').width() > 480,
                selected : 2
            },

            title : {
                text : 'AAPL Stock Price'
            },

            series : [{
                name : 'AAPL Stock Price',
                data : data,
                lineWidth : 0,
                marker : {
                    enabled : true,
                    radius : 2
                },
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
});
