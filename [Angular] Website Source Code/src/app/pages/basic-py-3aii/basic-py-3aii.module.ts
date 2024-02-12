import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy3aii } from './basic-py-3aii.component'

const routes = [
  {
    path: '',
    component: BasicPy3aii,
  },
]

@NgModule({
  declarations: [BasicPy3aii],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy3aii],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy3aiiModule {}
