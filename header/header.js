class SiteHeader extends HTMLElement {
  constructor() {
    super();
    fetch("/header/header.html")
      .then(stream => stream.text())
      .then(text => this.innerHTML = text);

    console.log("Header element loaded.");
  }
}

export { SiteHeader };
