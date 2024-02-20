class TextoACifrar {
    constructor(public text: string) {}
  
    textoDecifrado() {
      // Lógica de descifrado aquí
      // Este ejemplo simplemente invierte los caracteres
      return this.text.split('').reverse().join('');
    }
  }
  
  export default TextoACifrar;
  
 