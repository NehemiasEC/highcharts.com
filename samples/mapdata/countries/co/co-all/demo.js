$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "co-sa",
            "value": 0
        },
        {
            "hc-key": "co-ca",
            "value": 1
        },
        {
            "hc-key": "co-na",
            "value": 2
        },
        {
            "hc-key": "co-ch",
            "value": 3
        },
        {
            "hc-key": "co-3653",
            "value": 4
        },
        {
            "hc-key": "co-ri",
            "value": 5
        },
        {
            "hc-key": "co-qd",
            "value": 6
        },
        {
            "hc-key": "co-to",
            "value": 7
        },
        {
            "hc-key": "co-bl",
            "value": 8
        },
        {
            "hc-key": "co-cq",
            "value": 9
        },
        {
            "hc-key": "co-gn",
            "value": 10
        },
        {
            "hc-key": "co-su",
            "value": 11
        },
        {
            "hc-key": "co-hu",
            "value": 12
        },
        {
            "hc-key": "co-pu",
            "value": 13
        },
        {
            "hc-key": "co-am",
            "value": 14
        },
        {
            "hc-key": "co-vc",
            "value": 15
        },
        {
            "hc-key": "co-at",
            "value": 16
        },
        {
            "hc-key": "co-ce",
            "value": 17
        },
        {
            "hc-key": "co-lg",
            "value": 18
        },
        {
            "hc-key": "co-ma",
            "value": 19
        },
        {
            "hc-key": "co-ar",
            "value": 20
        },
        {
            "hc-key": "co-ns",
            "value": 21
        },
        {
            "hc-key": "co-cs",
            "value": 22
        },
        {
            "hc-key": "co-gv",
            "value": 23
        },
        {
            "hc-key": "co-me",
            "value": 24
        },
        {
            "hc-key": "co-1136",
            "value": 25
        },
        {
            "hc-key": "co-vp",
            "value": 26
        },
        {
            "hc-key": "co-vd",
            "value": 27
        },
        {
            "hc-key": "co-an",
            "value": 28
        },
        {
            "hc-key": "co-co",
            "value": 29
        },
        {
            "hc-key": "co-by",
            "value": 30
        },
        {
            "hc-key": "co-st",
            "value": 31
        },
        {
            "hc-key": "co-cl",
            "value": 32
        },
        {
            "hc-key": "co-cu",
            "value": 33
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/co/co-all.js">Colombia</a>'
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
            mapData: Highcharts.maps['countries/co/co-all'],
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
