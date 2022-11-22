import React, { Component } from 'react'
import * as echarts from 'echarts';



import "./css/pv.css"
import { reqPv } from '../../api';

export default class Pic extends Component {

  componentDidMount() {
    var myChart = echarts.init(document.getElementById('main'));
    reqPv().then(response => {
      console.log(response);
      console.log(response.data)
      console.log(typeof response.data)
      // 绘制图表
      var aList_all = response.data;
      let aCount = [];
      let aDate = [];

      for (var i = 0; i < aList_all.length; i++) {
        aCount.push(aList_all[i].number);
        aDate.push(aList_all[i].date);
      }

      var chartopt = {
        title: {
          text: 'Page View / 页面浏览量',
          left: 'center',
          top: '10'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['用户浏览量'],
          top: '40'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            name: '日',
            type: 'category',
            boundaryGap: false,
            data: aDate
          }
        ],
        yAxis: [
          {
            name: '用户浏览次数',
            type: 'value'
          }
        ],
        series: [
          {
            name: '用户浏览次数',
            type: 'line',
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: 'default' }, color: '#f80' }, lineStyle: { color: '#f80' } },
            data: aCount
          }],
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(255,136,0,0.39)'
            }, {
              offset: .34,
              color: 'rgba(255,180,0,0.25)'
            }, {
              offset: 1,
              color: 'rgba(255,222,0,0.00)'
            }])

          }
        },
        grid: {
          show: true,
          x: 50,
          x2: 50,
          y: 80,
          height: 220
        }
      };
      myChart.setOption(chartopt);



    })
  }



  render() {

    return (
      <div>
        <div id="main"></div>
        <div className="col">
          <div className="spannel">

          </div>
        </div>

      </div>
    )
  }

}
