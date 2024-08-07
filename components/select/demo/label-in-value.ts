import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-select-label-in-value',
  template: `
    <p>The selected option's age is {{ selectedValue?.age }}</p>
    <br />
    <nz-select
      [(ngModel)]="selectedValue"
      [compareWith]="compareFn"
      (ngModelChange)="log($event)"
      nzAllowClear
      nzPlaceHolder="Choose"
    >
      @for (option of optionList; track option) {
        <nz-option [nzValue]="option" [nzLabel]="option.label"></nz-option>
      }
    </nz-select>
  `,
  styles: [
    `
      nz-select {
        width: 120px;
      }
    `
  ]
})
export class NzDemoSelectLabelInValueComponent {
  optionList = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];
  selectedValue = { label: 'Jack', value: 'jack', age: 22 };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  log(value: { label: string; value: string; age: number }): void {
    console.log(value);
  }
}
