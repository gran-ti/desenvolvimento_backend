const { PI } = Math;

//module.exports = class Circulo {
export class Circulo {
   constructor(raio) {
      this.raio = raio;
   }
   area = () => PI * this.raio ** 2; 
   perimetro = () => 2 * PI * this.raio;
};
