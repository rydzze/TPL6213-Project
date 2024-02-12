import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'basic-py3bii',
  templateUrl: 'basic-py-3bii.component.html',
  styleUrls: ['basic-py-3bii.component.css'],
})
export class BasicPy3bii {
  rawk8n8: string = ' '
  rawtv20: string = ' '
  rawpadj: string = ' '
  rawsw66: string = ' '
  rawstxa: string = ' '
  rawnxiu: string = ' '
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
