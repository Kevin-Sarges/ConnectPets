function donate(){
    window.location.href = '/donate';
}

function adoption(){
    window.location.href = '/adoption';
}

function whatsapp(){
    window.location.href = `https://api.whatsapp.com/send?1=pt_BR&phone={{pet.whatsapp}}&text=Desejo adotar o pet`;
}