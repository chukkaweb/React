import { Feed } from "./dataVariables";

export const setActionableInsightsWidgetConfig = ()=>{
    const widgetConfig:Record<string, string> = {
      insights_topics : 'actionable_insights_topics',
      insights_leaders : 'actionable_insights_leaders',
      insights_sources : 'actionable_insights_sources',
      insights_socialmedia : 'actionable_insights_socialmedia',
      insights_mediatypes : 'actionable_insights_mediatypes'
    }
    return widgetConfig[Feed.newsfeedModal.insightsFilter];
  }