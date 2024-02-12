import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py2f',
  templateUrl: 'basic-py-2f.component.html',
  styleUrls: ['basic-py-2f.component.css'],
})
export class BasicPy2f {
  rawsf9h: string = ' '
  rawnih8: string = ' '
  raw54kf: string = ' '
  rawrgub: string = ' '
  rawqrge: string = ' '
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
