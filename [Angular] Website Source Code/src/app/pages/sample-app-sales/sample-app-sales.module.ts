import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { SampleAppSales } from './sample-app-sales.component'

const routes = [
  {
    path: '',
    component: SampleAppSales,
  },
]

@NgModule({
  declarations: [SampleAppSales],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SampleAppSales],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SampleAppSalesModule {}
