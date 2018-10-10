import { Component, OnInit, NgZone } from '@angular/core';
import { Skill } from '../../shared/skill';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';
import { SkillsComponent } from '../skills/skills.component';
const screen = 700;
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  title = 'Work';
  skills: Skill[] = [];
  cols: string;
  mMatch: MediaQueryList = matchMedia(`(max-width: ${ screen }px`);
  constructor( private _oMedia: ObservableMedia,
               private _zone: NgZone,
               private _http: HttpClient) {
                 this.mMatch.addListener(m => _zone.run(() => this.mMatch = m));
                _oMedia.asObservable().subscribe((mChange: MediaChange) => {
                  if ( mChange.mqAlias === 'xs' || mChange.mqAlias === 'sm') {
                    this.cols = 'one-col';
                  } else if (mChange.mqAlias === 'md') {
                    this.cols = 'three-col';
                  } else if (mChange.mqAlias === 'lg') {
                    this.cols = 'four-col';
                  } else if (mChange.mqAlias === 'xs') {
                    this.cols = 'five-col';
                  } else {
                    this.cols = 'two-col';
                  }
                }); }

  ngOnInit() {

    this._http.get<Skill[]>('../../../assets/data/skills.json').subscribe(x => {
      this.skills = x.filter( s => s.category === 'work');
    });
  }

}
