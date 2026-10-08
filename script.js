const errorImages = [
    "images/ethel-cain-cain.png",
    "images/ethel-cain.gif"
]

const ethels = [
  "https://i.postimg.cc/X7NQRH81/ethel1.jpg",
  "https://i.postimg.cc/B6cByHPp/ethel-2.png",
  "https://i.postimg.cc/fRG7RBx8/ethel-cain4.jpg",
  "https://i.postimg.cc/8CdvPDkG/ethel-cain5.jpg",
  "https://i.postimg.cc/j22nX7H2/ethel-cain7.jpg",
  "https://i.postimg.cc/zGKb05gC/ethel8.png",
  "https://i.postimg.cc/Qd190sTb/ethel9.png",
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
     <img src="https://i.postimg.cc/28YPV7xd/ethel-cain-cain.png" class="fortuna-img" alt="Error campo vacío">`;
        return; 
    }
    
    if (!validZodiacs.includes(sign)) {
       
        resultElement.className = "result msg-vacio";
        resultElement.innerHTML = `<strong>Oh- you need to learn how to write... Try again!</strong><br>
      <img src="https://i.postimg.cc/15yj959B/ethel-cain.gif" class="fortuna-img" alt="Error campo vacío">`;
        return;  
    }

    let randomIndex = Math.floor(Math.random() * ethels.length)
    resultElement.className = "result msg-ok";
    resultElement.innerHTML = `✨ <strong>${sign.toUpperCase()}</strong>:<br> <img src="${ethels[randomIndex]}" class="fortuna-img" alt="Tu destino">`;
    
    inputElement.value = "";
}
