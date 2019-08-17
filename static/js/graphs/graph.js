queue()
    .defer(d3.csv, "data/performance.csv")
    .await(makeGraphs);
    
    
    function makeGraphs (error, performanceData) {
        var ndx = crossfilter(performanceData);
        
        show_parties(ndx); 
        show_councillor_attendance(ndx);
        show_motions_by_councillors(ndx);
        show_successful_motions(ndx);
        show_expenses(ndx);
        dc.renderAll();
    }   
    
    
    function show_parties(ndx) {
        var dim = ndx.dimension(dc.pluck('Party')); 
        var group = dim.group();        
            
        dc.pieChart('#index-pie1')
            .height(300)
            .radius(150)
            .transitionDuration(500)
            .dimension(dim)
            .group(group);
    }     
    
    function show_councillor_attendance(ndx) {
        var dim = ndx.dimension(dc.pluck('Initials')); 
        var group = dim.group().reduceSum(dc.pluck("Attendance"));
        
        dc.barChart("#index-bar1") 
            .width(430)
            .height(300)
            .margins({top: 10, right: 10, bottom: 30, left: 30})
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Attendance")
            .yAxis().ticks(20);
    }
    
    function show_motions_by_councillors(ndx) {
        var dim = ndx.dimension(dc.pluck('Initials')); 
        var group = dim.group().reduceSum(dc.pluck("Motions"));
        
        dc.barChart("#index-bar2") 
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
    
     function show_successful_motions(ndx) {
        var dim = ndx.dimension(dc.pluck('Initials')); 
        var group = dim.group().reduceSum(dc.pluck("Successful"));
        
        dc.barChart("#index-bar3") 
            .width(430)
            .height(300)
            .margins({top: 10, right: 10, bottom: 30, left: 30})
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Successfull Motions")
            .yAxis().ticks(10);
    }
    
    function show_expenses(ndx) {
        var dim = ndx.dimension(dc.pluck('Initials')); 
        var group = dim.group().reduceSum(dc.pluck("Expenses"));
        
        dc.barChart("#index-bar4") 
            .width(430)
            .height(300)
            .margins({top: 10, right: 10, bottom: 30, left: 40})
            .dimension(dim)
            .group(group)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Expenses")
            .yAxis().ticks(10);
    } 
    
