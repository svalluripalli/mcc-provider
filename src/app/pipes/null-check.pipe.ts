import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nullCheck' })
export class NullCheckPipe implements PipeTransform {
    transform(value: string): string {
        if (value === "Undescribed code null") return "";
        if (value === "null") return "";
        return value;
    }
}