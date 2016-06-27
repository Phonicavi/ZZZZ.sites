$(function () {
	var data = new Array();
    var ds = new Array();
	
	var axi = [5, 10, 15, 20, 27, 35, 40, 45, 50, 54]; // len=10
	var acc = [.78, .84, .84, .86, .88, .86, .88, .88, .86, .88];
	var f1 = [.83, .88, .88, .90, .91, .90, .91, .91, .90, .91];

	var xAcc = [], xF1 = [], xBIC = [];
	for (var i=0; i<10; i++) {
		xAcc.push([axi[i], acc[i]]);
		xF1.push([axi[i], f1[i]]);
		var bic = -2000*Math.log(acc[i])+axi[i]*Math.log(100);
		xBIC.push([axi[i], bic/550]);
	}
	data.push(xAcc);
	data.push(xF1);
	data.push(xBIC);
 
    for (var i=0, j=data.length; i<j; i++) {
    	var label = '';
    	if (i==0) label = 'accuracy';
    	if (i==1) label = 'f1-score';
    	if (i==2) label = 'Bayesian Information Criterion';
	    ds.push({
	        data:data[i],
	        label:label,
	        grid:{
            hoverable:true
        },
	        bars: {
	            show: true, 
	            barWidth: 1., 
	            order: 1,
	            lineWidth: 0.5, 
				fillColor: { colors: [ { opacity: 0.65 }, { opacity: 1 } ] }
	        }
	    });
	}
	    
    $.plot($("#bar-chart"), ds, {
    	yaxis: { min: 0.65, max: 1.0 },
    	colors: ["#00BFFF", "#0000CD", "#DC143C", "#BBB"]
    });

    var plot = $.plot($("#line-chart-BIC"), [ { data: xBIC, label: "Bayesian Information Criterion" } ], {
                series: {
                    lines: { show: true },
                    points: { show: false }
                },
               grid: { hoverable: true, clickable: true },
        yaxis: { min: 0.6, max: 1.0, axisLabel: "percent" },
    	colors: ["#DC143C", "#F90", "#666", "#BBB"]
    });
                

    
});