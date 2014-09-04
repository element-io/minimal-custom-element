
var createCustomElement = require( './../lib' );

// Create a new custom parent container...

var container = createCustomElement( 'my-container' );
container.attr( 'class', 'container' );

// Build other components...

var fig = createCustomElement( 'my-figure' );
fig.attr( 'class', 'figure' );

var chart = createCustomElement( 'my-chart' );
chart.attr( 'class', 'chart' );

// Create the document structure...

container.append( fig );
fig.append( chart );

// Serialize to string...

console.log( container.toString() );
// Returns: '<my-container class="container"><my-figure class="figure"><my-chart class="chart"></my-chart></my-figure></my-container>'