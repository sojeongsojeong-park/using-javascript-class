export default class Skill {
  skills;

  constructor(skills) {
    this.skills = skills
  }
  
  template() {
    let htmlSkillStr = "<ul>";

    //of로 사용하면 value값을 가져옴
    for (let skill of this.skills){
      console.log(skill);
      htmlSkillStr +=`
      <li>
        <a href="${skill.link}" target = "_blank">${skill.name}</a>
      </li>`
    }
    htmlSkillStr +="</ul>";

    return htmlSkillStr;
  }
}