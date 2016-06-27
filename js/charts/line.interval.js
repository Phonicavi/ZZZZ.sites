$(function () {
    var axi = [1, 5, 10, 15, 20, 25, 30, 40, 45];

    var RF_pre = [-58.52019176, 633.575363529, 595.9096941, 682.6381118,
                499.122607059, 404.517437647, 419.3774376, 376.290032941, 485.806931765];
    var RF_tr = [2787.253442, 1118.78626, 811.2921612, 792.4086365,
                499.183171765, 472.131034118, 407.99656, 376.290032941, 485.806931765];
    var xRF_pre = [], xRF_tr = [];
    for (var i = 0; i < 9; i += 1) {        
        xRF_pre.push([axi[i], RF_pre[i]]);
        xRF_tr.push([axi[i], RF_tr[i]]);
    }
    var plot = $.plot($("#line-chart-interval"),
           [ { data: xRF_pre, label: "RF-ROR"}, { data: xRF_tr, label: "God's ROR"} ], {
               series: {
                   lines: { show: true },
                   points: { show: false }
               },
               grid: { hoverable: true, clickable: true },
               yaxis: { min: -60.0, max: 2800.0, axisLabel: "ROR" },
         xaxis: { min: 0, max: 45 },
    	colors: ["#4169E1", "#DC143C", "#666", "#BBB"]
             });
});