var divH1P = document.querySelector('#h1-p');
divH1P.style.height = '300px';
divH1P.style.backgroundColor = 'grey';
divH1P.style.marginTop = '100px';

var body = document.querySelector('body');
body.style.backgroundColor = 'black';
body.style.margin = 'auto';
body.style.width = '80%';

var divH1P_h1 = document.querySelector('#h1-p h1');
divH1P_h1.style.color = 'white';

var divH1P_p = document.querySelector('#h1-p p');
divH1P_p.style.color = 'white';

var language = document.querySelector('html');

class Langue {
    constructor(langue, title ,titre, paragraphe) {
        this.langue = langue;
        this.title = title;
        this.titre = titre;
        this.paragraphe = paragraphe;
    }

    divLangue(){
        return this.langue;
    }

    divTtitle(){
        return this.title;
    }

    divTitre(){
        return this.titre;
    }

    divParagraphe(){
        return this.paragraphe;
    }
}

const fr = new Langue('fr', 'C\'est le titre du site - FR', 'Ceci est un titre en français', 'Ceci est un paragraphe FR');
const en = new Langue('en', 'C\'est le titre du site - FR', 'Ceci est un titre en français', 'Ceci est un paragraphe FR');

divH1P_h1.innerHTML = `${fr.divTitre()}`;
divH1P_p.innerHTML = fr.divParagraphe();
language.setAttribute('lang', en.divLangue());

