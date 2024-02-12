import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { SampleAppInventory } from './sample-app-inventory.component'

const routes = [
  {
    path: '',
    component: SampleAppInventory,
  },
]

@NgModule({
  declarations: [SampleAppInventory],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SampleAppInventory],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SampleAppInventoryModule {}
