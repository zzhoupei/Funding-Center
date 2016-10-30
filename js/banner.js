 //图片索引
 var PicIndex=0;

 //切换时间 3000ms  = 3秒
 var timeInterval=3000;   

 //图片存放的相对路径数组
 var arr=new Array();
 arr[0]="images/banner0.png";   
 arr[1]="images/banner1.png";
 arr[2]="images/banner2.png";
 arr[3]="images/banner3.png";

 
 setInterval(changeImg,timeInterval);
 function changeImg(){
    var obj=document.getElementById("obj");
    if (PicIndex==arr.length-1) 
    {
        PicIndex=0;
        
    }
    else
    {   
         PicIndex+=1;
        
    }
    obj.src=arr[PicIndex];
}

/*function Intercept(Letter,max){
    var MaxWidth=max;
    if($(Ltter).text().length>MaxWidth){
         //substring(star,end)用于截取介于两个下标之间的字符
         //substr(start,length)length表示截取长度，如果为负，则从字符串尾部计算
         $(Ltter).text($(Ltter).text().substr(0,MaxWidth));
         $(Ltter).html($(Ltter).html()+'…');
        }
    }
    //设置需要截取的元素和最大字符数
    $("ul.news>li>a").each(function(){Intercept(this,10);
});

*/