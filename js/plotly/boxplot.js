const CSV = 
    "https://raw.githubusercontent.com/hyunsy1214/plotly.js/master/owid-co2-data.csv";

function plotFromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        processData(rows);
    });
}

function processData(allRows) {
    let y1 = [];
    let y2 = [];
    let y3 = [];
    let row1;
    let row2;
    let row3;

    for (let i = 39091; i<=39262; i++){
      row1 = allRows[i];
      y1.push(row1["co2"]);
      
      
  }

    for (let i = 8821; i<=8992; i++){
      row2 = allRows[i];
      y2.push(row2["co2"]);
      
      
  }
    for (let i = 21588; i<=21759; i++){
      row3 = allRows[i];
      y3.push(row3["co2"]);
      
      
  }

    makePlotly(y1,y2,y3);
}

function makePlotly(y1,y2,y3) {
    let traces = [
        {
            y: y1,
            type: "box",
            // boxmean: true,
            name: "Korea"
        },
        {
            y: y2,
            type: "box",
            // boxpoints: "all",
            name: "China"
        },
        {
            y: y3,
            type: "box",
            // boxpoints: false,
            name: "Japan"  
        }
    ];

    let layout = {
        title: "South Korea & China & Japan CO2",
        yaxis: {
            // gridcolor: "lightgrey",
            // gridwidth: 2,
            // zerolinewidth: 3
        }
    };

    let config = { responsive: true };

    Plotly.newPlot("plot", traces, layout, config);
}

plotFromCSV();
