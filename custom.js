
let section = document.getElementsByTagName('section');
let pointButton = document.querySelectorAll('.pointWrap li');
let sectionNumber = 0;
let totalNumber = section.length;

for (let i = 0; i < pointButton.length; i++) {
  (function(index){
    pointButton[index].onclick = function(){
      sectionNumber = index;
      sectionChange();
      window.scrollTo({
        top: section[sectionNumber].offsetTop,
        behavior:'smooth',
      })
    }
  })(i);
}

window.addEventListener('scroll', function(event){
  let scroll = this.scrollY;

  for(let i = 0; i < totalNumber; i++) {
    if(scroll > section[i].offsetTop - window.outerHeight/1.5 && scroll < section[i].offsetTop - this.window.outerHeight/1.5 + section[i].offsetHeight){
      sectionNumber = i;
      break;
    }
  }
  sectionChange();
})

function sectionChange() {
  for(let i = 0; i < totalNumber; i++) {
    section[i].classList.remove('active');
    pointButton[i].classList.remove('active');
  }
  section[sectionNumber].classList.add('active');
  pointButton[sectionNumber].classList.add('active');
}

sectionChange();