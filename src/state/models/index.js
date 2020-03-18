import MapModel from "./MapModel";
import DataModel from "./DataModel";
import TooltipModel from "./TooltipModel";
import TagsModel from "./TagsModel";
import FilterModel from "./FilterModel";
import LegendModel from "./LegendModel";

export default {
  ...MapModel,
  ...DataModel,
  ...TagsModel,
  ...FilterModel,
  ...LegendModel,
  ...TooltipModel,
};
