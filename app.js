d3.json("samples.json").then((incomingData) => {
    var data = incomingData.metadata
        
    //Populate dropdown w/ names
    var dropDown = d3.selectAll("#selDataset")
        data.forEach(d => {
        var item = dropDown.append("option")
        item.text(d.id)
    });

    //Select DD control
    var idSelect = d3.select("#selDataset")
    idSelect.on("change", runFilter);

    //Function to run
    function runFilter() {
        //prevent default
        d3.event.preventDefault();
        
        //Value of dropdown
        var selectedId = idSelect.property("value")

        //Demographic data 
        var demoData = []
        var demoData = data.filter(d => d.id == selectedId)
        var demoList = d3.select("#sample-metadata")
        var demoEntries = demoData[0]
    
                //Remove table
                d3.select("table").remove();
                //append new table
                demoList.append("table").append("tbody")
        
                //Populate dem info
                Object.entries(demoEntries).forEach(function([key,value]) {
                    var tableData = d3.select("tbody").append('tr').append('td')
                    tableData.text(`${key}: ${value}`)
                })
                
         
                
    }
})