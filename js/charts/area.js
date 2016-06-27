$(function () {
	// we use an inline data source in the example, usually data would
	// be fetched from a server
	var axi = [20, 30, 50, 80, 100, 120, 150, 200, 300];
	var on_acc = [0.896551724138,
			0.862068965517,
			0.879310344828,
			0.862068965517,
			0.862068965517,
			0.862068965517,
			0.879310344828,
			0.879310344828,
			0.862068965517];
	var on_f1 = [0.906666666667,
			0.88,
			0.909090909091,
			0.909090909091,
			0.909090909091,
			0.909090909091,
			0.894736842105,
			0.906666666667,
			0.921052631579];
	var off_acc = [0.496466431095,
			0.547703180212,
			0.498233215548,
			0.508833922261,
			0.505300353357,
			0.524734982332,
			0.471731448763,
			0.459363957597,
			0.41519434629];
	var off_f1 = [0.435643564356,
			0.549295774648,
			0.44094488189,
			0.450592885375,
			0.453125,
			0.487619047619,
			0.380952380952,
			0.351694915254,
			0.242562929062];

	var xOn_acc = [], xOn_f1 = [];
	var xOff_acc = [], xOff_f1 = [];
	for (var i = 0; i < 9; i += 1) {
		xOn_acc.push([axi[i], on_acc[i]]);
		xOn_f1.push([axi[i], on_f1[i]]);
		xOff_acc.push([axi[i], off_acc[i]]);
		xOff_f1.push([axi[i], off_f1[i]]);
	}

	// setup plot
	var options1 = {
		yaxis: { min: 0.0, max: 1.0 },
		xaxis: { min: 20, max: 300 },
		colors: ["#FFA500", "#008000", "#F90", "#BBB"],
		series: {
				   lines: { 
						lineWidth: 2, 
						fill: true,
						fillColor: { colors: [ { opacity: 0.6 }, { opacity: 0.2 } ] },
						steps: false

					}
			   }
	}, options2 = {
		yaxis: { min: 0.0, max: 1.0 },
		xaxis: { min: 20, max: 300 },
		colors: ["#FF0000", "#00BFFF", "#F90", "#BBB"],
		series: {
				   lines: { 
						lineWidth: 2, 
						fill: true,
						fillColor: { colors: [ { opacity: 0.6 }, { opacity: 0.2 } ] },
						steps: false

					}
			   }
	};
	
	var plot1 = $.plot($("#area-chart-accuracy"), [ { data: xOn_acc, label: "online.accuracy" }, { data: xOff_acc, label: "offline.accuracy" } ], options1);
	var plot2 = $.plot($("#area-chart-f1"), [ { data: xOn_f1, label: "online.f1-score" }, { data: xOff_f1, label: "offline.f1-score" } ], options2);
});