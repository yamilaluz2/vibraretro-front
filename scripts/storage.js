let checkMode = document.getElementById("mode_button");
let bodyElement = document.getElementsByTagName('body');

let mode = localStorage.getItem('mode');
if(mode === '' || mode === undefined || mode === null) {
    mode = 'dark';
}

if(mode === 'light') {
    checkMode.checked = true;
} else {
    checkMode.checked = false;
}

bodyElement.classList.add("mode");

checkMode.addEventListener('change', (evt) => {
    let value = checkMode.value;
    if (value == true) localStorage.setItem('mode', 'light');
    else localStorage.setItem('mode', 'dark')

    bodyElement.classList.remove();
    bodyElement. classList.add(mode);


});