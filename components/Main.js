import Skill from "./Skill.js"
import Activity from "./Activity.js"

export default class Main {
  profile;
  skill;
  activity;

  constructor(profile) {
    this.profile = profile;
    this.skill = new Skill(this.profile.skill);
    this.activity = new Activity(this.profile.activity);
  }

  getSkill() {
    return this.skill.template();
  }
  getActivity() {
    return this.activity.template();
  }

  template() {
    return `
      <main>
          <h1 id="title">이력서</h1>
          <h2 id="name">${this.profile.name}</h2>
          <div class="profile">
            <img src="${this.profile.img.filePath}" alt="${this.profile.img.fileName}" onclick="showProfileModal()" />
          </div>
          <div class="profileModal">
            <img src="profile.jpg" alt="프로필 사진" onclick="hideProfileModal()" />
          </div>
    
          <div class="sub-container">
            <div class="sub-item">
              <h3 class="sub-title">${this.profile.name}은요</h3>
              <div><strong>인적사항 : </strong>${this.profile.address} | ${this.profile.bloodType}형</div>
              <div><strong>주소 : </strong>${this.profile.address}</div>
              <div><strong>연락처 : </strong>${this.profile.email} | ${this.profile.phone}</div>
            </div>
            <div class="sub-item">
              <h3 class="sub-title">${this.profile.name}의 발자취</h3>
              <ul>
                <li>2003. 03 ~ 2006. 02 : 엘리스중학교 | 경기 | 인문계</li>
                <li>2006. 03 ~ 2009. 02 : 엘리스고학교 | 서울 | 인문계</li>
                <li>2009. 03 ~ 2015. 02 : 엘리스대학교 | 서울 | 경영학과</li>
              </ul>
            </div>
            <div class="sub-item">
              <h3 class="sub-title">${this.profile.name}의 활약</h3>
              ${this.getActivity()}
            </div>
            <div class="sub-item">
              <h3 class="sub-title">${this.profile.name}의 스킬</h3>
              ${this.getSkill()}
            </div>
          </div>
        </main>
    `
  }
};