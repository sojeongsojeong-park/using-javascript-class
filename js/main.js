import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';

const myProfile = {
  name:"최우식",
  img:{
    filePath: "profile.jpg",
    fileName: "프로필 사진"
  },
  birth: "1990. 03. 26",
  bloodType:"O",
  address:"대전광역시 유성구 문지로 193",
  email: "contact@elice.io",
  phone:"070.4633.2015",
  skill: [{
    name:"HTML",
    link: "https://ko.wikipedia.org/wiki/HTML"
  },
  {
    name:"CSS",
    link: "https://ko.wikipedia.org/wiki/CSS"
  },
  {
    name:"JavaScipt",
    link: "#"
  }],
  activity:[
    "샘성 마케팅 공모전 대상",
    "대학생 봉사 동아리 회장",
    "깨깨오 마케팅 인턴 ㅣ 3개월"
  ]
}

let App = document.querySelector('#App');
const main = new Main(myProfile);
App.innerHTML = `
${Header}
${main.template()}
${Footer}
`;

// function showProfileModal() {
//   // console.log(document.querySelector('.profileModal'));
//   document.querySelector('.profileModal').style.display = 'grid';
// }

// function hideProfileModal() {
//   document.querySelector('.profileModal').style.display = 'none';
// }