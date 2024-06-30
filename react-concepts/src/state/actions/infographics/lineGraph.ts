import { Infographics } from "../../../utils/dataVariables";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import _ from 'underscore';


export const renderLineGraph = (id:string, widget:string, metric:string) => {

    let entityCoverage:any = [];
    
    const renderGraph = (id:string, widget:string, metric:string) => {
        let chart =  setGraphConfig(id, metric, widget);
        chart.data = setGraphJSONFormat(widget, metric);

        if(widget === 'party_interval_coverage') renderSingleEntitySeries(chart, metric, widget);
        if(widget === 'oppositionparties_interval_coverage' || widget === 'oppositionleaders_interval_coverage') renderMultipleEntitySeries(chart, metric, widget);
    }


    const setGraphConfig = (id:string, metric:string, widget:string) => {
        am4core.useTheme(am4themes_animated);
        const chart = am4core.create(id, am4charts.XYChart);

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0.5;
        dateAxis.renderer.minGridDistance = 0;
        dateAxis.renderer.grid.template.strokeWidth = 0;
        dateAxis.renderer.labels.template.fontSize = 13;
        dateAxis.renderer.labels.template.fill = am4core.color("#757575");

        dateAxis.baseInterval = {
            "timeUnit": "day","count": 1
        }

        let valueAxis:any = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.fontSize = 14;
        valueAxis.title.fontColour = '#454545';
        valueAxis.renderer.labels.template.fontSize = 13;
        valueAxis.renderer.labels.template.fill = am4core.color("#757575");

        if(metric === 'coverage') valueAxis.title.text = "No of posts";
        if(metric === 'reach') valueAxis.title.text = "No of views";
        if(metric === 'rank') valueAxis.title.text = "Rank";
        if(metric === 'sources') valueAxis.title.text = "No of sources";
        
        if(metric === 'rank') { valueAxis.renderer.inversed = true; }

        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.fontSize = 14;
        chart.legend.labels.template.truncate = true;
        chart.legend.labels.template.fill = am4core.color("#454545");

        let marker:any = chart.legend.markers.template.children.getIndex(0);
        marker.width = 20;
        marker.height = 20;

        chart.responsive.enabled = true;
        chart.focusable = true;

        return chart;
    }

    const setGraphJSONFormat = (widget:string, metric:string) => {
        let count = 0, chartData:any = [], data:any;
  
        if(widget === 'party_interval_coverage') data = Infographics.partyIntervalCoverage;
        if(widget === 'oppositionparties_interval_coverage') data = Infographics.oppoPartiesIntervalCoverage;
        if(widget === 'oppositionleaders_interval_coverage') data = Infographics.oppoLeadersIntervalCoverage;

        if(widget === 'party_interval_coverage') chartData = setSingleEntityJSON(widget, metric, data);
        if(widget === 'oppositionparties_interval_coverage' || widget === 'oppositionleaders_interval_coverage') chartData = setMultipleEntityJSON(widget, metric, data);

        return  chartData;
    }

    const setSingleEntityJSON = (widget:string, metric:string, data:any) => {
        let count = 0, chartData:any = [];

        if(data && data.length > 0){
            data.forEach((item:any) => {
                if(count > 10) return;
                const entityObj = getEntityObj(metric, widget, item);;
                chartData.push(entityObj);
                count += 1;
            });
        }

        return chartData;
    }

    const setMultipleEntityJSON = (widget:string, metric:string, data:any) => {
        let chartData:any = [], dataPoints:any = [], entityIds:any = [];

        entityCoverage = data;

        entityCoverage.forEach((entity:any) => {
            entityIds.push(entity.entityId);
            entity.dataPoints.forEach((item:any) => {
                item.leader = entity?.leaderInformation?.name;
                dataPoints.push(item);
            });
        });
      
        dataPoints = _.groupBy(dataPoints, 'intervalName');

        Object.entries(dataPoints).forEach((entry:any) => {
        let [key, value] = entry;

        if(entry && entry.length > 0){
            let list:any = {};

            list.date = entry[0];

            entityIds.forEach((id:any, index:any) => {
            if(metric !== 'rank'){
                if(metric === 'coverage'){
                let trendsType = '';
                trendsType = 'totalCoverage';
                list['entity'+index] = Math.round(entry[1][index].stats[trendsType]);

                } else {
                    list['entity'+index] = entry[1][index].stats.viewsCount;
                }

            } else {
                if(entry[1][index].value === 99999999) entry[1][index].value  = 0;
                list['entity'+index] = entry[1][index].value;
            }
            });

            chartData.push(list);
        }

        });

        return chartData;

        
    }
    

    const renderSingleEntitySeries = (chart:any, metric:string, widget:string) => {
        if(metric === 'rank'){
            createLineSeries('rank', 'Rank', chart, '#0693e3');

        } else if(widget === 'issues_interval_coverage'){
            createLineSeries('total', 'Total', chart, '#0693e3');

        } else {
            createLineSeries('total', 'Total', chart, '#0693e3');
            createLineSeries('positive', 'Positive', chart, '#027D00');
            createLineSeries('negative', 'Negative', chart, '#CC3434');
        }
    }

    const renderMultipleEntitySeries = (chart:any, metric:string, widget:string) => {
        const colors = ['#834DC8','#027D00','#F69E6D','#AD6800'];

        entityCoverage.forEach((entity:any, index:number) => {
            if(colors.length > index){
                entity.color = colors[index];
            } else {
                entity.color = '#0693e3';
            }

            if(widget.indexOf('parties') !== -1){
                if(entity['partyInformation'] && entity['partyInformation']['color']){
                    entity.color = entity['partyInformation']['color'];
                }
                createLineSeries("entity"+index, entity?.partyInformation?.name, chart, entity.color);
            } else {
                if(entity['leaderInformation']['partyInformation'] && entity['leaderInformation']['partyInformation']['color']){
                    entity.color = entity['leaderInformation']['partyInformation']['color'];
                }
                createLineSeries("entity"+index, entity?.leaderInformation?.name, chart, entity.color);
            }
          });
    }

    const createLineSeries = (metric:string, name:string, chart:any, color:string) => {
        let series:any = chart.series.push(new am4charts.LineSeries());

        series.dataFields.valueY = metric;
        series.dataFields.dateX = "date";
        series.name = name;
        series.tooltipText = "[font-size: 14px]{name}: {dateX}: [b][font-size: 14px]{valueY}[/]";
        series.strokeWidth = 2;
        series.stroke = am4core.color(color);
        series.fill = am4core.color(color);
        series.cursor = "pointer";

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.strokeWidth = 2;
        bullet.circle.stroke = am4core.color("#fff");
        bullet.circle.radius = 4;
        bullet.width = 2;
        bullet.height = 2;

        return series;
    }

    
    return renderGraph(id, widget, metric);


}