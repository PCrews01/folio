import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Skill } from './skill';
import { Contact } from 'src/app/shared/contact';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class APIService {
  skills: Skill[] = [];
  mail: Observable<Contact[]>;
  msg: Observable<Contact[]>;
  private colMail: AngularFirestoreCollection<Contact>;
  constructor(private _http: HttpClient,
              private _store: AngularFirestore) {
                this.colMail = this._store.collection('sendMail');
                this.msg = this.colMail.valueChanges();
              }
 public newEmail(email, name, subject, message) {
    const e: Contact = { email, name, subject, message };
    console.log('sent', e);
    this.colMail.add(e);
  }
}
