//柱形图模块，使用立即执行函数目的为了防止变量污染
(function(){
  //1.实例化对象
  var myChart=echarts.init(document.querySelector(".bar .chart"));
  //2.指定配置选项和数据
  var option = {
    //修改柱子颜色
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
     // grid决定我们的柱状图的大小
     grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [
              "旅游行业",
              "教育培训",
              "游戏行业",
              "医疗行业",
              "电商行业",
              "社交行业",
              "金融行业"
            ],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            },
            // 不显示x轴的线
            axisLine: {
              show: false
            }
        }
    ],
    yAxis: [
      {
        type: 'value',
        // y轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data:  [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle:{
              //修改柱子圆角
              barBorderRadius:5
            }
        }
    ]
};
//3.把配置选项给实例对象
myChart.setOption(option)
 // 让我们的图表适配屏幕宽度
 window.addEventListener("resize", function() {
  //   让我们图表调用resize方法
  myChart.resize();
});
})();

// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [70, 34, 60, 78, 69];
  var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
  var valdata = [702, 350, 610, 793, 664];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();