queue()
    .defer(d3.csv, "data/performance1.csv")
    .await(makeGraphs);
    
        function makeGraphs (error, performanceData) {
        var ndx = crossfilter(performanceData);
        
        show_jf_motions (ndx);


        dc.renderAll();
    } 
    
    function show_jf_motions (ndx) {
    var dim = ndx.dimension(dc.pluck('Category')); 
    var group = dim.group().reduceSum(dc.pluck("John Joe Fennelly"));
        
    dc.barChart("#jf-graph1") 
        .width(430)
        .height(300)
        .margins({top: 10, right: 10, bottom: 30, left: 30})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Motions")
        .yAxis().ticks(10);
    } 

    

    
