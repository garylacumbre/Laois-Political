queue()
    .defer(d3.csv, "data/performance2.csv")
    .await(makeGraphs);
    
        function makeGraphs (error, performanceData) {
        var ndx = crossfilter(performanceData);
        
        show_oc_successful_motions (ndx);

        dc.renderAll();
    } 
    
    function show_oc_successful_motions (ndx) {
    var dim = ndx.dimension(dc.pluck('Successful')); 
    var group = dim.group().reduceSum(dc.pluck("Ollie Clooney"));
        
    dc.barChart("#oc-graph2") 
        .width(430)
        .height(300)
        .margins({top: 10, right: 10, bottom: 30, left: 30})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Successful Motions")
        .yAxis().ticks(10);
    }
    
 
    
