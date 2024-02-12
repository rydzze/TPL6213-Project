import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { BasicPy2g } from './basic-py-2g.component'

const routes = [
  {
    path: '',
    component: BasicPy2g,
  },
]

@NgModule({
  declarations: [BasicPy2g],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BasicPy2g],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicPy2gModule {}
