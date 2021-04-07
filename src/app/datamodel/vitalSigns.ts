import {ChartData, ChartDataSets, ChartOptions, ChartPoint} from 'chart.js';
import moment from 'moment';
import {Label} from 'ng2-charts';
import {getLineChartOptionsObject} from '../util/utility-functions';

interface VitalSignsTableData {
  date?: Date;
  systolic?: number;
  diastolic?: number;
}

interface VitalSignsData {
  date?: Date;
  value?: number;
}

interface VitalSignsDataForDisplay {
  date?: Date;
  value?: number;
}

interface VitalSignsChartData {
  data?: Array<VitalSignsData>;
  label?: string;  /* Systolic, Diastolic */
  fill?: boolean;  /* false */
}

interface VitalSigns {
  mostRecentSystolic?: VitalSignsDataForDisplay;
  mostRecentDiastolic?: VitalSignsDataForDisplay;
  tableData?: Array<VitalSignsTableData>;
  chartData?: Array<ChartDataSets>;
  xAxisLabels?: Array<Label>;
  suggestedMin?: moment.Moment;
  suggestedMax?: moment.Moment;
  lineChartOptions?: ChartOptions;
}

const emptyVitalSignsData: ChartPoint = {};
const emptyVitalSignsTableData: VitalSignsTableData[] = [];
const emptyVitalSignsChartData: ChartDataSets[] = [
  {
    data: [emptyVitalSignsData],
    fill: false,
    label: 'Systolic'
  },
  {
    data: [emptyVitalSignsData],
    fill: false,
    label: 'Diastolic'
  }];

const emptyVitalSigns: VitalSigns = {
  mostRecentSystolic: {},
  mostRecentDiastolic: {},
  tableData: emptyVitalSignsTableData,
  chartData: emptyVitalSignsChartData,
  xAxisLabels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  suggestedMin: moment('2020-01-01'),
  suggestedMax: moment('2020-06-30'),
  lineChartOptions: getLineChartOptionsObject(50, 180, moment('2020-01-01'),  moment('2020-06-30'))
};

export {
  VitalSignsTableData,
  VitalSignsData,
  VitalSignsChartData,
  VitalSigns,
  emptyVitalSigns,
  emptyVitalSignsChartData,
  emptyVitalSignsTableData,
  emptyVitalSignsData
};
