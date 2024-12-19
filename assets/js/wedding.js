function bukaUndangan(){
    const s1 = document.querySelector('#section-1');
    const s2 = document.querySelector('#section-2');
    const s3 = document.querySelector('#section-3');
    const s4 = document.querySelector('#section-4');
    const s5 = document.querySelector('#section-5');
    const s6 = document.querySelector('#section-6');
    const s7 = document.querySelector('#section-7');
    const s8 = document.querySelector('#section-8');
    const s9 = document.querySelector('#section-9');
    const s10 = document.querySelector('#section-10');
    const s11 = document.querySelector('#section-11');
    s1.style.display = 'none';
    s2.style.display = 'block';
    s3.style.display = 'block';
    s4.style.display = 'block';
    s5.style.display = 'block';
    s6.style.display = 'block';
    s7.style.display = 'block';
    s8.style.display = 'block';
    s9.style.display = 'block';
    s10.style.display = 'block';
    s11.style.display = 'block';

    const musik = document.querySelector('#kotak-musik');
    musik.style.display = 'block';
    const lagu = document.querySelector('#lagu');
    lagu.play();
}

function putarLagu(){
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');

    if(lagu.paused){
        lagu.play();
        tombol.src = 'assets/img/musicoff.png';
    }else{
        lagu.pause();
        tombol.src = 'assets/img/musicon.png';
    }
}

function nav(){
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

//function list(){
//    const navBar = document.querySelector(".nav-bar");
  //  const profile = document.querySelector("#profile");

    //if (navBar.add) {
        // user has scrolled up
      //  document.querySelector('.navbar').classList.add('show');
      //} else {
        // user has scrolled down
        //document.querySelector('#profile').classList.remove('show');
      //}
//}