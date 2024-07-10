<template>
  <div style="width:100%;height:100%;margin:0;">
    <!-- 这个id接收父页传进来的id，也就是动态接收-->
    <div :id="id" style="width:100%;height:100%"></div>
  </div>

</template>

<script>
  //使用echarts局部引入的方式（我这边的版本是5版本）
  import * as echarts from 'echarts';
  export default {
    props:["id","datas"],//接收父页传入值
    data() {
      return {

      };
    },
    computed:{

    },
    watch:{

    },
    mounted() {
      _this= this;
      this.getChartData();
    },
    methods: {
      getChartData() {
        console.log("echar内部");
        console.log("父页传入的datas",this.datas);
        this.drawChart();
      },
      drawChart() {
        //初始化echarts实例
        let myChart = echarts.init(document.getElementById(this.id));
        // 清空图表，重新渲染图表
        myChart.clear();

        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label:{
                color: '#ffffff'
              },
              crossStyle: {
                color: '#ffffff'
              }
            }
          },
          legend: {
            data: ['短信推送量', '站内消息量'],
            textStyle:{
              color: '#ffffff'//字体颜色
            },
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '短信推送量(条)',
              nameTextStyle:{
                color:"#ffffff",
              },
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ',
                textStyle: {
                  color: '#ffffff'
                }
              },
              splitLine :{    //网格线
                show:true, //隐藏或显示
                lineStyle:{
                  type:'dotted'    //设置网格线类型 dotted：虚线   solid:实线
                },
              }
            },
            {
              type: 'value',
              name: '站内消息量(条)',
              nameTextStyle:{
                color:"#ffffff",
              },
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} ',
                textStyle: {
                  color: '#ffffff'
                }
              },
              splitLine :{    //网格线
                show:true, //隐藏或显示
                lineStyle:{
                  type:'dotted'    //设置网格线类型 dotted：虚线   solid:实线
                },
              }
            }
          ],
          series: [
            {
              name: '短信推送量',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 条';
                }
              },
              data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
              ]
            },
            {
              name: '站内消息量',
              type: 'line',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 条';
                }
              },
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        };

        // 调用setOption
        myChart.setOption(option)

        //建议加上以下这一行代码
        //不加的话,当浏览器窗口缩小的时候,样式会出现问题
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      }
    }
  };
</script>
