$(function () {
        $('#wikipedia').highcharts({
            title: {
                text: 'Number of Wikipedia pageviews per month',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'YYYYMM'
                },
                categories: ['201301', '201302', '201303', '201304', '201305', '201306', '201307', '201308', '201309', '201310', '201311', '201312', '201401', '201402']
            },
            yAxis: {
                title: {
                    text: 'Pageviews'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' Pageviews'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Pageviews',
                data: [329938, 321178, 349374, 324800, 297749, 211787, 177399, 202992, 182510, 272679, 258345, 210897, 200095, 188497]
            },]
        });
        $('#google').highcharts({
            title: {
                text: 'Google Popularity',
                x: -20 //center
            },
            xAxis: {
                title: {
                    text: 'Week ending YYYY-MM-DD'
                },
                categories: ['01-05', '01-12', '01-19', '01-26', '02-02', '02-09', '02-16', '02-23', '03-02', '03-09', '03-16', '03-23', '03-30', '04-06', '04-13', '04-20', '04-27', '05-04', '05-11', '05-18', '05-25', '06-01', '06-08', '06-15', '06-22', '06-29', '07-06', '07-13', '07-20', '07-27', '08-03', '08-10', '08-17', '08-24', '08-31', '09-07', '09-14', '09-21', '09-28', '10-05', '10-12', '10-19', '10-26', '11-02', '11-09', '11-16', '11-23', '11-30', '12-07', '12-14', '12-21', '12-28', '01-04', '01-11', '01-18', '01-25', '02-01', '02-08', '02-15', '02-22', '03-01', '03-08']
            },
            yAxis: {
                title: {
                    text: ' Relative Popularity'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Relative Popularity',
                data: [31, 40, 36, 37, 38, 38, 37, 36, 37, 36, 35, 42, 41, 38, 39, 40, 41, 40, 38, 39, 36, 36, 36, 33, 31, 29, 28, 29, 26, 25, 26, 44, 28, 29, 31, 29, 32, 32, 32, 33, 38, 35, 35, 58, 43, 50, 41, 36, 41, 41, 51, 36, 33, 37, 39, 39, 39, 39, 35, 35, 34, 33]
            },]
});
    
    });
    
