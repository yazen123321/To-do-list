const eingabe = document.getElementById('aufgabeEingabe');
const hinzufuegenBtn = document.getElementById('hinzufuegenBtn');
const liste = document.getElementById('aufgabenListe');

let aufgaben = JSON.parse(localStorage.getItem('aufgaben')) || [];

function anzeigenAufgaben() {
    liste.innerHTML = '';
    aufgaben.forEach((aufgabe, index) => {
        const li = document.createElement('li');
        li.textContent = aufgabe;

        const loeschenBtn = document.createElement('button');
        loeschenBtn.textContent = '✖';
        loeschenBtn.onclick = () => loeschenAufgabe(index);

        li.appendChild(loeschenBtn);
        liste.appendChild(li);
    });
    localStorage.setItem('aufgaben', JSON.stringify(aufgaben));
}

function hinzufuegenAufgabe() {
    const text = eingabe.value.trim();
    if(text){
        aufgaben.push(text);
        eingabe.value = '';
        anzeigenAufgaben();
    }
}

function loeschenAufgabe(index) {
    aufgaben.splice(index, 1);
    anzeigenAufgaben();
}

hinzufuegenBtn.addEventListener('click', hinzufuegenAufgabe);
eingabe.addEventListener('keypress', e => {
    if(e.key === 'Enter') hinzufuegenAufgabe();
});

anzeigenAufgaben();
