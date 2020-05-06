import { Injectable } from '@angular/core';
import { SocialConcerns } from './datamodel/socialconcerns';

@Injectable({
  providedIn: 'root'
})
export class SubjectDataService{

  socialConcerns = SocialConcerns.getBaseConcerns();
  constructor() { }

  getConcerns()
  {
    return this.socialConcerns;
  }


}
