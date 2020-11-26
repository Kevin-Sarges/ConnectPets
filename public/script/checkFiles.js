function checkFiles(){
    var image = document.getElementById('photo');
    var fileName = image.value;
    var ext = fileName.substring(fileName.lasIndexOf('.') + 1);

    if (ext == "jpeg" || ext == "png"){
        return true;
    } else {
        return false;
    }
}