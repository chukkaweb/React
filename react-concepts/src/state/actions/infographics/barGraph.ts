import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Infographics } from "../../../utils/dataVariables";
import { getEntityObj } from "./entityObjConstruct";


export const renderBarGraph = (id:string, widget:string, metric:string) => {
    const renderGraph = (id:string, widget:string, metric:string) => {
        let chart :any=  setGraphConfig(Infographics.graphModal.chartType);
        chart.data = setGraphJSONFormat();
        renderGraphSeries(chart);
    }

    const setGraphConfig = (chartType:string) => {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create(id, am4charts.XYChart);

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.fontSize = 13;
        categoryAxis.renderer.labels.template.fill = am4core.color("#757575");
        categoryAxis.renderer.minGridDistance = 70;
        categoryAxis.renderer.labels.template.maxWidth = 100;
        categoryAxis.renderer.labels.template.wrap = true;
    
        if(chartType === 'bar2'){
          categoryAxis.renderer.cellStartLocation = 0.3
          categoryAxis.renderer.cellEndLocation = 1.0
          categoryAxis.renderer.grid.template.location = 0;
        }
    
        let valueAxis:any = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.title.text = "No of posts";
    
    
        // valueAxis.min = 0;
        valueAxis.title.fontSize = 14;
        valueAxis.title.fontColour = '#027D00';
        valueAxis.renderer.labels.template.fontSize = 13;
        valueAxis.renderer.labels.template.fill = am4core.color("#757575");
    
        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.fill = am4core.color("#454545");
    
        let marker:any = chart.legend.markers.template.children.getIndex(0);
        marker.width = 20;
        marker.height = 20;
        chart.legend.labels.template.fontSize = 14;
    
        chart.responsive.enabled = true;
        chart.exporting.menu = new am4core.ExportMenu();

        return chart;
    }

    const setGraphJSONFormat = () => {
        let count = 0, chartData:any = [], data:any = [];

        data = Infographics.graphModalData;

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

    const createBarSeries = (field:string, name:string, chart:any, color:string) => {

        // Set up series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "name";
        series.sequencedInterpolation = true;
    
        // Make it stacked
    
        if(Infographics.graphModal.chartType === 'bar2'){
          series.stacked = false;
        } else {
          series.stacked = true;
        }
    
        // Configure columns
        series.columns.template.width = am4core.percent(60);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
        series.stroke = am4core.color(color);
        series.fill = am4core.color(color);
    
        // Add label
    
        if(Infographics.graphModal.coverageType !== 'reach'){
          let labelBullet = series.bullets.push(new am4charts.LabelBullet());
          labelBullet.label.text = "{valueY}";
          labelBullet.label.fill = am4core.color('#ffffff');
          labelBullet.locationY = 0.5;
          labelBullet.label.hideOversized = true;
        }
    
    
        return series;
    }

    const renderGraphSeries = (chart:any) => {
        if(Infographics.graphModal.coverageType === 'sentiment'){
            createBarSeries('positive', 'Positive', chart, '#027D00');
            createBarSeries('negative', 'Negative', chart, '#CC3434');
      
          } else if(widget === 'social_trends'){
            createBarSeries('total', 'Total', chart, '#0693e3');
      
          } else {
            createBarSeries('total', 'Total', chart, '#0693e3');
            createBarSeries('positive', 'Positive', chart, '#027D00');
            createBarSeries('negative', 'Negative', chart, '#CC3434');
          }
    }

    return renderGraph(id, widget, metric);
}