   // // 需求分析
   //      // 当点击开始的时候开启定时器，每50ms取随机数
   //      // 从数组中取到姓名赋值给span标签
   //      // 点击停止，清除定时器
        var span = document.getElementById("span");
        var go = document.getElementById("go");
        var pause = document.getElementById("pause");
        var timer = null;
        function autoplay() {
            if (timer) {
                clearInterval(timer)
            }
            timer = setInterval(autostep, 50);
        }
        var arr = ["张晨雨", "马明园","李昌谨", "杨帆", "李莹", "杨雪晴", "王雲", "邱争辉",
            "刘若宇", "张明", "禹田赐", "李洋", "史淋匀", "曹文杰", "吴志斌", "赵毅","宋佳瑞",
            "赵朵", "范梦杭", "吉鑫垚","赵慧贞", "何晓霞", "赵薛鑫", "苏林彪", "张士仑", "苏圣杰", "田顺义", "周建堂",
            "高旭辉", "王世豪", "温亚豪", "张梓瑶", "张利芳", "张含笑", "刘文邈", "付飞洋", "冀宇", "周迪", "常朋"
            , "栗晓强", "王思杰", "孙菊繁", "刘琪", "王建杰", "李泽恺", "董闻泰","王昕"];
        var newarr = [];
        function autostep() {
            for (var i = 0; i < 1; i++) {
                var n = Math.floor(Math.random() * 47);
                var newarr = arr[n];
                span.innerHTML = newarr;
                console.log('显示：',span.innerHTML);
                if (newarr == arr[19] || newarr == arr[16] || newarr == arr[44]){
                    span.innerHTML = arr[n + 1]
                }
                console.log('实际=======：',span.innerText)
            }
        }
        go.onclick = function () {
            autoplay();
        };
        pause.onclick = function () {

            clearInterval(timer);
        };


