import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py3bi',
  templateUrl: 'basic-py-3bi.component.html',
  styleUrls: ['basic-py-3bi.component.css'],
})
export class BasicPy3bi {
  raws0gu: string = ' '
  raw503a: string = ' '
  rawg8y6: string = ' '
  raw5mbc: string = ' '
  rawzshr: string = ' '
  rawzxlw: string = ' '
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
