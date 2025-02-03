let generate = document.querySelector(".generate");

function generateCode() {
    let inputValue = document.querySelector(".input").value;
    if(inputValue.trim() === "") return;
    
    let qrCode = document.querySelector(".qr-code");
    generate.classList.add("loading");
    generate.textContent = "Generating QR code...";

    let qrCodeImg = document.querySelector(".image");

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrCodeImg.addEventListener("load", () => {
        qrCode.style.display = "block";
        generate.classList.remove("loading");
        generate.textContent = "Generate QR code";    
    })  
}