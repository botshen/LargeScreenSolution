import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';

export const Chart6 = () => {
    const divRef = useRef(null);
    const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption(createEchartsOptions({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [

                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '甘肃省', value: 1},
                    ],
                    label: {show: true, color: 'yellow', fontSize: '12px'},
                    itemStyle: {
                        areaColor: '#085165',
                        color: colors['甘肃省'],
                        borderColor: '#e6db74',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#e6db74',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '四川省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['四川省'],
                        borderColor: 'yellow',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '青海省', value: 100},
                    ],
                    itemStyle: {
                        areaColor: '#010D3D',
                        color: colors['青海省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },

            ]
        }));
    }, []);

    return (
        <div className="bordered 籍贯">
            <h2>全市犯罪人员籍贯分布地</h2>
            <div className="wrapper">
                <div ref={divRef} className="chart"/>
                <div className="legend bordered">
                    <span className="icon" style={{background: colors['甘肃省']}}/>主城区
                    <span className="icon" style={{background: colors['四川省']}}/>边城区
                    <span className="icon" style={{background: colors['青海省']}}/>城乡区
                </div>
                <div className="notes">此地图仅显示了北京的部分区域</div>
            </div>
        </div>
    );
};