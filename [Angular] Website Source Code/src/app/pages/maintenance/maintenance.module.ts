import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Maintenance } from './maintenance.component'

const routes = [
  {
    path: '',
    component: Maintenance,
  },
]

@NgModule({
  declarations: [Maintenance],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Maintenance],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaintenanceModule {}
