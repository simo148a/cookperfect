
const sections = document.querySelectorAll("section");
console.log(sections);
window.addEventListener("scroll", function(){
  sections.forEach(section => {
    const scrolling = (window.scrollY + window.innerHeight) - section.offsetHeight / 2;
    if(scrolling > section.offsetTop){
      section.classList.add('active');
      console.log(section);
    }
    else{
      section.classList.remove('active');
    }
  });
})
