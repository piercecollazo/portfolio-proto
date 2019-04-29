window.onload = init;

function init(){
  document.querySelector('#home-button')
    .addEventListener('click', displayHome)
  document.querySelector('#resume-button')
    .addEventListener('click', displayResume);

  document.querySelector('#contact-submit')
    .addEventListener('click', contact);

}

function displayHome(event){
  event.preventDefault();
  clearResume();
  document.querySelector('#content').className = 'container-fluid'
  document.querySelector('#resume-page').className = 'container-fluid d-none'
}

// This function uses the main page to cycle
function displayResume(event){
  event.preventDefault();
  document.querySelector('#content').className = 'container-fluid d-none'
  document.querySelector('#resume-page').className = 'container-fluid'
  const employMother = document.querySelector('#resume-mother');
  const skillMother = document.querySelector('#skills-mother');
  if(employMother.hasChildNodes() || skillMother.hasChildNodes()){
    clearResume();
    for(let i = 0; i < resume.length; i++){
      resumeList(i);      
    }
  }else{
    for(let i = 0; i < resume.length; i++){
      resumeList(i);      
    }
  }
}

function resumeList(i){
  // Basic code for making a list within a list
  let employMother = document.querySelector('#resume-mother');
  let newLine = document.createElement('li');
  let newList = document.createElement('ul');
  let skillMother = document.querySelector('#skills-mother');
  let newSkillLine = document.createElement('li');
  let newSkillList = document.createElement('ul');
  let newListTrait = document.createElement('ul');


  // code for the lines of child list for the employment history
  let nameLine = document.createElement('li')
        nameLine.innerText = resume[i].company;
  let posLine = document.createElement('li')
        posLine.innerText =resume[i].position;
  let timeLine = document.createElement('li')
        timeLine.innerText =resume[i].time;

  // Employment history lists
  employMother.appendChild(newLine);
  newLine.appendChild(newList);
  newList.appendChild(nameLine);
  newList.appendChild(posLine);
  newList.appendChild(timeLine);

  // code for the lines of child list for the skills
  if(skills[i] != undefined){
    let skillName = document.createElement('li')
        skillName.innerText = skills[i].name
    let skillSumm = document.createElement('li')
        skillSumm.innerText = skills[i].summary
    let skillTrait1 = document.createElement('li')
        skillTrait1.innerText = skills[i].traits.trait1
    let skillTrait2 = document.createElement('li')
        skillTrait2.innerText = skills[i].traits.trait2
    let skillTrait3 = document.createElement('li')
        skillTrait3.innerText = skills[i].traits.trait3
  // Skills list
    skillMother.appendChild(newSkillLine);
    newSkillLine.appendChild(newSkillList);
    newSkillList.appendChild(skillName);
    newSkillList.appendChild(skillSumm);
    newSkillList.appendChild(newListTrait);
    newListTrait.appendChild(skillTrait1);
    newListTrait.appendChild(skillTrait2);
    newListTrait.appendChild(skillTrait3);
  }

}

function contact(event){
  event.preventDefault();
  contactTest.name = document.querySelector('#name-field').value;
  contactTest.email = document.querySelector('#email-field').value;
  contactTest.message = document.querySelector('#message-field').value;

  console.log(contactTest);

  document.querySelector('#thank').innerText = "Thank you for reaching out! I'll be in touch!";

}

function clearResume(){
  let employMother = document.querySelector('#resume-mother');
  let skillMother = document.querySelector('#skills-mother')
  while(employMother.hasChildNodes()){
    employMother.removeChild(employMother.firstChild)
  }
  while(skillMother.hasChildNodes()){
    skillMother.removeChild(skillMother.firstChild)
  }
}