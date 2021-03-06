$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "tl-am",
            "value": 0
        },
        {
            "hc-key": "tl-dl",
            "value": 1
        },
        {
            "hc-key": "tl-lq",
            "value": 2
        },
        {
            "hc-key": "tl-al",
            "value": 3
        },
        {
            "hc-key": "tl-an",
            "value": 4
        },
        {
            "hc-key": "tl-bc",
            "value": 5
        },
        {
            "hc-key": "tl-bb",
            "value": 6
        },
        {
            "hc-key": "tl-cl",
            "value": 7
        },
        {
            "hc-key": "tl-er",
            "value": 8
        },
        {
            "hc-key": "tl-mt",
            "value": 9
        },
        {
            "hc-key": "tl-mf",
            "value": 10
        },
        {
            "hc-key": "tl-vq",
            "value": 11
        },
        {
            "hc-key": "tl-bt",
            "value": 12
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/tl/tl-all.js">East Timor</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/tl/tl-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
