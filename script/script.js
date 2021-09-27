function verificar(inputText, maxChars, outputText){
    if(inputText.value.length == maxChars + 1){
        inputText.value = inputText.value.substring(0,maxChars)
    }
    outputText.innerHTML = "Caracteres disponibles: " + (maxChars-inputText.value.length);
}
 
customElements.define("hola-mundo", class extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = "¡Hola Mundo!";
    }
})
