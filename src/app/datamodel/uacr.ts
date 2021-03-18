import {ChartDataSets, ChartOptions, ChartPoint} from 'chart.js';
import * as moment from 'moment';
import {Label} from 'ng2-charts';
import {getLineChartOptionsObject} from '../util/utility-functions';

interface UacrTableData {
  date?: Date;
  uacr?: number;
  unit?: string;
  test?: string;
}

interface UacrData {
  date?: Date;
  value?: number;
}

interface UacrDataForDisplay {
  test?: string;
  value?: number;
  unit?: string;
  date?: Date;
  result?: string;
}

interface UacrChartData {
  data?: Array<UacrData>;
  label?: string;  /* Systolic, Diastolic */
  fill?: boolean;  /* false */
}

interface Uacr {
  mostRecentUacr?: UacrDataForDisplay;
  tableData?: Array<UacrTableData>;
  chartData?: Array<ChartDataSets>;
  xAxisLabels?: Array<Label>;
  suggestedMin?: any;
  suggestedMax?: any;
  lineChartOptions?: ChartOptions & { annotation: any };
}

const emptyUacrData: ChartPoint = {};
const emptyUacrTableData: UacrTableData[] = [];
const emptyUacrChartData: ChartDataSets[] = [
  {
    data: [emptyUacrData],
    fill: false,
    label: 'Uacr'
  }];

const emptyUacr: Uacr = {
  mostRecentUacr: {},
  tableData: emptyUacrTableData,
  chartData: emptyUacrChartData,
  xAxisLabels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  suggestedMin: moment('2020-01-01'),
  suggestedMax: moment('2020-06-30'),
  lineChartOptions: {...getLineChartOptionsObject(0, 2000, moment('2020-01-01'),  moment('2020-06-30')), annotation: []}
};

export {
  UacrTableData,
  UacrData,
  UacrChartData,
  Uacr,
  emptyUacr,
  emptyUacrChartData,
  emptyUacrTableData,
  emptyUacrData
};
