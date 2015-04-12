	

					    
		var color = d3.scale.category20();

		var width=900;
		var height=500;

		var nested_data=[];
		var treemap=[];
		var nodes=[];
		var nested_data1=[];
		var state;
		var region;
	d3.csv("HW4.csv",function(dataset){ 

		 nested_data = d3.nest()
		 		.key(function(){return "root";})
				.key(function(d) { return d.region; })
				.key(function(d) { return d.state; })
				.entries(dataset);

		//console.log(nested_data);

		treemap = d3.layout.treemap()
			    .size([width, height])
			    .sticky(true)
			    .children(function(d) {return d.values})
			    .value(function(d) { return d.profit; })
			    .nodes(nested_data[0]);

		//console.log(treemap);


		var title=d3.select(".Homework4")
					.append("div")
					.text("Treemap Visualization for Profit of Coffee in a specific day sorted by Region and State")
					.style("margin-left","12%")
					.style("margin-top","0px")
					.style("text-align","center")
					.style("margin-bottom","0px")
					.style("position","relative")
					.style("font-size","35px")
					.style("width","900px")
					.style("height","100px");

		var title2=d3.select(".Homework4")
					.append("div")
					.text("Data source: https://hivelab.org/static/coffee.csv")
					.style("margin-left","50%")
					.style("margin-top","0px")
					.style("margin-bottom","0px")
					.style("position","relative")
					.style("font-size","20px");

		var title3=d3.select(".Homework4")
					.append("div")
					.text("(Click to see more details)")
					.style("margin-left","12%")
					.style("margin-top","0px")
					.style("margin-bottom","0px")
					.style("position","relative")
					.style("font-size","20px");

		var div=d3.select('.Homework4')
					.append("div")
					.style("width",width+"px")
					.style("height",20+"px")
					.style("margin","auto")
					.style("margin-top","10px")
					.style("opacity", .9)
					.style("position","relative")
					.style("background","orange")
					.text("Click here to go back to full view")
					.style("cursor","pointer")
					.style("font-size","15px")
					.style("color","black")
					.style("text-align","center")
					.on("click",function(){

									node=div.selectAll(".node").remove();

											treemap = d3.layout.treemap()
												    .size([width, height])
												    .sticky(true)
												    .children(function(d) {return d.values})
												    .value(function(d) { return d.profit; })
												    .nodes(nested_data[0]);

									node = div.selectAll(".node")
								      .data(treemap.filter(function(d){ return d.depth===1 || d.depth===2}))
								      .enter()
								      .append("div")
								      .attr("class", "node")
								      .call(position)
								      .style("background", function(d) { 							
								      	if (d.depth==2)
								      		return color(d.parent.key);
								      	else return color(d.key);
								      })
								      .style("opacity",function(d){
								      	if(d.depth==1) return 0.9;
								      	else return 1;
								      })
								      .style("z-index",function(d){
								      	if(d.depth==2) return 1;
								      	else return 2;
								      })
								      .text(function(d){

								      	if(d.depth==1)return d.key;})
								      .style("text-align","center")
								      .style("cursor","pointer")
								      .call(onclick_region)
								      .call(tooltip);


					   });


		var div=d3.select('.Homework4')
					.append("div")
					.style("width",width+"px")
					.style("height",height+"px")
					.style("margin","auto")
					.style("margin-top","5px")
					.style("opacity", .9)
					.style("position","relative")
					.attr("class","treemap");


		  var node = div.selectAll(".node")
				      .data(treemap.filter(function(d){ return d.depth===1 || d.depth===2}))
				      .enter()
				      .append("div")
				      .attr("class", "node")
				      .call(position)
				      .style("background", function(d) { 							
				      	if (d.depth==2)
				      		return color(d.parent.key);
				      	else return color(d.key);
				      })
				      .style("opacity",function(d){
				      	if(d.depth==1) return 0.9;
				      	else return 1;
				      })
				      .style("z-index",function(d){
				      	if(d.depth==2) return 1;
				      	else return 2;
				      })
				      .text(function(d){

				      	if(d.depth==1)return d.key;})
				      .style("text-align","center")
				      .style("cursor","pointer")
				      .call(tooltip)
					  .call(onclick_region);

				function position() {
			  		this.style("left", function(d) { return d.x + "px"; })
			      		.style("top", function(d) { return d.y + "px"; })
			      		.style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
			     		.style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
									}


				function onclick_region(){
						this.on("click",function(d){

					   		 region=d.key;
					   		//	console.log(region);

					   			nested_data1 = d3.nest()
							 		.key(function(){return "root";})
									.key(function(d) { return d.state; })
									.entries(dataset.filter(function(a){return a.region==region;}));

								//console.log(nested_data1);

								var	treemap1 = d3.layout.treemap()
												    .size([width, height])
												    .sticky(true)
												    .children(function(d) {return d.values})
												    .value(function(d) { return d.profit; })
												    .nodes(nested_data1[0]);

												   // console.log(treemap1);

									node=div.selectAll(".node").remove();

							
									node = div.selectAll(".node")
								      .data(treemap1.filter(function(d){ return d.depth===1 || d.depth===2}))
								      .enter()
								      .append("div")
								      .attr("class", "node")
								      .call(position)
								      .style("background", function(d) { 							
								      	if (d.depth==2)
								      		return color(d.parent.key);
								      	else return color(d.key);
								      })
								      .style("opacity",function(d){
								      	if(d.depth==1) return 0.9;
								      	else return 1;
								      })
								      .style("z-index",function(d){
								      	if(d.depth==2) return 1;
								      	else return 2;
								      })
								      .text(function(d){

								      	if(d.depth==1)return d.key;})
								      .style("text-align","center")
								      .style("cursor","pointer")
								      .call(tooltip)
								      .call(onclick_state);

					   });

				}

					function onclick_state(){
						this.on("click",function(d){

					   		 state=d.key;
					   		//console.log(state);

					   		var	nested_data2 = d3.nest()
									.key(function(d) { return d.state; })
									.key(function(d) { return d.date; })
									.entries(dataset.filter(function(a){return a.state==state && a.region==region;}));

								//console.log(nested_data2);

								var	treemap1 = d3.layout.treemap()
												    .size([width, height])
												    .sticky(true)
												    .children(function(d) {return d.values})
												    .value(function(d) { return d.profit; })
												    .nodes(nested_data2[0]);

										console.log(treemap1);

									node=div.selectAll(".node").remove();

							
									node = div.selectAll(".node")
								      .data(treemap1.filter(function(d){ return d.depth===1}))
								      .enter()
								      .append("div")
								      .attr("class", "node")
								      .call(position)
								      .style("background", function(d) {  return color(d.key);})
								      .text(function(d){ return d.key;})
								      .style("font-size","15px")
								      .style("text-align","center")
								      .call(tooltip);

					   });

				}




				function tooltip(){
					this.on("mouseover", function(d) {

							var xPosition = d.x+300;
							var yPosition = d.y+350;
							//console.log(this.x);

								d3.select("#tooltip")
							      .style("left", xPosition + "px")
							      .style("top", yPosition + "px")
							      .select("#value")
								  .html(function(){
								  	{return   d.key +"<br>"+ "Profit:" + d.value ;}
									
									})
								d3.select("#tooltip").classed("hidden", false);
								});


					 this.on("mouseout", function() { 
			         			d3.select("#tooltip").classed("hidden", true);
			     			});




				}







		});


