/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { Directive, TemplateRef, inject } from '@angular/core';

import { NzModalRef } from './modal-ref';

@Directive({
  selector: '[nzModalFooter]',
  exportAs: 'nzModalFooter'
})
export class NzModalFooterDirective {
  public readonly templateRef: TemplateRef<{}> = inject(TemplateRef);
  private nzModalRef = inject(NzModalRef, { optional: true });

  constructor() {
    this.nzModalRef?.updateConfig({
      nzFooter: this.templateRef
    });
  }
}
