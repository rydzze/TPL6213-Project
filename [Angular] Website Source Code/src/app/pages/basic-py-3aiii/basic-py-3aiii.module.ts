import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy3aiii } from './basic-py-3aiii.component'

const routes = [
  {
    path: '',
    component: BasicPy3aiii,
  },
]

@NgModule({
  declarations: [BasicPy3aiii],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy3aiii],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy3aiiiModule {}
