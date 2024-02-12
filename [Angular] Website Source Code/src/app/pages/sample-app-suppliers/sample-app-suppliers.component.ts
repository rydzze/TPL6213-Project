import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sample-app-suppliers',
  templateUrl: 'sample-app-suppliers.component.html',
  styleUrls: ['sample-app-suppliers.component.css'],
})
export class SampleAppSuppliers {
  raw4kg1: string = ' '
  rawxb2y: string = ' '
  rawgs78: string = ' '
  rawubws: string = ' '
  rawkqem: string = ' '
  rawa79e: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Strace | Sample Application')
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
      {
        name: 'robots',
        content: 'noindex',
      },
    ])
  }
}
