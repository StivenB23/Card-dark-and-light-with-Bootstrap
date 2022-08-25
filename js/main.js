let elemento = document.getElementById('checkbox')
elemento.addEventListener("click", setDarkMode(), false);

if(localStorage.getItem('theme')=='dark'){
    setDarkMode();
    if(document.getElementById('checkbox').checked){
        localStorage.setItem('checkbox', true);
    }
}
function setDarkMode(){
    console.log("kh");
let isDark=document.body.classList.toggle('darkmode');
if(isDark){
    setDarkMode.checked = true;
    localStorage.setItem('theme', 'dark')
    document.getElementById('checkbox').setAttribute('checked','checked')
}else{
    setDarkMode.checked = true;
    localStorage.removeItem('theme','dark')
}

}