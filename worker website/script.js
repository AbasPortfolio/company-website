const menuTrigger = document.querySelector('.menu-trigger'),
      closeTriger = document.querySelector('.close'),
      giveClass = document.querySelector('.site');
menuTrigger.addEventListener('click', function(){
    giveClass.classList.toggle('showmenu')
})
closeTriger.addEventListener('click', function(){
    giveClass.classList.remove('showmenu')
})
// Animated Items on scroll
 const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            entry.target.classList.add('this')
        }
    })
 })
 const boxEllist = document.querySelectorAll('.animate');
 boxEllist.forEach((el) => {
    io.observe(el)
 })