import { Injectable } from '@angular/core';

@Injectable()
export class TaoisighService {
  public data: Array<{tid: number, name: string, image: string, party: string, dob: string, dod: string, ministries: string, electionDate: string, termStartDate: string, termEndDate: string, headOfState: string, deputy: string, leadershipStartDate: string, leadershipEndDate: string, constituency: string, placeOfBirth: string, numOfTermsServed: number, profile: string, sizeOfCabinet: number, firstElectedToParliament: string}> = [{
    tid: 0,
    name: "W.T. Cosgrave",
    image:'',
    party:"Cumann na nGaedhael",
    dob: "",
    dod: "",
    ministries: "Local Government",
    electionDate: "",
    termStartDate: "",
    termEndDate: "",
    headOfState: "George V",
    deputy: "Kevin O'Higgins",
    leadershipStartDate: "",
    leadershipEndDate: "",
    constituency: "",
    placeOfBirth: "",
    numOfTermsServed: 1,
    profile: "",
    sizeOfCabinet: 1,
    firstElectedToParliament: ""
  },
]
  constructor() { }

}
