import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py3ai',
  templateUrl: 'basic-py-3ai.component.html',
  styleUrls: ['basic-py-3ai.component.css'],
})
export class BasicPy3ai {
  rawo0un: string = ' '
  rawefxi: string = ' '
  raw40r0: string = ' '
  rawo2ry: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Strace | Basic Python')
    this.meta.addTags([
      {
        name: 'description',
        content: 'TPL6213 Project',
      },
      {
        property: 'og:title',
        content: 'Strace',
      },
      {
        property: 'og:description',
        content: 'TPL6213 Project',
      },
    ])
  }
}
