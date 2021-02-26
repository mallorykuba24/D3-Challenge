var width = parseFloat(d3.select('#scatter').style('width'));
var height = .66*width;

var svg = d3
    .select('#scatter')
    .append('svg')
    .style('width',width)
    .style('height',height)
    .style('border','2px solid black')
    .style('border-radius', '12px');

var xText = svg
    .append('g')
    .attr('transform',`translate(${width/2}, ${.98*height})`)

var yText = svg
    .append('g')
    .attr('transform',`translate(${.02*width}, ${height/2})rotate(-90)`)

var chart = svg
    .append('g')
    .append('circle')
    .attr('r',20)
    .attr('transform',`translate(${.15*width}, ${.78*height})`)

var xScaleLoc = chart.append('g').transition().duration(2000)
var yScaleLoc = chart.append('g').transition().duration(2000)

xText
    .append('text')
    .text('Household Income (Median)')
    .attr('class','aText x inactive')
    .attr('data-id', 'income')

xText
    .append('text')
    .attr('y',-20)
    .text('Age (Median)')
    .attr('class','aText x inactive')
    .attr('data-id', 'age')

xText
    .append('text')
    .attr('y',-40)
    .text('In Poverty (%)')
    .attr('class','aText x active')
    .attr('data-id', 'income')

yText
    .append('text')
    .text('Obese (%)')
    .attr('class','aText y active')
    .attr('data-id', 'obesity')

yText
    .append('text')
    .attr('y',20)
    .text('Smokers (%)')
    .attr('class','aText y inactive')
    .attr('data-id', 'smokes')

yText
    .append('text')
    .attr('y',40)
    .text('Lacks Healthcare (%)')
    .attr('class','aText y inactive')
    .attr('data-id', 'income')



