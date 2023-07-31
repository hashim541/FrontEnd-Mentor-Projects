function showMenu() {
    document.querySelector('nav').classList.add('right-trans');
    document.querySelector('.opac').classList.add('opacvis');
  }
  function closeMenu() {
    document.querySelector('nav').classList.remove('right-trans');
    document.querySelector('.opac').classList.remove('opacvis');
  }
  function features(){
    
    document.querySelector('.featu-div').classList.toggle('display-now');
    document.querySelector('.featu-div').classList.toggle('index');
    document.querySelector('.featu-div').classList.toggle('margins1');
    document.querySelector('.fimg').classList.toggle('rot');
  }
  function company(){
    
    document.querySelector('.comp-div').classList.toggle('display-now');
    document.querySelector('.comp-div').classList.toggle('index');
    document.querySelector('.comp-div').classList.toggle('margins1');
    document.querySelector('.cimg').classList.toggle('rot');
  }