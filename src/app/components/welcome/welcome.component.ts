import { Component, OnInit, NgZone } from '@angular/core';
import { Skill } from '../../shared/skill';
import { HttpClient } from '@angular/common/http';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
const screen = 700;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  title = 'Skills';
  cols: string;
  skills: Skill[] = [];
  mMatch: MediaQueryList = matchMedia(`(max-width: ${ screen }px`);
  constructor( private _oMedia: ObservableMedia,
               private _zone: NgZone,
               private _http: HttpClient) {
                 this.mMatch.addListener(m => _zone.run(() => this.mMatch = m));
                 _oMedia.asObservable().subscribe((mChange: MediaChange) => {
                   console.log(mChange.mqAlias);
                   if ( mChange.mqAlias === 'xs') {
                     this.cols = 'two-col';
                   } else if (mChange.mqAlias === 'sm') {
                     this.cols = 'two-col';
                   } else if (mChange.mqAlias === 'md') {
                     this.cols = 'three-col';
                   } else if (mChange.mqAlias === 'lg') {
                     this.cols = 'four-col';
                   } else if (mChange.mqAlias === 'xs') {
                     this.cols = 'five-col';
                   } else if (mChange.mqAlias === 'xl') {
                     this.cols = 'two-col';
                   }
                  });
                }

  ngOnInit() {
    console.log(this.cols);
  }

}
