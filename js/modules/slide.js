export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = this.constructor.elementQuerySelector(wrapper);
    this.slide = this.constructor.elementQuerySelector(slide);
  }

  // Metódo para selecionar os elementos
  static elementQuerySelector(element) {
    return document.querySelector(element);
  }

  onStart(event) {
    event.preventDefault();
    console.log("Click");
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(event) {
    event.preventDefault();
    console.log("Movendo");
  }

  onEnd(event) {
    event.preventDefault();
    console.log("Acabou");
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  // Adicionando ao wrapper oevento de click
  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  // Bind nos metodos padroes 
  // referenciando ao proprio objeto
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }

}