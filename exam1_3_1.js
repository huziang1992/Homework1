$(document).ready(
	function () {

d3.json("exam1.json",function(dataset){ 

		var senior=[];
		var mark=[];

		for(item in dataset[3])
		{
			if(item!="Year")
			mark.push(""+item+"");
		}
		for(var i=0;i<mark.length;i++)
		{
			senior.push( dataset[3][""+mark[i]+""] );
		}
		//console.log(senior);

		var wsvg=800;
		var hsvg=550;
		var padding=80;
		var w=500;
		var h=400;
					
		svg=d3.select('.exam1_3_1').append("svg");
		svg.attr("width",wsvg).attr("height",hsvg).attr("id","exam1_3_1");

		var xscale=d3.scale.ordinal()
					.domain(d3.range(senior.length))
					.rangeRoundBands([padding,w],0.3);

		var yscale=d3.scale.linear()
					.domain([0,d3.max(senior,function(d){return d;})])
					.range([0,h]);


		var yscale1=d3.scale.linear()
					.domain([0,d3.max(senior,function(d){return d;})])
					.range([h,0]);


		svg.selectAll("rect")
			.data(senior)
			.enter()
			.append("rect")
			.attr("x",function(d,i){
				return(xscale(i));
				})
			.attr("y",function(d){
				return h-yscale(d)+padding;
			})
			.attr("width",xscale.rangeBand())
			.attr("height",function(d){
				return yscale(d);
			});

		svg.selectAll("text")
	       .data(senior)
	       .enter()
	       .append("text")
	       .text(function(d){return d;})
	       .attr("x", function(d, i) {return xscale(i)+25;})
	       .attr("y", function(d){return h-yscale(d)+padding-10; })
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "11px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle");	

		
	     svg.selectAll(".mark")
	       .data(mark)
	       .enter()
	       .append("text")
	       .text(function(d){return d;})
	       .attr("x", function(d, i) {return xscale(i)+25;})
	       .attr("y", h+padding+15)
	       .attr("class","mark")
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle");

	     	svg.append("text")
	     	.text("Student Number")
	     	.attr("x",50)
	     	.attr("y",70)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle");

	       	svg.append("text")
	     	.text("University")
	     	.attr("x",510)
	     	.attr("y",480)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "middle");


	       svg.append("rect")
	     	.attr("x",570)
	     	.attr("y",250)
	     	.attr("height",20)
	     	.attr("width",20)
	     	.attr("fill","black");

	       svg.append("text")
	     	.text("The number of senior IE students")
	     	.attr("x",590)
	     	.attr("y",265)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "13px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       svg.append("text")
	     	.text("The number of senior IE students in the five universities")
	     	.attr("x",10)
	     	.attr("y",25)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "30px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       svg.append("text")
	     	.text("---by Ziang Hu")
	     	.attr("x",600)
	     	.attr("y",70)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "20px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");

	       svg.append("text")
	     	.text("Data sourse: http://hivelab.org/static/exam1.json")
	     	.attr("x",100)
	     	.attr("y",520)
	       .attr("font-family", "sans-serif")
	       .attr("font-size", "15px")
	       .attr("fill", "black")
	       .attr("text-anchor", "left");


	    var xAxis = d3.svg.axis();
				xAxis.scale(xscale).orient("bottom").ticks(5);
				svg.append("g").attr("class","axis").attr("id","xaxis").attr("id","xaxis").call(xAxis).attr("transform", "translate(0," + (h+padding )+ ")");

		var yAxis = d3.svg.axis();
				yAxis.scale(yscale1).orient("left").ticks(5);
				svg.append("g").attr("class","axis").attr("id","yaxis").call(yAxis).attr("transform", "translate(" + (padding )+ "," + (padding )+ ")");

	}
	)












});