const firsttab = document.getElementById('firsttab');
const secondtab= document.getElementById('secondtab');
firsttab.addEventListener('input', ()  => {
    if( firsttab.ariaValueMax.trim() !== '')
    {
        secondtab.style.display = 'block';
    }else{
        secondtab.style.display = 'none';
    }
});