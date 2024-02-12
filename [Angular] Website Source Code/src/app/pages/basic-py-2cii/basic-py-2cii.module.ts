import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2cii } from './basic-py-2cii.component'

const routes = [
  {
    path: '',
    component: BasicPy2cii,
  },
]

@NgModule({
  declarations: [BasicPy2cii],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2cii],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2ciiModule {}
