
'use strict';

var li1=$(".nav li").eq(0);
if(li1.hasClass("active")){
	$.ajax({
		url:"../json/dashboard.json",
		type:"post",
		dataType:"json",
		success:function(data){
			// console.log(data);	
			for(var i in data){
				var num=data[i].num;
				var name=data[i].name;
				var date=data[i].date;
				var time=data[i].time;
				var level=data[i].level;
				var state=data[i].state;
				var text=data[i].text;
				var details="<div class='workOrder'><div class='statusBar'><div class='level'>"+level+"</div><div class='state'>"+state+"</div></div><div class='titles'><div class='title'><div class='num'>"+num+"</div><div class='charge'>"+name+"</div><div class='data'>"+date+"</div><div class='time'>"+time+"</div></div></div><p>"+text+"</p><span onclick='show()'>more&gt;</span></div>";
				var list=$(".list");
				list.append(details);
			}
			// var dataLen=data.length;
			// var pageNum=Math.ceil(dataLen/12);
			$(
				function(){
					$.easypage({'contentclass':'workOrder','navigateid':'navigatediv','everycount':12,'navigatecount':5});	
				}
			)
		}
	})
}

$(".nav").on("click","li",function(){
	$(".nav li").removeClass("active");
	$(this).addClass("active");
})

//兼容IE9以下placeholder
 placeholder($(".search"),"gray");
  function placeholder(nodes,pcolor) {
      if(nodes.length){
          for(var i=0;i<nodes.length;i++){
              var self = nodes[i];
              var  placeholder = self.getAttribute('placeholder') || '';     
              self.onfocus = function(){
                  if(self.value == placeholder){
                     self.value = '';
                     self.style.color = "";
                  }               
              }
              self.onblur = function(){
                  if(self.value == ''){
                      self.value = placeholder;
                      self.style.color = pcolor;
                  }              
              }                                       
              self.value = placeholder;  
              self.style.color = pcolor;              
          }
      }
    } 


function show(){
	console.log(111);
}

$(".new").on("click",function(){
	$(".layer").css({"display":"block"});
	$(".ticket").css({"display":"block"});
})
$(".upload").on("click",function(){
	$(".layer").css({"display":"none"});
	$(".ticket").css({"display":"none"});
})