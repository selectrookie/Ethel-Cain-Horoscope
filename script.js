const errorImages = [
    "images/ethel-cain-cain.png",
    "images/ethel-cain.gif"
]

const ethels = [
  "images/ethel1.jpg",
  "images/ethel_2.png",
  "images/ethel-cain4.jpg",
  "images/ethel-cain5.jpg",
  "images/ethel-cain7.jpg",
  "images/ethel8.png",
  "images/ethel9.png",
];

const validZodiacs = [
  "aries", "tauro", "gmini", "cancer", "leo", "virgo", 
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
];

function getEthel() {
    const inputElement = document.getElementById("zodiacInput");
    
    const resultElement = document.getElementById("resultadoEthel");

    const sign = inputElement.value.trim().toLowerCase();


    if (!sign) {
        resultElement.className = "result msg-vacio";
        resultElement.innerHTML = `<strong>Girl... type something</strong><br>
      <img src="images/ethel-cain-cain.png" class="fortuna-img" alt="Error campo vacío">`;
        return; 
    }
    
    if (!validZodiacs.includes(sign)) {
       
        resultElement.className = "result msg-vacio";
        resultElement.innerHTML = `<strong>Oh- you need to learn how to write... Try again!</strong><br>
      <img src="images/ethel-cain.gif" class="fortuna-img" alt="Error campo vacío">`;
        return;  
    }

    let randomIndex = Math.floor(Math.random() * ethels.length)
    resultElement.className = "result msg-ok";
    resultElement.innerHTML = `✨ <strong>${sign.toUpperCase()}</strong>:<br> <img src="${ethels[randomIndex]}" class="fortuna-img" alt="Tu destino">`;
    
    inputElement.value = "";
}