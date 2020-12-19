d3.json("samples.json").then((incomingData) => {
    var data = incomingData.metadata
        
    //Populate dropdown with names
    var dropDown = d3.selectAll("#selDataset")
        data.forEach(d => {
        var item = dropDown.append("option")
        item.text(d.id)
    });

    //Select Dropdown Control
    var idSelect = d3.select("#selDataset")
    idSelect.on("change", runFilter);

    //function to run once dropdown selected value changes
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
    
        
    }
})