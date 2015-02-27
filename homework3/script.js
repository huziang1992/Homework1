$(document).ready(function(){

	var url="students.json";


     $.getJSON(url, function(hu){

     	var c = $(".homework2 tbody");

     	for(var i=0;i<hu.length;i++)
     		{	
     			c.append("<tr>");
				c.append("<td>"+hu[i].Name+"</td>");
				if(hu[i].GPA>=3.5) {c.append("<td>"+hu[i].GPA+"</td>");} else {c.append("<td class='mark'>"+hu[i].GPA+"</td>");}
				if(hu[i].GRE_V>=145){c.append("<td>"+hu[i].GRE_V+"</td>");} else {c.append("<td class='mark'>"+hu[i].GRE_V+"</td>");}
				if(hu[i].GRE_Q>=160){c.append("<td>"+hu[i].GRE_Q+"</td>");} else {c.append("<td class='mark'>"+hu[i].GRE_Q+"</td>");}
				if(hu[i].Essay>=2){c.append("<td>"+hu[i].Essay+"</td>");} else {c.append("<td class='mark'>"+hu[i].Essay+"</td>");}
				if(hu[i].Recom>=2){c.append("<td>"+hu[i].Recom+"</td>");} else {c.append("<td class='mark'>"+hu[i].Recom+"</td>");}
				c.append("</tr>");
			}

     });

     $("#accordion").accordion();
     	
  

    
    });