$(document).ready(function(){
//限制字符个数
//“.zxx_text_overflow”
 $("ul.news>li>a").each(function(){
   var maxwidth=20;
   if($(this).text().length>maxwidth){
   $(this).text($(this).text().substring(0,maxwidth));
   $(this).html($(this).html()+'...');
   }
 });
});
//substring(star,end)用于截取介于两个下标之间的字符
 //substr(start,length)length表示截取长度，如果为负，则从字符串尾部计算
/*
function clipWord(myLtter,max){
		var maxWidth=max;
		if($(myLtter).text().length>maxWidth){
			$(myLtter).text($(myLtter).text().substring(0,maxWidth));
			$(myLtter).html($(myLtter).html()+'…');
		}
	}
	
	$("ul.news>li>a").each(function(){clipWord(this,20);});
*/