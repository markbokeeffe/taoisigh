import { Injectable } from '@angular/core';

@Injectable()
export class TaoisighService {
  public data: Array<{tid: number, name: string, image: string, party: any, dob: any, dod: any, ministries: any, terms: any, headsOfState: any, deputy: any, leadershipStartDate: any, leadershipEndDate: any, constituencies: any, placeOfBirth: string, placeOfDeath: string, buried: string, religion: string, numOfTermsServed: number, profile: string, firstElectedToDail: any, yearLeftDail: any, coalitionPartners: any, senator: Boolean, tanaiste: Boolean}> = [
    {
      tid: 0,
      name: "W.T. Cosgrave",
      image:'',
      party:["Sinn Fein", "Cumann na nGaedhael", "Fine Gael"],
      dob: "06/06/1880",
      dod: "16/11/1965",
      ministries: ["Local Government"],
      terms: [
          {
            start:"06/12/1922",
            end:"09/03/1932"
          }
      ],
      headsOfState: ["George V"],
      deputy: ["Kevin O'Higgins", "Ernest Blythe"],
      leadershipStartDate: "1922",
      leadershipEndDate: "1944",
      constituencies: ["Kilkenny City", "Kilkenny North", "Carlow Kilkenny", "Cork Borough"],
      placeOfBirth: "Dublin",
      placeOfDeath: "Dublin",
      buried: "Goldenbridge Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 3,
      profile: "",
      firstElectedToDail: "1917",
      yearLeftDail: "1944",
      coalitionPartners: null,
      senator: false,
      tanaiste: false
    },
    {
      tid: 1,
      name: "Eamon de Valera",
      image:'',
      party:["Sinn Fein", "Fianna Fail"],
      dob: "14/10/1882",
      dod: "29/08/1975",
      ministries: ["External Affairs"],
      terms: [
          {
            start:"09/03/1932",
            end:"18/02/48"
          },
          {
            start:"13/06/1951",
            end:"02/6/54"
          },
          {
            start:"20/03/1957",
            end:"23/06/1959"
          }
      ],
      headsOfState: ["George V", "Edward VIII", "Douglas Hyde", "Sean T. O'Kelly" ],
      deputy: ["Sean T. O'Kelly", "Sean Lemass"],
      leadershipStartDate: "1922",
      leadershipEndDate: "1944",
      constituencies: ["Clare East", "Clare"],
      placeOfBirth: "New York",
      placeOfDeath: "Dublin",
      buried: "Glasnevin Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 8,
      profile: "",
      firstElectedToDail: "1917",
      yearLeftDail: "1959",
      coalitionPartners: null,
      senator: false,
      tanaiste: false
    },
    {
      tid: 2,
      name: "John A. Costello",
      image:'',
      party:["Cumann na nGaedhael", "Fine Gael"],
      dob: "20/06/1891",
      dod: "05/01/1976",
      ministries: ["Attorney General"],
      terms: [
          {
            start:"18/02/1948",
            end:"13/06/1951"
          },
          {
            start:"02/06/1954",
            end:"20/03/1957"
          }
      ],
      headsOfState: ["Douglas Hyde", "Sean T. O'Kelly" ],
      deputy: ["William Norton"],
      leadershipStartDate: "N/A",
      leadershipEndDate: "N/A",
      constituencies: ["Dublin County", "Dublin Townships", "Dublin South-East"],
      placeOfBirth: "Dublin",
      placeOfDeath: "Dublin",
      buried: "Deansgrange Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 2,
      profile: "",
      firstElectedToDail: "1933",
      yearLeftDail: "1944",
      coalitionPartners: ["Labour", "National Labour", "Clann na Poblachta", "Clann na Talmhan", "Independents"],
      senator: false,
      tanaiste: false
    },
    {
      tid: 3,
      name: "Sean Lemass",
      image:'',
      party:["Fianna Fail"],
      dob: "15/07/1899",
      dod: "11/05/1971",
      ministries: ["Industry & Commerce", "Supplies"],
      terms: [
          {
            start:"23/06/1959",
            end:"10/11/1966"
          }
      ],
      headsOfState: ["Sean T. O'Kelly", "Eamon de Valera"],
      deputy: ["Sean MacEntee", "Frank Aiken"],
      leadershipStartDate: "1959",
      leadershipEndDate: "1966",
      constituencies: ["Dublin South", "Dublin South Central"],
      placeOfBirth: "Dublin",
      placeOfDeath: "Dublin",
      buried: "Deansgrange Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 3,
      profile: "",
      firstElectedToDail: "1927",
      yearLeftDail: "1969",
      coalitionPartners: null,
      senator: false,
      tanaiste: true
    },
    {
      tid: 4,
      name: "Jack Lynch",
      image:'',
      party:["Fianna Fail"],
      dob: "15/08/1917",
      dod: "20/10/1999",
      ministries: ["Gaeltacht Affairs", "Education", "Industry & Commerce", "Finance"],
      terms: [
          {
            start:"10/11/1966",
            end:"14/03/1973"
          },
          {
            start:"05/07/1977",
            end:"11/12/1979"
          }
      ],
      headsOfState: ["Eamon de Valera", "Patrick Hillery"],
      deputy: ["Frank Aiken", "Erskine Childers"],
      leadershipStartDate: "1966",
      leadershipEndDate: "1979",
      constituencies: ["Cork Borough", "Cork City North", "Cork City"],
      placeOfBirth: "Cork",
      placeOfDeath: "Dublin",
      buried: "St. Finbarr's Cemtery, Cork",
      religion: "Roman Catholic",
      numOfTermsServed: 3,
      profile: "",
      firstElectedToDail: "1948",
      yearLeftDail: "1981",
      coalitionPartners: null,
      senator: false,
      tanaiste: false
    },
    {
      tid: 5,
      name: "Liam Cosgrave",
      image:'',
      party:["Fine Gael"],
      dob: "13/04/1920",
      dod: "04/10/2017",
      ministries: ["External Affairs"],
      terms: [
          {
            start:"14/03/1973",
            end:"05/07/1977"
          }
      ],
      headsOfState: ["Eamon de Valera", "Erskine Childers", "Cearbhall O Dalaigh", "Patrick Hillery"],
      deputy: ["Brendan Corish"],
      leadershipStartDate: "1965",
      leadershipEndDate: "1977",
      constituencies: ["Dublin County", "Dun Laoghaire & Rathdown", "Dun Laoghaire"],
      placeOfBirth: "Dublin",
      placeOfDeath: "Dublin",
      buried: "Goldenbridge Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 1,
      profile: "",
      firstElectedToDail: "1943",
      yearLeftDail: "1981",
      coalitionPartners: ["Labour"],
      senator: false,
      tanaiste: false
    },
    {
      tid: 6,
      name: "Charles Haughey",
      image:'',
      party:["Fianna Fail"],
      dob: "16/09/1925",
      dod: "13/06/2006",
      ministries: ["Justice", "Agriculture", "Finance", "Health", "Social Welfare", "Gaeltacht"],
      terms: [
          {
            start:"11/12/1979",
            end:"30/06/1981"
          },
          {
            start:"09/03/1982",
            end:"14/12/1982"
          },
          {
            start:"10/03/1987",
            end:"11/02/1992"
          }
      ],
      headsOfState: ["Patrick Hillery", "Mary Robinson"],
      deputy: ["George Colley", "Ray MacSharry", "Brian Lenihan", "John Wilson"],
      leadershipStartDate: "1979",
      leadershipEndDate: "1992",
      constituencies: ["Dublin North-East", "Dublin North-Central"],
      placeOfBirth: "Mayo",
      placeOfDeath: "Dublin",
      buried: "St. Fintan's Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 4,
      profile: "",
      firstElectedToDail: "1957",
      yearLeftDail: "1992",
      coalitionPartners: ["Progressive Democrats"],
      senator: false,
      tanaiste: false
    },
    {
      tid: 7,
      name: "Garret FitzGerald",
      image:'',
      party:["Fine Gael"],
      dob: "09/02/1926",
      dod: "19/05/2011",
      ministries: ["Foreign Affairs"],
      terms: [
          {
            start:"30/06/1981",
            end:"09/03/1982"
          },
          {
            start:"14/12/1982",
            end:"10/03/1987"
          }
      ],
      headsOfState: ["Patrick Hillery"],
      deputy: ["Michael O'Leary", "Dick Spring", "Peter Barry"],
      leadershipStartDate: "1977",
      leadershipEndDate: "1987",
      constituencies: ["Dublin South-East"],
      placeOfBirth: "Dublin",
      placeOfDeath: "Dublin",
      buried: "Shanganagh Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 2,
      profile: "",
      firstElectedToDail: "1969",
      yearLeftDail: "1992",
      coalitionPartners: ["Labour"],
      senator: true,
      tanaiste: false
    },
    {
      tid: 8,
      name: "Albert Reynolds",
      image:'',
      party:["Fianna Fail"],
      dob: "03/04/1932",
      dod: "21/08/2014",
      ministries: ["Posts & Telegraphs", "Transport", "Industry & Commerce", "Finance"],
      terms: [
          {
            start:"11/02/1992",
            end:"15/12/1994"
          }
      ],
      headsOfState: ["Mary Robinson"],
      deputy: ["John Wilson", "Dick Spring", "Bertie Ahern"],
      leadershipStartDate: "1992",
      leadershipEndDate: "1994",
      constituencies: ["Longford-Westmeath", "Longford-Roscommon"],
      placeOfBirth: "Roscommon",
      placeOfDeath: "Dublin",
      buried: "Shanganagh Cemetery, Dublin",
      religion: "Roman Catholic",
      numOfTermsServed: 2,
      profile: "",
      firstElectedToDail: "1977",
      yearLeftDail: "2002",
      coalitionPartners: ["Progressive Democrats", "Labour"],
      senator: false,
      tanaiste: false
    },
    {
      tid: 9,
      name: "John Bruton",
      image:'',
      party:["Fine Gael"],
      dob: "18/05/1947",
      dod: "",
      ministries: ["Industry & Energy",  "Industry, Trade, Commerce & Tourism", "Finance", "Public Service"],
      terms: [
          {
            start:"15/12/1994",
            end:"26/06/1997"
          }
      ],
      headsOfState: ["Mary Robinson"],
      deputy: ["Dick Spring"],
      leadershipStartDate: "1990",
      leadershipEndDate: "2001",
      constituencies: ["Meath"],
      placeOfBirth: "Meath",
      placeOfDeath: "",
      buried: "",
      religion: "Roman Catholic",
      numOfTermsServed: 1,
      profile: "",
      firstElectedToDail: "1969",
      yearLeftDail: "2004",
      coalitionPartners: ["Labour", "Democratic Left"],
      senator: false,
      tanaiste: false
    },
    {
      tid: 10,
      name: "Bertie Ahern",
      image:'',
      party:["Fianna Fail"],
      dob: "12/09/1951",
      dod: "",
      ministries: ["Labour", "Finance", "Industry & Commerce", "Arts, Culture & the Gaeltacht"],
      terms: [
          {
            start:"26/06/1997",
            end:"07/05/2008"
          }
      ],
      headsOfState: ["Mary Robinson", "Mary McAleese"],
      deputy: ["Mary Harney", "Michael McDowell", "Brian Cowen"],
      leadershipStartDate: "1994",
      leadershipEndDate: "2008",
      constituencies: ["Dublin Finglas", "Dublin Central"],
      placeOfBirth: "Dublin",
      placeOfDeath: "",
      buried: "",
      religion: "Roman Catholic",
      numOfTermsServed: 3,
      profile: "",
      firstElectedToDail: "1977",
      yearLeftDail: "2011",
      coalitionPartners: ["Progressive Democrats", "Green Party"],
      senator: false,
      tanaiste: true
    },
    {
      tid: 11,
      name: "Brian Cowen",
      image:'',
      party:["Fianna Fail"],
      dob: "10/01/1960",
      dod: "",
      ministries: ["Labour", "Transport, Energy & Communications", "Health & Children", "Foreign Affairs", "Finance", "Defence"],
      terms: [
          {
            start:"07/05/2008",
            end:"09/03/2011"
          }
      ],
      headsOfState: ["Mary McAleese"],
      deputy: ["Mary Coughlan"],
      leadershipStartDate: "2008",
      leadershipEndDate: "2011",
      constituencies: ["Laois-Offaly"],
      placeOfBirth: "Offaly",
      placeOfDeath: "",
      buried: "",
      religion: "Roman Catholic",
      numOfTermsServed: 1,
      profile: "",
      firstElectedToDail: "1984",
      yearLeftDail: "2011",
      coalitionPartners: ["Green Party", "Independent"],
      senator: false,
      tanaiste: true
    },
    {
      tid: 12,
      name: "Enda Kenny",
      image:'',
      party:["Fine Gael"],
      dob: "24/04/1951",
      dod: "",
      ministries: ["Tourism & Trade", "Defence"],
      terms: [
          {
            start:"09/03/2011",
            end:"14/06/2017"
          }
      ],
      headsOfState: ["Mary McAleese", "Michael D. Higgins"],
      deputy: ["Eamon Gilmore", "Joan Burton", "Frances Fitzgerald"],
      leadershipStartDate: "2002",
      leadershipEndDate: "2017",
      constituencies: ["Mayo West", "Mayo"],
      placeOfBirth: "Mayo",
      placeOfDeath: "",
      buried: "",
      religion: "Roman Catholic",
      numOfTermsServed: 2,
      profile: "",
      firstElectedToDail: "1975",
      yearLeftDail: "",
      coalitionPartners: ["Labour", "Independent Alliance"],
      senator: false,
      tanaiste: false
    },
    {
      tid: 13,
      name: "Leo Varadkar",
      image:'',
      party:["Fine Gael"],
      dob: "18/01/1979",
      dod: "",
      ministries: ["Transport, Tourism & Sport", "Health", "Social Protection", "Defence"],
      terms: [
          {
            start:"14/06/2017",
            end:"Present"
          }
      ],
      headsOfState: ["Michael D. Higgins"],
      deputy: ["Frances Fitzgerald"],
      leadershipStartDate: "2017",
      leadershipEndDate: "Present",
      constituencies: ["Dublin West"],
      placeOfBirth: "Dublin",
      placeOfDeath: "",
      buried: "",
      religion: "Roman Catholic",
      numOfTermsServed: 1,
      profile: "",
      firstElectedToDail: "2007",
      yearLeftDail: "",
      coalitionPartners: ["Independent Alliance"],
      senator: false,
      tanaiste: false
    },
]
  constructor() { }

}
