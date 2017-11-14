import { Injectable } from '@angular/core';

@Injectable()
export class TaoisighService {
  public data: Array<{tid: number, name: string, image: string, party: any, dob: any, dod: any, ministries: any, electionDate: any, termStartDate: any, termEndDate: any, headsOfState: any, deputy: any, leadershipStartDate: any, leadershipEndDate: any, constituencies: any, placeOfBirth: string, placeOfDeath: string, buried: string, religion: string, numOfTermsServed: number, profile: string, firstElectedToParliament: any}> = [{
    tid: 0,
    name: "W.T. Cosgrave",
    image:'',
    party:["Sinn Fein", "Cumann na nGaedhael", "Fine Gael"],
    dob: "06/06/1880",
    dod: "16/11/1965",
    ministries: ["Local Government"],
    electionDate: "N/A",
    termStartDate: "06/12/1922",
    termEndDate: "09/03/32",
    headsOfState: "George V",
    deputy: ["Kevin O'Higgins", "Ernest Blythe"],
    leadershipStartDate: "1922",
    leadershipEndDate: "1944",
    constituencies: ["Kilkenny City", "Kilkenny North", "Carlow Kilkenny", "Cork Borough"],
    placeOfBirth: "Dublin",
    placeOfDeath: "Dublin",
    buried: "Goldenbridge",
    religion: "Roman Catholic",
    numOfTermsServed: 2,
    profile: "",
    firstElectedToParliament: "1917"
  },
]
  constructor() { }

}
