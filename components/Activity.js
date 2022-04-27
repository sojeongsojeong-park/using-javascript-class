export default class Activity {
  activities;

  constructor(activities) {
    this.activities = activities
  }
  template() {
    let htmlActivityStr = "<ol>";
    for(let activity of this.activities){
      htmlActivityStr += `
      <li>${activity}</li>
      `
    }
    htmlActivityStr +="</ol>";

    return htmlActivityStr;
  }
}