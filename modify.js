const home = document.getElementById('home')
const profile = document.getElementById('profile-image')

home.addEventListener('mouseover',function(){
  profile.classList.add('swing');
});

home.addEventListener('mouseout', function(){
  profile.classList.remove('swing');
});
