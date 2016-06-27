$(function () {
    var axi = [20, 30, 50, 80, 100, 120, 150, 200, 300];

    var Ada_tr = [0, 0, 0, 0,
                  0, 0, 0, 0, 5.75E-05];
    var Ada_te = [0.189655172414, 0.155172413793, 0.155172413793, 0.224137931034,
                  0.206896551724, 0.155172413793, 0.172413793103, 0.206896551724, 0.258620689655];

    var GNB_tr = [0.0155172413793, 0.0568965517241, 0.14, 0.207543103448,
                  0.223620689655, 0.242816091954, 0.251264367816, 0.277586206897, 0.311609195402];
    var GNB_te = [0.137931034483, 0.120689655172, 0.275862068966, 0.344827586207,
                  0.344827586207, 0.293103448276, 0.293103448276, 0.379310344828, 0.431034482759];

    var LDA_tr = [0.000862068965517, 0.000574712643678, 0.0131034482759, 0.0588362068966,
                  0.08, 0.10158045977, 0.12908045977, 0.161034482759, 0.209942528736];
    var LDA_te = [0.206896551724, 0.310344827586, 0.224137931034, 0.293103448276,
                  0.344827586207, 0.327586206897, 0.275862068966, 0.310344827586, 0.310344827586];

    var RF_tr = [0, 0, 0, 0, 
                  0, 0, 0, 0, 0];
    var RF_te = [0.103448275862, 0.137931034483, 0.120689655172, 0.137931034483,
                  0.137931034483, 0.137931034483, 0.120689655172, 0.120689655172, 0.137931034483];

    var xAda_tr = [], xGNB_tr = [], xLDA_tr = [], xRF_tr = [];
    var xAda_te = [], xGNB_te = [], xLDA_te = [], xRF_te = [];
    for (var i = 0; i < 9; i += 1) {
        xAda_tr.push([axi[i], Ada_tr[i]]);
        xAda_te.push([axi[i], Ada_te[i]]);

        xGNB_tr.push([axi[i], GNB_tr[i]]);
        xGNB_te.push([axi[i], GNB_te[i]]);
        
        xLDA_tr.push([axi[i], LDA_tr[i]]);
        xLDA_te.push([axi[i], LDA_te[i]]);
        
        xRF_tr.push([axi[i], RF_tr[i]]);
        xRF_te.push([axi[i], RF_te[i]]);
    }
    var plot1 = $.plot($("#line-chart-Ada"),
           [ { data: xAda_tr, label: "train error"}, { data: xAda_te, label: "test error"} ], {
               series: {
                   lines: { show: true },
                   points: { show: false }
               },
               grid: { hoverable: true, clickable: true },
               yaxis: { min: 0.0, max: 0.3, axisLabel: "percent" },
         xaxis: { min: 20, max: 300 },
    	colors: ["#4169E1", "#DC143C", "#666", "#BBB"]
             });

    var plot2 = $.plot($("#line-chart-GNB"),
           [ { data: xGNB_tr, label: "train error"}, { data: xGNB_te, label: "test error"} ], {
               series: {
                   lines: { show: true },
                   points: { show: false }
               },
               grid: { hoverable: true, clickable: true },
               yaxis: { min: 0.0, max: 0.5, axisLabel: "percent" },
         xaxis: { min: 20, max: 300 },
      colors: ["#4169E1", "#DC143C", "#666", "#BBB"]
             });

    var plot3 = $.plot($("#line-chart-LDA"),
           [ { data: xLDA_tr, label: "train error"}, { data: xLDA_te, label: "test error"} ], {
               series: {
                   lines: { show: true },
                   points: { show: false }
               },
               grid: { hoverable: true, clickable: true },
               yaxis: { min: 0.0, max: 0.4, axisLabel: "percent" },
         xaxis: { min: 20, max: 300 },
      colors: ["#4169E1", "#DC143C", "#666", "#BBB"]
             });

    var plot4 = $.plot($("#line-chart-RF"),
           [ { data: xRF_tr, label: "train error"}, { data: xRF_te, label: "test error"} ], {
               series: {
                   lines: { show: true },
                   points: { show: false }
               },
               grid: { hoverable: true, clickable: true },
               yaxis: { min: 0.0, max: 0.16, axisLabel: "percent" },
         xaxis: { min: 20, max: 300 },
      colors: ["#4169E1", "#DC143C", "#666", "#BBB"]
             });
});