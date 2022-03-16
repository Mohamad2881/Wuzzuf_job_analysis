$(document).ready( function () {
    var t = $('#jobsTable').DataTable({
        "scrollY":        "500px",
        "scrollCollapse": true,
        "order": [ 2, 'desc' ]
    });

    t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
} );


//
//
// var table;
//
// $(document).ready(function() {
//     table = $("#jobsTable").DataTable({
//         "scrollY":        "500px",
//         "scrollCollapse": true,
//         "order": [ 2, 'desc' ]
//     });
//
//
//     var myChart = Highcharts.chart("container", {
//         chart: {
//             type: "pie"
//         },
//         title: {
//             text: "Staff Count Per Office"
//         },
//         series: [{
//             data: chartData(table)
//         }]
//     });
//     // Set the data for the first series to be the map returned from the chartData function
//     table.on("draw page.dt", function() {
//         myChart.series[0].setData(chartData(table));
//     });
//     //     t.on( 'order.dt search.dt', function () {
// //         t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
// //             cell.innerHTML = i+1;
// //         } );
// //     } ).draw();
// });
//
// function chartData(table) {
//     var counts = {};
//
//     // Count the number of entries for each office
//     table
//         .column(2, { page: 'current' })
//         .data()
//         .each(function (val) {
//             if (counts[val]) {
//                 counts[val] += 1;
//             } else {
//                 counts[val] = 1;
//             }
//         });
//
//     // And map it to the format highcharts uses
//     return $.map(counts, function (val, key) {
//         return {
//             name: key,
//             y: val,
//         };
//     });
// }