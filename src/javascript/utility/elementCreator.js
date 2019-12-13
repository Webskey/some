export default class {
  constructor() {}

  static createDivWithClass(innerHtml, className) {
    const logo = document.createElement('div');
    logo.classList.add(className);
    logo.innerHTML = innerHtml;
    document.body.appendChild(logo);
  }

  static createDivWithId(innerHtml, id) {
    const logo = document.createElement('div');
    logo.id = id;
    logo.innerHTML = innerHtml;
    document.body.appendChild(logo);
  }
}
