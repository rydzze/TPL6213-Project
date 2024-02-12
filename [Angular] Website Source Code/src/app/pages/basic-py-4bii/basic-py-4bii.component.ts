import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py4bii',
  templateUrl: 'basic-py-4bii.component.html',
  styleUrls: ['basic-py-4bii.component.css'],
})
export class BasicPy4bii {
  rawl0y8: string = ' '
  rawn0g3: string = ' '
  rawltq6: string = ' '
  raww6k2: string = ' '
  raw77d1: string = ' '
  raw2j3u: string = ' '
  raw1ggc: string = ' '
  rawajdn: string = ' '
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
