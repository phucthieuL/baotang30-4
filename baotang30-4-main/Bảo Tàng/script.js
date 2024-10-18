
const speed = 150;
const duration = 2000;
const textAnim = (id, text, index = 0) => {
    let i = index;
    const element = document.getElementById(id);
    element.innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
        i = 0;
        setTimeout(() => {
            element.innerHTML = '';
            textAnim(id, text);
        }, duration);
    } else {
        setTimeout(() => textAnim(id,text,i), speed);
    }
};


function navpage(pagenum) {
    window.location.href = "trangbaotang-"+pagenum+".html";
}

function navhome() {
    window.location.href = "index.html";
}