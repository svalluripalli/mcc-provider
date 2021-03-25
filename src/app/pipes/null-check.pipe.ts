import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nullCheck' })
export class NullCheckPipe implements PipeTransform {
    transform(value: string): string {
        if (value) {
            let testValue: string = value.toUpperCase();
            if (testValue === "Undescribed code null".toUpperCase()) return "";
            if (testValue === "null".toUpperCase()) return "";
            if (testValue === "Undefined".toUpperCase()) return "";
            if (testValue === "undefined onward".toUpperCase()) return "";
        }
        return value;
    }
}