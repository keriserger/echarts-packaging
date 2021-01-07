<template>
    <div class="home">
        <div ref="data" style="width: 100%; height: 350px" id="main"></div>
    </div>
</template>

<script>
var echarts = require("echarts");
export default {
    name: "Home",
    data() {
        return {};
    },
    mounted() {
        var myChart = echarts.init(document.getElementById("main"));
        myChart.setOption({
            tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    color : [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple' ],
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            
            label: {
              normal:{
                    show: true,
                    position: 'center',
                    
                    formatter: [
                        'haha'
                    ].join('\n'),
                    rich: {
                        a: {
                            color:'#fff',
                            fontSize: 18,
                            lineHeight: 30
                        },
                        b: {
                            color:'yellow',
                            fontSize: 20,
                            foneWeight:'bold',
                            textShadowBlur: 20,
                            textShadowColor: 'yellow'
                        },
                        
                    }
                }  
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 335, name: '直接访问',color:"#cccccc"},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        },
        {
            name: '边框1',
            type: 'pie',
            hoverAnimation:false,
            radius:['75%', '90%'],
        
            labelLine:{
              normal:{
                  show: false
              }  
            },
            itemStyle:{
                normal:{
                    borderWidth:1,
                    borderColor:"#ffffff" ,
                    opacity:0
                }
            },
            data: [
                {
                    value: 100,
                    tooltip:{
                        show:false
                    }
                }
            ]
        },
    ]
        });
        // 使用刚指定的配置项和数据显示图表。
    },
};
</script>
