import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import { Infographics } from "../../../utils/dataVariables";
import { getEntityObj } from "./entityObjConstruct";
import constants from "../../../utils/constants";


export const renderWordCloudGraph = (id:string, widget:string, metric:string) => {
    const renderGraph = (id:string, widget:string, metric:string) => {
        let chart:any=  setGraphConfig();
        chart.data = setGraphJSONFormat();
    }

    const setGraphConfig = () => {
        let chart = am4core.create(id, am4plugins_wordCloud.WordCloud);
        let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

        series.randomness = 0.2;
        series.dataFields.word = "name";
        series.dataFields.value = "weight";
        series.dataFields.id = "id";
        series.colors = new am4core.ColorSet();
        series.colors.passOptions = {};
        series.labels.template.propertyFields.fill = "color";
        chart.exporting.menu = new am4core.ExportMenu();

        return chart;
    }

    const setGraphJSONFormat = () => {
        let count = 0, chartData:any = [], data:any = [];

        data = Infographics.graphModalData;

        if(data && data.length > 0){
            data.forEach((item:any) => {
                if(count > 10) return;
                const entityObj = getEntityObj(metric, widget, item);

                entityObj.id = item.entityId;
                entityObj.weight = entityObj.total;

                if(widget === 'party_socialmedia'){
                    constants.socialMediaColors.forEach((color:any) => {
                      if(color.id === entityObj.id) entityObj.color = color.code;
                    });
                }

                entityObj.color = '#000000';

                entityObj.color = am4core.color(entityObj.color);

                chartData.push(entityObj);
                count += 1;
            });
        }

        return chartData;
    }


    return renderGraph(id, widget, metric);
}