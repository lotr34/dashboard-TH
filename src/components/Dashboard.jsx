import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Dashboard = () => {
    // Temperature charts
    const Tempdata = [
        [1660511516000.0, 25.1], [1660511798000.0, 25.1], [1660512081000.0, 25.1], [1660512364000.0, 25.0], [1660512646000.0, 25.0], 
        [1660512929000.0, 25.0], [1660513211000.0, 25.0], [1660513494000.0, 25.0], [1660513777000.0, 25.0], [1660514059000.0, 25.0], 
        [1660514624000.0, 25.0], [1660514907000.0, 25.0], [1660515190000.0, 24.9], [1660516038000.0, 24.9], [1660516320000.0, 24.9], 
        [1660516603000.0, 24.9], [1660516886000.0, 24.9], [1660517169000.0, 24.9], [1660517451000.0, 24.9], [1660518017000.0, 24.9], 
        [1660518300000.0, 24.9], [1660518582000.0, 24.9], [1660518865000.0, 24.9], [1660519148000.0, 24.9], [1660519713000.0, 24.9], 
        [1660519996000.0, 24.9], [1660520278000.0, 24.9], [1660520561000.0, 24.9], [1660520844000.0, 24.9], [1660521126000.0, 24.9], 
        [1660521409000.0, 24.9], [1660521692000.0, 24.9], [1660521974000.0, 24.9], [1660522822000.0, 24.9], [1660523105000.0, 24.9], 
        [1660523670000.0, 24.9], [1660523953000.0, 24.9], [1660524235000.0, 24.9], [1660524518000.0, 24.9], [1660525084000.0, 24.9], 
        [1660525649000.0, 24.9], [1660525932000.0, 24.9], [1660526215000.0, 24.8], [1660526498000.0, 24.8], [1660526780000.0, 24.9], 
        [1660527063000.0, 24.9], [1660527346000.0, 24.8], [1660527629000.0, 24.8], [1660527912000.0, 24.8], [1660528195000.0, 24.8], 
        [1660528761000.0, 24.8], [1660529044000.0, 24.8], [1660529327000.0, 24.8], [1660529609000.0, 24.8], [1660529892000.0, 24.8], 
        [1660530175000.0, 24.8], [1660530458000.0, 24.8], [1660530740000.0, 24.8], [1660531023000.0, 24.8], [1660531306000.0, 24.8], 
        [1660531589000.0, 24.8], [1660531871000.0, 24.8], [1660532154000.0, 24.8], [1660532437000.0, 24.8], [1660532720000.0, 24.8], 
        [1660533003000.0, 24.8], [1660533285000.0, 24.8], [1660533568000.0, 24.8], [1660533851000.0, 24.8], [1660534134000.0, 24.8], 
        [1660534416000.0, 24.8], [1660534699000.0, 24.8], [1660534982000.0, 24.8], [1660535265000.0, 24.8], [1660535830000.0, 24.8], 
        [1660536396000.0, 24.8], [1660536679000.0, 24.8], [1660536962000.0, 24.8], [1660537244000.0, 24.8], [1660537527000.0, 24.8],
        [1660538093000.0, 24.8], [1660538376000.0, 24.8], [1660538658000.0, 24.8], [1660538941000.0, 24.8], [1660539224000.0, 24.8], 
        [1660539507000.0, 24.8], [1660539790000.0, 24.8], [1660540355000.0, 24.8], [1660540638000.0, 24.8], [1660540921000.0, 24.8], 
        [1660541204000.0, 24.8], [1660541487000.0, 24.7], [1660541770000.0, 24.8], [1660542052000.0, 24.8], [1660542335000.0, 24.8], 
        [1660542618000.0, 24.8], [1660542901000.0, 24.7], [1660543466000.0, 24.8], [1660543749000.0, 24.7], [1660544032000.0, 24.8], 
        [1660544315000.0, 24.7], [1660544597000.0, 24.8], [1660544880000.0, 24.7], [1660545163000.0, 24.7], [1660545446000.0, 24.7], 
        [1660545729000.0, 24.7], [1660546294000.0, 24.8], [1660546577000.0, 24.7], [1660546860000.0, 24.8], [1660547143000.0, 24.7], 
        [1660547426000.0, 24.7], [1660547709000.0, 24.7], [1660547992000.0, 24.7], [1660548275000.0, 24.8], [1660548840000.0, 24.8], 
        [1660549123000.0, 24.8], [1660549406000.0, 24.8], [1660549689000.0, 24.8], [1660549972000.0, 24.8], [1660550538000.0, 24.8], 
        [1660550821000.0, 24.8], [1660551103000.0, 24.8], [1660551386000.0, 24.8], [1660551669000.0, 24.8], [1660551952000.0, 24.8], 
        [1660552235000.0, 24.8], [1660552517000.0, 24.8], [1660553366000.0, 24.7], [1660553649000.0, 24.7], [1660553931000.0, 24.6], 
        [1660554214000.0, 24.6], [1660554497000.0, 24.6], [1660554780000.0, 24.6], [1660555062000.0, 24.5], [1660555345000.0, 24.5], 
        [1660555627000.0, 24.5], [1660555910000.0, 24.5], [1660556193000.0, 24.5], [1660556476000.0, 24.5], [1660557324000.0, 24.5], 
        [1660557607000.0, 24.4], [1660557890000.0, 24.5], [1660558172000.0, 24.4], [1660558455000.0, 24.4], [1660559021000.0, 24.4], 
        [1660559304000.0, 24.4], [1660559587000.0, 24.4], [1660559869000.0, 24.4], [1660560152000.0, 24.4], [1660560435000.0, 24.5], 
        [1660561000000.0, 24.5], [1660561566000.0, 24.4], [1660562131000.0, 24.4], [1660562414000.0, 24.3], [1660562697000.0, 24.3], 
        [1660562979000.0, 24.3], [1660563262000.0, 24.2], [1660563545000.0, 24.2], [1660563828000.0, 24.2], [1660564676000.0, 24.1], 
        [1660564959000.0, 24.0], [1660565524000.0, 24.0], [1660565807000.0, 24.0], [1660566089000.0, 24.0], [1660566372000.0, 23.9], 
        [1660566655000.0, 23.9], [1660566938000.0, 23.8], [1660567220000.0, 23.8], [1660567786000.0, 23.8], [1660568069000.0, 23.8], 
        [1660568352000.0, 23.7], [1660568635000.0, 23.7], [1660569200000.0, 23.7], [1660569483000.0, 23.7], [1660569766000.0, 23.7], 
        [1660570049000.0, 23.7], [1660570332000.0, 23.7], [1660570897000.0, 23.7], [1660571180000.0, 23.7], [1660571463000.0, 23.7], 
        [1660571746000.0, 23.7], [1660572878000.0, 23.8], [1660573443000.0, 23.8], [1660573727000.0, 23.8], [1660574009000.0, 23.8], 
        [1660574575000.0, 23.8], [1660574858000.0, 23.8], [1660575141000.0, 23.9], [1660575424000.0, 23.9], [1660575707000.0, 23.9], 
        [1660575989000.0, 23.9], [1660576555000.0, 23.9], [1660577120000.0, 23.9], [1660577403000.0, 23.9], [1660577969000.0, 23.9], 
        [1660578252000.0, 24.0], [1660578534000.0, 24.0], [1660579100000.0, 24.0], [1660579383000.0, 24.0], [1660579948000.0, 24.0], 
        [1660580231000.0, 24.0], [1660580797000.0, 24.0], [1660581079000.0, 24.0], [1660581362000.0, 24.0], [1660581645000.0, 24.0], 
        [1660581928000.0, 24.0], [1660582211000.0, 24.1], [1660582776000.0, 24.1], [1660583059000.0, 24.1], [1660583625000.0, 24.2], 
        [1660583907000.0, 24.2], [1660584190000.0, 24.2], [1660584473000.0, 24.3], [1660584756000.0, 24.3], [1660585321000.0, 24.3], 
        [1660585604000.0, 24.3], [1660585887000.0, 24.4], [1660586170000.0, 24.4], [1660586452000.0, 24.4], [1660586735000.0, 24.4], 
        [1660587018000.0, 24.4], [1660587301000.0, 24.4], [1660587866000.0, 24.3], [1660588149000.0, 24.3], [1660588432000.0, 24.3], 
        [1660588715000.0, 24.3], [1660588998000.0, 24.3], [1660589280000.0, 24.3], [1660589563000.0, 24.3], [1660589846000.0, 24.3], 
        [1660590129000.0, 24.2], [1660590412000.0, 24.2], [1660590694000.0, 24.2], [1660590977000.0, 24.2], [1660591260000.0, 24.2], 
        [1660591542000.0, 24.2], [1660591825000.0, 24.2], [1660592108000.0, 24.1], [1660592673000.0, 24.1], [1660592956000.0, 24.1], 
        [1660593239000.0, 24.1], [1660593521000.0, 24.1], [1660593804000.0, 24.1], [1660594087000.0, 24.0], [1660594369000.0, 24.0], 
        [1660594652000.0, 24.0], [1660594935000.0, 24.0], [1660595218000.0, 24.0], [1660595500000.0, 24.0], [1660595783000.0, 24.0], 
        [1660596066000.0, 23.9], [1660596631000.0, 23.9], [1660596914000.0, 23.9], [1660597197000.0, 23.9]
    ];


    const tempreversed = Tempdata

    const seriesTemp = [{
        name: "Temperature",
        data: Tempdata,
    }];

    const optionsTemp = {
        title: {
            text: 'Temperature',
            align: 'middle',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'Font Awesome',
                color: '#263238'
            },
        },
        chart: {
            type: "area",
            stacked: false,
            height: 300,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            foreColor: "#cccccc",
            toolbar: {
                autoSelected: "pan",
                show: true,
            },
            redrawOnWindowResize: true,
            locales: [{
                "name": "tr",
                "options": {
                    "months": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                    "shortMonths": ["Oca", "Sub", "Mar", "Nis", "May", "Haz", "Tem", "Ağs", "Eyl", "Eki", "Kas", "Ara"],
                    "days": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
                    "shortDays": ["Paz", "Pzt", "Salı", "Çarş", "Perş", "Cu", "Cts"],
                    "toolbar": {
                        "exportToSVG": "Download SVG",
                        "exportToPNG": "Download PNG",
                        "menu": "Menu",
                        "selection": "Selection",
                        "selectionZoom": "Selection Zoom",
                        "zoomIn": "Zoom In",
                        "zoomOut": "Zoom Out",
                        "pan": "Panning",
                        "reset": "Reset Zoom"
                    }
                }
            }],
            defaultLocale: "tr",
        },
        colors: ["#00BAEC"],
        stroke: {
            width: 3,
            lineCap: 'butt',
            curve: 'smooth'
        },
        grid: {
            borderColor: "#555",
            strokeDashArray: .5,
            position: 'front',
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0
            }
        },
        markers: {
            size: 0,
            colors: ["#000524"],
            strokeColor: "#00BAEC",
            strokeWidth: 3,
            style: 'hollow',
        },
        tooltip: {
            theme: "dark",
            x: {
                format: 'dd MMM - HH:mm:ss'
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
            },
            //min: new Date('29 Jan 2022').getTime(),
        },
        yaxis: {
            min: 22,
            max: 27,
            tickAmount: 8,
        },
    };

    const seriesRadialTempLow = [22];
    const optionsRadialTempLow = {
        chart: {
            height: 350,
            type: "radialBar",
            redrawOnWindowResize: true,
        },
        colors: ["#4ec6ff"],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                },
                track: {
                    startAngle: 0,
                    endAngle: 360,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#fff",
                        fontSize: "16px",
                        show: true,
                        formatter: function (val) {
                            return val + '\u2103'
                        }
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                //gradientToColors: ["#ff5642"],
                stops: [50, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Lowest"]
    };

    const seriesRadialTempHigh = [28];
    const optionsRadialTempHigh = {
        chart: {
            height: 350,
            type: "radialBar",
            redrawOnWindowResize: true,
        },
        colors: ["#4ec6ff"],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                },
                track: {
                    startAngle: 0,
                    endAngle: 360,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#fff",
                        fontSize: "16px",
                        show: true,
                        formatter: function (val) {
                            return val + '\u2103'
                        }
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                //gradientToColors: ["#ff5642"],
                stops: [50, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Highest"]
    };

    // Humidity charts
    const Humdata = [
        [1660511516000.0, 56.9], [1660511798000.0, 57.0], [1660512081000.0, 57.0], [1660512364000.0, 57.1], [1660512646000.0, 57.1], 
        [1660512929000.0, 57.2], [1660513211000.0, 57.2], [1660513494000.0, 57.2], [1660513777000.0, 57.3], [1660514059000.0, 57.3], 
        [1660514624000.0, 57.4], [1660514907000.0, 57.5], [1660515190000.0, 57.5], [1660516038000.0, 57.7], [1660516320000.0, 57.7], 
        [1660516603000.0, 57.8], [1660516886000.0, 57.8], [1660517169000.0, 57.8], [1660517451000.0, 57.9], [1660518017000.0, 57.9], 
        [1660518300000.0, 57.6], [1660518582000.0, 57.5], [1660518865000.0, 57.6], [1660519148000.0, 57.6], [1660519713000.0, 57.9], 
        [1660519996000.0, 58.0], [1660520278000.0, 58.0], [1660520561000.0, 58.1], [1660520844000.0, 58.2], [1660521126000.0, 58.3], 
        [1660521409000.0, 58.5], [1660521692000.0, 58.6], [1660521974000.0, 58.7], [1660522822000.0, 58.9], [1660523105000.0, 59.0], 
        [1660523670000.0, 59.0], [1660523953000.0, 59.1], [1660524235000.0, 59.2], [1660524518000.0, 59.2], [1660525084000.0, 59.3], 
        [1660525649000.0, 59.3], [1660525932000.0, 59.4], [1660526215000.0, 59.4], [1660526498000.0, 59.5], [1660526780000.0, 59.5], 
        [1660527063000.0, 59.5], [1660527346000.0, 59.6], [1660527629000.0, 59.6], [1660527912000.0, 59.6], [1660528195000.0, 59.6], 
        [1660528761000.0, 59.7], [1660529044000.0, 59.8], [1660529327000.0, 59.9], [1660529609000.0, 59.9], [1660529892000.0, 59.9], 
        [1660530175000.0, 60.0], [1660530458000.0, 60.0], [1660530740000.0, 60.1], [1660531023000.0, 60.1], [1660531306000.0, 60.1], 
        [1660531589000.0, 60.2], [1660531871000.0, 60.2], [1660532154000.0, 60.2], [1660532437000.0, 60.3], [1660532720000.0, 60.3], 
        [1660533003000.0, 60.4], [1660533285000.0, 60.4], [1660533568000.0, 60.4], [1660533851000.0, 60.4], [1660534134000.0, 60.5], 
        [1660534416000.0, 60.5], [1660534699000.0, 60.6], [1660534982000.0, 60.6], [1660535265000.0, 60.6], [1660535830000.0, 60.7], 
        [1660536396000.0, 60.7], [1660536679000.0, 60.7], [1660536962000.0, 60.7], [1660537244000.0, 60.8], [1660537527000.0, 60.8], 
        [1660538093000.0, 60.8], [1660538376000.0, 60.9], [1660538658000.0, 60.9], [1660538941000.0, 60.9], [1660539224000.0, 60.9], 
        [1660539507000.0, 60.9], [1660539790000.0, 61.0], [1660540355000.0, 61.0], [1660540638000.0, 61.1], [1660540921000.0, 61.1], 
        [1660541204000.0, 61.0], [1660541487000.0, 61.1], [1660541770000.0, 61.2], [1660542052000.0, 61.1], [1660542335000.0, 61.2], 
        [1660542618000.0, 61.1], [1660542901000.0, 61.2], [1660543466000.0, 61.2], [1660543749000.0, 61.2], [1660544032000.0, 61.3], 
        [1660544315000.0, 61.3], [1660544597000.0, 61.3], [1660544880000.0, 61.3], [1660545163000.0, 61.3], [1660545446000.0, 61.3], 
        [1660545729000.0, 61.3], [1660546294000.0, 61.4], [1660546577000.0, 61.3], [1660546860000.0, 61.3], [1660547143000.0, 61.4], 
        [1660547426000.0, 61.4], [1660547709000.0, 61.6], [1660547992000.0, 61.8], [1660548275000.0, 62.0], [1660548840000.0, 62.5], 
        [1660549123000.0, 62.8], [1660549406000.0, 63.0], [1660549689000.0, 63.1], [1660549972000.0, 63.3], [1660550538000.0, 63.5], 
        [1660550821000.0, 63.6], [1660551103000.0, 63.8], [1660551386000.0, 63.9], [1660551669000.0, 64.0], [1660551952000.0, 64.2], 
        [1660552235000.0, 64.2], [1660552517000.0, 63.2], [1660553366000.0, 62.5], [1660553649000.0, 62.2], [1660553931000.0, 61.6], 
        [1660554214000.0, 60.9], [1660554497000.0, 59.9], [1660554780000.0, 59.5], [1660555062000.0, 59.0], [1660555345000.0, 58.6], 
        [1660555627000.0, 57.8], [1660555910000.0, 57.3], [1660556193000.0, 57.2], [1660556476000.0, 56.9], [1660557324000.0, 56.0], 
        [1660557607000.0, 55.7], [1660557890000.0, 55.3], [1660558172000.0, 54.8], [1660558455000.0, 54.8], [1660559021000.0, 54.1], 
        [1660559304000.0, 54.7], [1660559587000.0, 55.0], [1660559869000.0, 55.7], [1660560152000.0, 55.9], [1660560435000.0, 55.9], 
        [1660561000000.0, 57.2], [1660561566000.0, 58.1], [1660562131000.0, 56.7], [1660562414000.0, 56.0], [1660562697000.0, 55.2], 
        [1660562979000.0, 55.0], [1660563262000.0, 54.9], [1660563545000.0, 54.8], [1660563828000.0, 54.5], [1660564676000.0, 53.5], 
        [1660564959000.0, 53.5], [1660565524000.0, 52.8], [1660565807000.0, 52.7], [1660566089000.0, 52.6], [1660566372000.0, 52.6], 
        [1660566655000.0, 52.7], [1660566938000.0, 52.4], [1660567220000.0, 52.2], [1660567786000.0, 51.9], [1660568069000.0, 52.4], 
        [1660568352000.0, 52.6], [1660568635000.0, 52.6], [1660569200000.0, 52.1], [1660569483000.0, 52.5], [1660569766000.0, 52.0], 
        [1660570049000.0, 52.3], [1660570332000.0, 52.2], [1660570897000.0, 52.8], [1660571180000.0, 52.2], [1660571463000.0, 52.2], 
        [1660571746000.0, 52.2], [1660572878000.0, 52.2], [1660573443000.0, 51.9], [1660573727000.0, 52.0], [1660574009000.0, 52.2], 
        [1660574575000.0, 52.1], [1660574858000.0, 52.7], [1660575141000.0, 52.5], [1660575424000.0, 52.4], [1660575707000.0, 52.2], 
        [1660575989000.0, 51.8], [1660576555000.0, 51.0], [1660577120000.0, 50.6], [1660577403000.0, 50.2], [1660577969000.0, 51.1], 
        [1660578252000.0, 51.3], [1660578534000.0, 50.9], [1660579100000.0, 49.8], [1660579383000.0, 49.7], [1660579948000.0, 50.1], 
        [1660580231000.0, 49.7], [1660580797000.0, 48.5], [1660581079000.0, 48.8], [1660581362000.0, 48.8], [1660581645000.0, 49.3], 
        [1660581928000.0, 48.5], [1660582211000.0, 48.8], [1660582776000.0, 48.4], [1660583059000.0, 47.9], [1660583625000.0, 48.6], 
        [1660583907000.0, 48.8], [1660584190000.0, 48.5], [1660584473000.0, 49.2], [1660584756000.0, 50.2], [1660585321000.0, 49.0], 
        [1660585604000.0, 49.6], [1660585887000.0, 49.9], [1660586170000.0, 50.2], [1660586452000.0, 49.9], [1660586735000.0, 49.6], 
        [1660587018000.0, 49.5], [1660587301000.0, 48.9], [1660587866000.0, 48.9], [1660588149000.0, 48.5], [1660588432000.0, 48.3], 
        [1660588715000.0, 48.2], [1660588998000.0, 48.3], [1660589280000.0, 48.3], [1660589563000.0, 48.2], [1660589846000.0, 48.4], 
        [1660590129000.0, 48.5], [1660590412000.0, 48.5], [1660590694000.0, 48.3], [1660590977000.0, 48.2], [1660591260000.0, 48.2], 
        [1660591542000.0, 48.2], [1660591825000.0, 48.4], [1660592108000.0, 48.4], [1660592673000.0, 48.2], [1660592956000.0, 48.1], 
        [1660593239000.0, 48.2], [1660593521000.0, 48.2], [1660593804000.0, 48.4], [1660594087000.0, 48.0], [1660594369000.0, 47.6], 
        [1660594652000.0, 47.3], [1660594935000.0, 47.0], [1660595218000.0, 46.7], [1660595500000.0, 46.7], [1660595783000.0, 46.6], 
        [1660596066000.0, 46.6], [1660596631000.0, 46.6], [1660596914000.0, 46.6], [1660597197000.0, 46.6]
    ];

    const humreversed = [...Humdata].reverse();

    const seriesHum = [{
        name: "Humidity",
        data: Humdata,
    }];

    const optionsHum = {
        title: {
            text: 'Humidity',
            align: 'middle',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'Font Awesome',
                color: '#263238'
            },
        },
        chart: {
            type: "area",
            stacked: false,
            height: 300,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            foreColor: "#cccccc",
            toolbar: {
                autoSelected: "pan",
                show: true,
            },
            redrawOnWindowResize: true,
            locales: [{
                "name": "tr",
                "options": {
                    "months": ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                    "shortMonths": ["Oca", "Sub", "Mar", "Nis", "May", "Haz", "Tem", "Ağs", "Eyl", "Eki", "Kas", "Ara"],
                    "days": ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
                    "shortDays": ["Paz", "Pzt", "Salı", "Çarş", "Perş", "Cu", "Cts"],
                    "toolbar": {
                        "exportToSVG": "Download SVG",
                        "exportToPNG": "Download PNG",
                        "menu": "Menu",
                        "selection": "Selection",
                        "selectionZoom": "Selection Zoom",
                        "zoomIn": "Zoom In",
                        "zoomOut": "Zoom Out",
                        "pan": "Panning",
                        "reset": "Reset Zoom"
                    }
                }
            }],
            defaultLocale: "tr",
        },
        colors: ["#00BAEC"],
        stroke: {
            width: 3,
            lineCap: 'butt',
            curve: 'smooth'
        },
        grid: {
            borderColor: "#555",
            strokeDashArray: .5,
            position: 'front',
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.55,
                opacityTo: 0
            }
        },
        markers: {
            size: 0,
            colors: ["#000524"],
            strokeColor: "#00BAEC",
            strokeWidth: 3,
            style: 'hollow',
        },
        tooltip: {
            theme: "dark",
            x: {
                format: 'dd MMM - HH:mm:ss'
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
            },
            //min: new Date('29 Jan 2022').getTime(),
        },
        yaxis: {
            min: 42,
            max: 70,
            tickAmount: 8,
        },
    };

    const seriesRadialHumLow = [22];
    const optionsRadialHumLow = {
        chart: {
            height: 350,
            type: "radialBar",
            redrawOnWindowResize: true,
        },
        colors: ["#4ec6ff"],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                },
                track: {
                    startAngle: 0,
                    endAngle: 360,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#fff",
                        fontSize: "16px",
                        show: true,
                        formatter: function (val) {
                            return val + '\u2103'
                        }
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                //gradientToColors: ["#ff5642"],
                stops: [50, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Lowest"]
    };

    const seriesRadialHumHigh = [28];
    const optionsRadialHumHigh = {
        chart: {
            height: 350,
            type: "radialBar",
            redrawOnWindowResize: true,
        },
        colors: ["#4ec6ff"],
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#293450"
                },
                track: {
                    startAngle: 0,
                    endAngle: 360,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.15
                    }
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: "13px"
                    },
                    value: {
                        color: "#fff",
                        fontSize: "16px",
                        show: true,
                        formatter: function (val) {
                            return val + '\u2103'
                        }
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                //gradientToColors: ["#ff5642"],
                stops: [50, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Highest"]
    };

    return (
        <div className='h-full'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='pr-16'>
                    <ReactApexChart options={optionsTemp} series={seriesTemp} type="area" height={350} />
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-6'>
                        <ReactApexChart options={optionsRadialTempLow} series={seriesRadialTempLow} type="radialBar" height={200} />
                        <ReactApexChart options={optionsRadialTempHigh} series={seriesRadialTempHigh} type="radialBar" height={200} />
                    </div>
                    <div className='py-8 h-40 overflow-auto scrollbar-hide'>
                        <table className="table-auto text-white mx-auto my-auto w-[90%]">
                            <thead className='bg-[#0b1827] text-left'>
                                <tr className=''>
                                    <th className='border-t-2 border-t-blue-900 border-r-2 border-r-[rgb(30,58,138)] pl-4'>Time</th>
                                    <th className='border-t-2 border-t-blue-900 pl-4'>Value</th>
                                </tr>
                            </thead>

                            <tbody className='overflow-scroll'>
                                { Tempdata.map((data) =>(
                                    <tr>
                                        <td>{new Intl.DateTimeFormat('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data[0])}</td>
                                        <td>{data[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <div className='grid grid-cols-2 gap-6'>
                        <ReactApexChart options={optionsRadialHumLow} series={seriesRadialHumLow} type="radialBar" height={200} />
                        <ReactApexChart options={optionsRadialHumHigh} series={seriesRadialHumHigh} type="radialBar" height={200} />
                    </div>
                    <div className='py-8 h-40 overflow-auto scrollbar-hide'>
                        <table className="table-auto text-white mx-auto my-auto w-[90%]">
                            <thead className='bg-[#0b1827] text-left'>
                                <tr className=''>
                                    <th className='border-t-2 border-t-blue-900 border-r-2 border-r-[rgb(30,58,138)] pl-4'>Time</th>
                                    <th className='border-t-2 border-t-blue-900 pl-4'>Value</th>
                                </tr>
                            </thead>

                            <tbody className='overflow-scroll'>
                                { Humdata.map((data) =>(
                                    <tr>
                                        <td>{new Intl.DateTimeFormat('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(data[0])}</td>
                                        <td>{data[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='pr-16'>
                    <ReactApexChart options={optionsHum} series={seriesHum} type="area" height={350} />
                </div>

            </div>
        </div>

    )
}

export default Dashboard