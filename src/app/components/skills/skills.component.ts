import { Component, OnInit, NgZone } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { mcall } from 'q';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../../shared/skill';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../../shared/contact';
const screen = 700;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'Skills';
  cols: string;
  skills: Skill[] = [];
  mMatch: MediaQueryList = matchMedia(`(max-width: ${ screen }px`);
  constructor( private _oMedia: ObservableMedia,
               private _zone: NgZone,
               private _http: HttpClient) {
                 this.mMatch.addListener(m => _zone.run(() => this.mMatch = m));
                 _oMedia.asObservable().subscribe((mChange: MediaChange) => {
                   if ( mChange.mqAlias === 'xs') {
                     this.cols = 'one-col';
                   } else if (mChange.mqAlias === 'sm') {
                     this.cols = 'two-col';
                   } else if (mChange.mqAlias === 'md') {
                     this.cols = 'three-col';
                   } else if (mChange.mqAlias === 'lg') {
                     this.cols = 'four-col';
                   } else if (mChange.mqAlias === 'xs') {
                     this.cols = 'five-col';
                   } else {
                     this.cols = 'two-col';
                   }
                  });
                }

  ngOnInit() {
    this._http.get<Skill[]>('../../../assets/data/skills.json').subscribe(skills => {
      this.skills = skills.filter( x => x.category !== 'work');
    });
  }
}
