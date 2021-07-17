function shadowizardlib(options){
    let images = document.querySelectorAll('.shadowizardlib');
    if(options.shadow_type=== "hard")
        options.shadow_type = "0px";
    else    
        options.shadow_type = "15px";

    images.forEach(element => {
        element.style.boxShadow = `10px 10px ${element.shadow_type} 1px rgba(0,0,0,0.12)`;
        if(options.padding){
            element.style.padding = '1em';
        }
    });
}
module.exports.shadowizardlib = shadowizardlib;