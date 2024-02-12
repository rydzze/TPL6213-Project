import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  text1: string = 'Control Structures'
  @Input()
  text11: string = 'Home'
  @Input()
  text2: string = 'Sample Application'
  @Input()
  text: string = 'STRACE'
  @Input()
  next1: string = '|'
  @Input()
  next: string = '|'
  @Input()
  text4: string = 'Basic Python'
  @Input()
  next3: string = '|'
  @Input()
  text3: string = 'Application of Python/Django'
  @Input()
  text31: string = 'Background'
  @Input()
  text8: string = 'Implementation Method'
  @Input()
  text12: string = 'Subprograms'
  @Input()
  rootClassName: string = ''
  @Input()
  text7: string = 'Popularity Statistic'
  @Input()
  text5: string = 'History of Python/Django'
  @Input()
  next2: string = '|'
  @Input()
  text111: string = 'Expressions and Assignment'
  @Input()
  text9: string = 'Programming Environment'
  @Input()
  text6: string = 'Programming Style'
  @Input()
  text10: string = 'Names and Bindings'
  constructor() {}
}
