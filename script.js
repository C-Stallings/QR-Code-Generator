const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
createButton = wrapper.querySelector(".form button"),
qrImage = wrapper.querySelector(".qr-code img");


createButton.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; //if the input is empty then return from this point
    createButton.innerText = "Grabbing QA Code...";
    //getting a QR code of user entered value using the qr-server
    //api and passing the api returned img src to qrImage
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImage.addEventListener("load", () => { //once QA code image loaded
        wrapper.classList.add("active"); 
        createButton.innerText = "Create QR Code";   
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active");
    }
});