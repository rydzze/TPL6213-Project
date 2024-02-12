import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'sample-app-intro',
  templateUrl: 'sample-app-intro.component.html',
  styleUrls: ['sample-app-intro.component.css'],
})
export class SampleAppIntro {
  rawf8t2: string = ' '
  raws40p: string = ' '
  rawmbcs: string = ' '
  rawzddy: string = ' '
  rawf16d: string = ' '
  raw51yq: string = ' '
  raw2ti6: string = ' '
  rawbgkg: string = ' '
  rawxif5: string = ' '
  rawgxtm: string = ' '
  raw9o14: string = ' '
  rawz32f: string = ' '
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
    ])
  }
}
