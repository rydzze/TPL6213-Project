import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py1f',
  templateUrl: 'basic-py-1f.component.html',
  styleUrls: ['basic-py-1f.component.css'],
})
export class BasicPy1f {
  rawi07v: string = ' '
  rawpl1m: string = ' '
  raw3hch: string = ' '
  rawfoo5: string = ' '
  rawvjkc: string = ' '
  rawgb1z: string = ' '
  raw9bl8: string = ' '
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
