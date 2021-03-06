$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "tr-ga",
            "value": 0
        },
        {
            "hc-key": "tr-du",
            "value": 1
        },
        {
            "hc-key": "tr-4409",
            "value": 2
        },
        {
            "hc-key": "tr-bk",
            "value": 3
        },
        {
            "hc-key": "tr-ck",
            "value": 4
        },
        {
            "hc-key": "tr-ad",
            "value": 5
        },
        {
            "hc-key": "tr-km",
            "value": 6
        },
        {
            "hc-key": "tr-ky",
            "value": 7
        },
        {
            "hc-key": "tr-tt",
            "value": 8
        },
        {
            "hc-key": "tr-ss",
            "value": 9
        },
        {
            "hc-key": "tr-eg",
            "value": 10
        },
        {
            "hc-key": "tr-en",
            "value": 11
        },
        {
            "hc-key": "tr-ml",
            "value": 12
        },
        {
            "hc-key": "tr-gi",
            "value": 13
        },
        {
            "hc-key": "tr-tb",
            "value": 14
        },
        {
            "hc-key": "tr-bg",
            "value": 15
        },
        {
            "hc-key": "tr-dy",
            "value": 16
        },
        {
            "hc-key": "tr-ic",
            "value": 17
        },
        {
            "hc-key": "tr-ko",
            "value": 18
        },
        {
            "hc-key": "tr-ht",
            "value": 19
        },
        {
            "hc-key": "tr-aa",
            "value": 20
        },
        {
            "hc-key": "tr-cm",
            "value": 21
        },
        {
            "hc-key": "tr-kk",
            "value": 22
        },
        {
            "hc-key": "tr-ng",
            "value": 23
        },
        {
            "hc-key": "tr-ak",
            "value": 24
        },
        {
            "hc-key": "tr-kh",
            "value": 25
        },
        {
            "hc-key": "tr-yz",
            "value": 26
        },
        {
            "hc-key": "tr-am",
            "value": 27
        },
        {
            "hc-key": "tr-ms",
            "value": 28
        },
        {
            "hc-key": "tr-bm",
            "value": 29
        },
        {
            "hc-key": "tr-ka",
            "value": 30
        },
        {
            "hc-key": "tr-ig",
            "value": 31
        },
        {
            "hc-key": "tr-zo",
            "value": 32
        },
        {
            "hc-key": "tr-kb",
            "value": 33
        },
        {
            "hc-key": "tr-mn",
            "value": 34
        },
        {
            "hc-key": "tr-ay",
            "value": 35
        },
        {
            "hc-key": "tr-yl",
            "value": 36
        },
        {
            "hc-key": "tr-kc",
            "value": 37
        },
        {
            "hc-key": "tr-ed",
            "value": 38
        },
        {
            "hc-key": "tr-sk",
            "value": 39
        },
        {
            "hc-key": "tr-bu",
            "value": 40
        },
        {
            "hc-key": "tr-ci",
            "value": 41
        },
        {
            "hc-key": "tr-bl",
            "value": 42
        },
        {
            "hc-key": "tr-kl",
            "value": 43
        },
        {
            "hc-key": "tr-ib",
            "value": 44
        },
        {
            "hc-key": "tr-es",
            "value": 45
        },
        {
            "hc-key": "tr-kr",
            "value": 46
        },
        {
            "hc-key": "tr-al",
            "value": 47
        },
        {
            "hc-key": "tr-br",
            "value": 48
        },
        {
            "hc-key": "tr-ks",
            "value": 49
        },
        {
            "hc-key": "tr-af",
            "value": 50
        },
        {
            "hc-key": "tr-bd",
            "value": 51
        },
        {
            "hc-key": "tr-ip",
            "value": 52
        },
        {
            "hc-key": "tr-or",
            "value": 53
        },
        {
            "hc-key": "tr-sp",
            "value": 54
        },
        {
            "hc-key": "tr-av",
            "value": 55
        },
        {
            "hc-key": "tr-em",
            "value": 56
        },
        {
            "hc-key": "tr-ri",
            "value": 57
        },
        {
            "hc-key": "tr-an",
            "value": 58
        },
        {
            "hc-key": "tr-su",
            "value": 59
        },
        {
            "hc-key": "tr-bb",
            "value": 60
        },
        {
            "hc-key": "tr-mr",
            "value": 61
        },
        {
            "hc-key": "tr-sr",
            "value": 62
        },
        {
            "hc-key": "tr-si",
            "value": 63
        },
        {
            "hc-key": "tr-tc",
            "value": 64
        },
        {
            "hc-key": "tr-hk",
            "value": 65
        },
        {
            "hc-key": "tr-va",
            "value": 66
        },
        {
            "hc-key": "tr-ar",
            "value": 67
        },
        {
            "hc-key": "tr-ki",
            "value": 68
        },
        {
            "hc-key": "tr-tg",
            "value": 69
        },
        {
            "hc-key": "tr-iz",
            "value": 70
        },
        {
            "hc-key": "tr-mg",
            "value": 71
        },
        {
            "hc-key": "tr-dn",
            "value": 72
        },
        {
            "hc-key": "tr-ku",
            "value": 73
        },
        {
            "hc-key": "tr-nv",
            "value": 74
        },
        {
            "hc-key": "tr-sv",
            "value": 75
        },
        {
            "hc-key": "tr-ag",
            "value": 76
        },
        {
            "hc-key": "tr-bt",
            "value": 77
        },
        {
            "hc-key": "tr-us",
            "value": 78
        },
        {
            "hc-key": "tr-os",
            "value": 79
        },
        {
            "hc-key": "tr-gu",
            "value": 80
        },
        {
            "hc-key": "tr-bc",
            "value": 81
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/tr/tr-all.js">Turkey</a>'
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
            mapData: Highcharts.maps['countries/tr/tr-all'],
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
