const CSV = 
    "https://raw.githubusercontent.com/hyunsy1214/plotly.js/master/owid-co2-data.csv";

function plotFromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        console.log(rows);
        processData(rows);
    });
}

function processData(allRows) {
    let x = [];
    let y1 = [];
    let y2 = [];
    let y3 = [];
    // let row;
    let row1;
    let row2;
    let row3;
    
    // for (let i = 1850; i<=2022; i++){
    //     x.push(i);
        
        
    // }

    for (let i = 8821; i<=8992; i++){
        // row = allRows[i];
        row1 = allRows[i];
        x.push(row1["year"]);
        y1.push(row1["co2"]);
        
        
    }

    for (let i = 21588; i<=21759; i++){
        row2 = allRows[i];
        y2.push(row2["co2"]);
        
        
    }
        for (let i = 39091; i<=39262; i++){
        row3 = allRows[i];
        y3.push(row3["co2"]);
        
        
    }

    
    console.log("X", x);
    console.log("Y1", y1);
    console.log("Y2", y2);
    console.log("Y3", y3);

    makePlotly(x, y1, y2, y3);

}

function makePlotly(x, y1, y2, y3) {
    let traces = [
        {
            x: x,
            y: y1,
            name: "China",
            line: {
                color: "#ff0000",
                width: 3
            }
        },
        {
            x: x,
            y: y2,
            name: "Japan",
            line: {
                color: "#000000",
                width: 3,
                // dash: "dash"
            }
        },
        {
            x: x,
            y: y3,
            name: "South Korea",
            line: {
                color: "#0000ff",
                width: 3,
                // dash: "dash"
            }
        }
    ];

    let layout = {
        title: "South Korea & China & Japan CO2",
        yaxis: {
            range : [0, Math.max([...y1, ...y2, ...y3] + 10)]
            
        },
        xaxis: {
            // tickformat: "%d/%m/%y"
        },
    };

    //https://plot.ly/javascript/configuration-options/
    let config = { 
        responsive: true,
        // staticPlot: true,
        editable: true
    };

    Plotly.newPlot("plot", traces, layout, config);
}

plotFromCSV();
