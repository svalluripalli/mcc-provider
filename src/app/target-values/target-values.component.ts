import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {GoalTarget} from '../generated-data-api';

@Component({
  selector: 'app-target-values',
  templateUrl: './target-values.component.html',
  styleUrls: ['./target-values.component.css']
})
export class TargetValuesComponent implements OnInit {

  constructor(public dataservice: DataService) { }
  displayedColumns = ['measure', 'mostRecentResult', 'date', 'target'];
  ngOnInit(): void {
  }

  formatTargetValue(target: GoalTarget) {
    let formatted = 'None';
    if (target.value != null) {
      formatted = 'Unknown Type: ' + target.value.valueType;

      switch (target.value.valueType) {
        case 'String': {
          formatted = target.value.stringValue;
          return formatted;
        }
        case 'Integer': {
          formatted = target.value.integerValue.toString();
          break;
        }
        case 'Boolean': {
          formatted = String(target.value.booleanValue);
          break;
        }
        case 'CodeableConcept': {
          // todo:  formatTargetValue CodeableConcept
          break;
        }
        case 'Quantity': {
          formatted = target.value.quantityValue.comparator
            + target.value.quantityValue.value.toString()
            + ' ' + target.value.quantityValue.unit;
          break;
        }
        case 'Range': {
          formatted = target.value.rangeValue.low.value
            + ' - ' + target.value.rangeValue.high.value
            + ' ' + target.value.rangeValue.high.unit;
          break;
        }
        case 'Ratio': {
          // todo:  formatTargetValue Ratio
          break;
        }
        case 'Period': {
          // todo:  formatTargetValue Period
          break;
        }
        case 'Range': {
          // todo:  formatTargetValue Range
          break;
        }
        case 'Date': {
          // todo:  formatTargetValue Date
          break;
        }
        case 'Time': {
          // todo:  formatTargetValue Time
          break;
        }
        case 'DateTime': {
          // todo:  formatTargetValue DateTime
          break;
        }
        case 'SampledData': {
          // todo:  formatTargetValue SampledData
          break;
        }
        case 'DurationValue': {
          // todo:  formatTargetValue DurationValue
          break;
        }
        case 'TimingValue': {
          // todo:  formatTargetValue TimingValue
          break;
        }
        case 'InstantValue': {
          // todo:  formatTargetValue InstantValue
          break;
        }
        case 'IdentifierValue': {
          // todo:  formatTargetValue IdentifierValue
          break;
        }
      }
    }
    return formatted;

  }

}
