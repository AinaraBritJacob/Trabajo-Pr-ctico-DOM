let p= document.querySelector("p")
let T= document.querySelector("h1")
let B= document.querySelector("#B")
let BU= document.querySelector("#BU")
let BUT= document.querySelector("#BUT")
let I = document.querySelector("#I")
let b= document.querySelector("#B")

B.onclick= function() {
    T.textContent="Gato montes"
p.textContent="El gato montés en Argentina (Leopardus geoffroyi) es un pequeño felino solitario y nocturno que habita en diversos ecosistemas, desde selvas hasta áreas semiáridas como la Pampa y la Patagonia. Mide entre 55 y 70 cm, con un pelaje manchado que lo camufla bien. Se alimenta de pequeños mamíferos, aves y reptiles. Está presente en gran parte del país, excepto en las zonas más altas y áridas."
I.src = "Gato montes.jpg "

}

BU.onclick= function() {
    T.textContent="Zorro gris"
p.textContent="El zorro gris (Lycalopex griseus) es un carnívoro pequeño, de aproximadamente 60-70 cm de longitud y entre 4 y 7 kg de peso. Su pelaje es gris con tonos marrones y negros. Es un animal nocturno y solitario, adaptado a diversos hábitats en Argentina. Su dieta es omnívora, incluyendo pequeños mamíferos, aves, frutas e insectos."
I.src = "zorro gris.jpg "

}

BUT.onclick= function() {
    T.textContent="Perdiz montaraz"
p.textContent="La perdiz montaraz (Nothoprocta cinerascens) es un ave terrestre . Mide entre 25 y 30 cm, con plumaje marrón moteado que la camufla bien en su hábitat de matorrales y pastizales. Es conocida por su capacidad de correr rápidamente y alimentarse de semillas, insectos y pequeños invertebrados."
I.src = "Perdiz.jpg "

}
