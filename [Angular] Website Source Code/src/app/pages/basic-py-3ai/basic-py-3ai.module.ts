import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy3ai } from './basic-py-3ai.component'

const routes = [
  {
    path: '',
    component: BasicPy3ai,
  },
]

@NgModule({
  declarations: [BasicPy3ai],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy3ai],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy3aiModule {}
