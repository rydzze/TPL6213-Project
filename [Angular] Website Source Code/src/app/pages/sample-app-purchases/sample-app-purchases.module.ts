import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { SampleAppPurchases } from './sample-app-purchases.component'

const routes = [
  {
    path: '',
    component: SampleAppPurchases,
  },
]

@NgModule({
  declarations: [SampleAppPurchases],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SampleAppPurchases],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SampleAppPurchasesModule {}
