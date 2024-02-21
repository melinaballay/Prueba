class TextoACifrar {
    constructor(public text: string) {}
  
    textoDecifrado() {
     
      // Este ejemplo simplemente invierte los caracteres
      return this.text.split('').reverse().join('');
    }
  }
  
  export default TextoACifrar;
  
 