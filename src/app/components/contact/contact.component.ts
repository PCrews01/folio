import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../../shared/api.service';
import { Skill } from '../../shared/skill';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  contactForm: FormGroup;
  cols: string;
  skills: Skill[] = [];
  mMatch: MediaQueryList = matchMedia(`(max-width: ${ screen }px`);
  constructor( private _form: FormBuilder,
               private _api: APIService,
               private _oMedia: ObservableMedia,
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
                    this.cols = 'three-col';
                  }
                  });
                }

  ngOnInit() {
    this.contactForm = this._form.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      subject: ['', Validators.required ],
      message: ['', Validators.required ],
    });
  }

  sendMessage(contactForm: FormGroup) {
    alert('holder');
    if (!contactForm.invalid) {
      this._api.newEmail(contactForm.value.email, contactForm.value.name, contactForm.value.subject, contactForm.value.message);
    }
  }
}
