class SiteNavigation extends HTMLElement {
  constructor() {
    super();
    fetch("/navbar/navbar.html")
      .then(stream => stream.text())
      .then(text => this.innerHTML = text);

    console.log("Navbar element loaded.");
  }
}

export { SiteNavigation };
