import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Infographics } from "../../../utils/dataVariables";
import { getEntityObj } from "./entityObjConstruct";
import constants from "../../../utils/constants";


export const renderPieGraph = (id:string, widget:string, metric:string) => {
    const renderGraph = (id:string, widget:string, metric:string) => {
        let chart:any=  setGraphConfig();
        chart.data = setGraphJSONFormat();
    }

    const setGraphConfig = () => {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create(id, am4charts.PieChart);

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "total";
        pieSeries.dataFields.category = "name";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template.propertyFields.fill = "color";

        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        chart.hiddenState.properties.radius = am4core.percent(0);

        chart.responsive.enabled = true;
        chart.exporting.menu = new am4core.ExportMenu();
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

                if((widget === 'state_parties' || widget === 'profile_parties') && item?.partyInformation && item.partyInformation?.color){
                    entityObj.color = am4core.color(item.partyInformation.color);
                }

                if(widget === 'party_socialmedia'){
                    constants.socialMediaColors.forEach((color:any) => {
                      if(color.id === entityObj.id) entityObj.color = color.code;
                    });
                }

                chartData.push(entityObj);
                count += 1;
            });
        }

        return chartData;
    }


    return renderGraph(id, widget, metric);
}