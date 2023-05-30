// if(window.hist)
let prevScrollpos = window.pageYOffset;
// alert(height);
window.onscroll = function () {
  // var height = document.getElementById("social").offsetHeight;
  const currentScrollPos = window.pageYOffset;

  // if (currentScrollPos > 500) {
  //     document.getElementById("teste").classList.add('banner-teste');
  //     // document.querySelector(".scroll-top").style.display = 'block';
  // }else{
  //     document.getElementById("teste").classList.remove('banner-teste');
  //     // document.querySelector(".scroll-top").style.display = 'none';
  // }
  if (!document.getElementById('social')) { return 0; }

  if (prevScrollpos > currentScrollPos) {
    document.getElementById('social').style.marginTop = '0';
  } else {
    document.getElementById('social').style.marginTop = `-${39}px`;
  }

  prevScrollpos = currentScrollPos;

  return 0;
};
