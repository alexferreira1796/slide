export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = this.constructor.elementQuerySelector(wrapper);
    this.slide = this.constructor.elementQuerySelector(slide);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0
    }
  }

  // Metódo para selecionar os elementos
  static elementQuerySelector(element) {
    return document.querySelector(element);
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = ( this.dist.startX - clientX ) * 1.5;
    return this.dist.finalPosition - this.dist.movement; 
  }

  onStart(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(event) {
    event.preventDefault();
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    event.preventDefault();
    this.wrapper.removeEventListener('mousemove', this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
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