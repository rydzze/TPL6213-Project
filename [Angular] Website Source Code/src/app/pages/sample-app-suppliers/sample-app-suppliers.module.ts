import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { SampleAppSuppliers } from './sample-app-suppliers.component'

const routes = [
  {
    path: '',
    component: SampleAppSuppliers,
  },
]

@NgModule({
  declarations: [SampleAppSuppliers],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SampleAppSuppliers],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SampleAppSuppliersModule {}
