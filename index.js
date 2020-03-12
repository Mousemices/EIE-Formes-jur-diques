const info = [
    ['autonoma', 'Autònoma', 'Per construir una empresa autònoma necessita de donar alta a la SS pagant una quota mensual dependrà del que volen cotitzar.', 'Una perosona.', 'Per iniciar amb el treball de compte propi, no caldrà capital.',
     'Es responen amb el seu patrimoni personal (en cas estar casat, afactaría a el matrimoni).', 'Haurà de tenir en compte IRPF, el seu rendiment per activitat ecenómica.'],
    ['comunitat', 'Comunitat de béns','Grup de persones que ostenten la propietat de una cosa.','Mínim 2 persones per constituir-se com empresa.', 'Per iniciar amb el treball de compte propi, no caldrà capital.', 'Es responen amb el seu patrimoni personal.', 
    'Haurà de tenir en compte IRPF, el seu rendiment per activitat ecenómica.'],
    ['sl', 'Societat de responsabilitat limitada','És el tipus de societat més estès, sent molt utilitzat per petits empresaris autònoms que d\'aquesta manera limiten la seva responsabilitat a l\'capital aportat.','Una perosona.',
    'Cal capital inicial limitat (Mínim 3000 €).','Es respondria amb el capital aportat.','Haurà d\'estar subjectes a l\'impost de societats, el qual el valor serà més gran que l\'IRPF.'],
    ['sa','Societat anònima','Societat mercantil els titulars ho poden ser virtut d\'una acció amb el capital social a través de títols o acciones.Las accions poden diferenciar-se entre si per la seva diferent valor nominal o pels diferents privilegis vinculats a aquestes.',
    'Una perosona.','Cal capital inicial limitat (Mínim 6000€).','Es respondria amb el capital aportat','Haurà d\'estar subjectes a l\'impost de societats, el qual el valor serà més gran que l\'IRPF.'],
    ['cooperativa','Cooperativa','Societat constituïda per persones que s\'associen en règim de lliure adhesió i baixa voluntària, per a realitzar activitats empresarials, encaminades a satisfer les seves necessitats i aspiracions econòmiques i socials, amb estructura i funcionament democràtic.',
    'Cooperatives de 1r grau: Mínim 3 socis, 2n grau: 2 socis.', 'Mínim fixat en els estatuts.','Es respondria amb el capital aportat.','Impost sobre societats (Règim especial).'],
    ['slnova','Societat limitada Nova empresa','És una especialitat de la societat limitada.','Màxim 5 socis.','Mínim 3000 €, màxim 120000 €.','Es respondria amb el capital aportat.','Impost sobre societats.']
]
const main = document.getElementById('main');
for (let i = 0; i < info.length; i++) {
    let div = document.createElement('DIV');
    div.style.width='80%';
    div.style.margin='0 auto';
    div.style.marginTop='1rem';
    div.style.border='1px solid #13aa52';
    div.style.padding='2rem';
    div.style.boxShadow='box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1);';
    div.setAttribute("id", info[i][0]);
    for (let j = 0; j < info[i].length; j++) {
        if (j != 0) {
            if(j == 1){
                let div1 = document.createElement('DIV');
                let p = document.createElement('H1');
                p.style.padding = '1rem';
                p.innerHTML = (info[i][j]);
                div1.appendChild(p);
                div.appendChild(div1);
                main.appendChild(div);

            }
            else{
                let div1 = document.createElement('DIV');
                let p = document.createElement('P');
                p.style.padding = '1rem';
                p.innerHTML = (info[i][j]);
                div1.appendChild(p);
                div.appendChild(div1);
                main.appendChild(div);
            }
            
        }

    }

}