function GetSide(m, n) {  
        //初始化数组  
        var arr = [];  
        for (var i = 0; i< m; i++) {  
           arr.push([]);  
           for (var j = 0; j < n; j++){  
               arr[i][j]= i * n + j;  
           }  
        }  
        //获取数组最外圈  
        var resultArr =[];  
        var tempX = 0,  
    tempY = 0,  
    direction = "Along",  
    count = 0;  
        while (tempX>= 0 && tempX< n && tempY>= 0 && tempY< m && count< m * n) {  
           count++;  
           resultArr.push([tempY, tempX]);  
           if (direction == "Along") {  
               if (tempX== n - 1)  
                  tempY++;  
               else  
                  tempX++;  
               if (tempX== n - 1 && tempY == m - 1)  
                  direction = "Inverse"  
           }  
           else {  
               if (tempX== 0)  
                  tempY--;  
               else  
                  tempX--;  
               if (tempX== 0 && tempY == 0)  
                  break;  
           }  
        }  
        return resultArr;  
    }  
      
    $(document).ready(function () {  
        var index = 0,         //当前亮区位置  
          prevIndex = 0,        //前一位置  
          Speed = 300,         //初始速度  
          Time,          //定义对象  
          arr = GetSide(3, 3),       //初始化数组  
          EndIndex = 2,         //决定在哪一格变慢
          cycle = 3,          //转动圈数    
          EndCycle = 0,         //计算圈数  
          flag = false,         //结束转动标志   
          quick = 0,         //加速  
          gameTable =document.getElementById("gameTable");  
       $("#gameBtn").click(function () {  
           var stopNum = Math.floor(Math.random() * 6 +1);//点击产生随机数，最后将停在次数上  
           $.cookie("stopNum",stopNum);//存入cookie,使得全局可以调用  
           $(this).hide(); //开始后隐藏开始按钮
           $(this).parent().addClass("waitGame");  
           cycle = 0;  
           flag = false;  
           EndIndex = Math.floor(Math.random() * 7);  
           EndCycle = 1;  
           Time = setInterval(Star, Speed);  
        });  
      
        function Star(num){  
          gameTable.rows[arr[index][0]].cells[arr[index][1]].style.border ="1px solid red";  
          gameTable.rows[arr[index][0]].cells[arr[index][1]].style.background = "rgba(204, 204, 204, 0.51)";
           if (index > 0) {  
               prevIndex= index - 1;  
           }  
           else {  
               prevIndex= arr.length - 1;  
           }  
          gameTable.rows[arr[prevIndex][0]].cells[arr[prevIndex][1]].style.border ="1px solid #360013";  
          gameTable.rows[arr[prevIndex][0]].cells[arr[prevIndex][1]].style.background ="rgba(230, 40, 74, 0)";
           index++;  
           quick++;  
      
           if (index >= arr.length) {  
               index =0;  
              cycle++;  
           }  
      
           //跑马灯变速  
           if (flag == false) {  
              //走五格开始加速  
               if (quick== 5) {  
                  clearInterval(Time);  
                  Speed = 50;  
                  Time = setInterval(Star,Speed);  
               }  
              //跑N圈减速  
               if (cycle== EndCycle + 1 && index ==EndIndex) {  
                  clearInterval(Time);
                  Speed = 300;
                  flag = true; //触发结束  
                  Time = setInterval(Star,Speed);
               }
           }
           
            
           if (flag == true && index == $.cookie("stopNum") -1) {
               quick =0;
              clearInterval(Time);
              $("#gameContent p").removeClass("waitGame");
              $("#gameBtn").show(); //停止后显示开始按钮 
           }  
           
        }  
    })