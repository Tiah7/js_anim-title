const title = document.getElementById('title');
let counter = 0;

function changeTitle() {
    if (counter == 0) {
        title.innerHTML = 'je suis un designer web';
        counter = 1;
    } else if (counter ==1) {
        title.innerHTML = 'je sais concevoir';
        counter = 2;
    } else if (counter ==2) {
        title.innerHTML = 'et développer';
        counter = 3;
    } else if (counter ==3) {
        title.innerHTML = 'des sites web';
        counter = 4;
    } else if (counter ==4) {
        title.innerHTML = 'Salut !';
        counter = 0;
    }
}

setInterval(changeTitle, 3000);