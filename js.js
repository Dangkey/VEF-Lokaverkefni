$.ajax({
  'url': 'http://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {  	
    console.log(response.results);    
var tbl=$("<table/>").attr("id","mytable");
$("#test").append(tbl);
for(var i=0;i<response.results.length;i++)
{	
  
    var div1="<div><img src='"+response.results[i]["imageSource"]+"'><div>";    
    var div2="<div>"+response.results[i]["eventDateName"]+"<div>";
    var div3="<div>"+response.results[i]["eventHallName"]+"<div>";
    var div4="<div>"+response.results[i]["dateOfShow"]+"<div>";
    var div5="<div>"+response.results[i]["name"]+"<div>";
    var div6="<div>"+response.results[i]["userGroupName"]+"<div>";

    
   $(myndir).append(div1);
  
}    
  }
});
var item = document.getElementById("");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{   
   document.getElementById("text").setAttribute("style", "display:block;")
}

function func1()
{  
    document.getElementById("text").setAttribute("style", "display:none;")
}