import { Component } from '@angular/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'nz-demo-descriptions-basic',
  imports: [NzDescriptionsModule],
  template: `
    <nz-descriptions nzTitle="User Info">
      <nz-descriptions-item nzTitle="UserName">Zhou Maomao</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Telephone">18100000000</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Live">Hangzhou, Zhejiang</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Remark">Empty</nz-descriptions-item>
      <nz-descriptions-item nzTitle="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </nz-descriptions-item>
    </nz-descriptions>
  `
})
export class NzDemoDescriptionsBasicComponent {}
