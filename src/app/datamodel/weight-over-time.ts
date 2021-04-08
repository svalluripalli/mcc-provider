import {ChartDataSets, ChartOptions, ChartPoint} from 'chart.js';
import moment from 'moment';
import {Label} from 'ng2-charts';
import {getLineChartOptionsObject} from '../util/utility-functions';

interface WotTableData {
  date?: Date;
  value?: number;
  unit?: string;
  test?: string;
}

interface WotData {
  date?: Date;
  value?: number;
}

interface WotDataForDisplay {
  test?: string;
  value?: number;
  unit?: string;
  date?: Date;
  result?: string;
}

interface WotChartData {
  data?: Array<WotData>;
  label?: string;  /* Systolic, Diastolic */
  fill?: boolean;  /* false */
}

interface Wot {
  mostRecentWot?: WotDataForDisplay;
  tableData?: Array<WotTableData>;
  chartData?: Array<ChartDataSets>;
  xAxisLabels?: Array<Label>;
  suggestedMin?: moment.Moment;
  suggestedMax?: moment.Moment;
  lineChartOptions?: ChartOptions & { annotation: any };
}

const emptyWotData: ChartPoint = {};
const emptyWotTableData: WotTableData[] = [];
const emptyWotChartData: ChartDataSets[] = [
  {
    data: [emptyWotData],
    fill: false,
    label: 'eGFR'
  }];

const emptyWot: Wot = {
  mostRecentWot: {},
  tableData: emptyWotTableData,
  chartData: emptyWotChartData,
  xAxisLabels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  suggestedMin: moment('2020-01-01'),
  suggestedMax: moment('2020-06-30'),
  lineChartOptions: {...getLineChartOptionsObject(105, 220, moment('2020-01-01'),  moment('2020-06-30')), annotation: []}
};

export {
  WotTableData,
  WotData,
  WotChartData,
  Wot,
  emptyWot,
  emptyWotChartData,
  emptyWotTableData,
  emptyWotData
};
