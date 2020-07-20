class SiteFooter extends HTMLElement {
  constructor() {
    super();
    fetch("/footer/footer.html")
      .then(stream => stream.text())
      .then(text => this.innerHTML = text);

    console.log("Footer element loaded.");
  }
}

export { SiteFooter };
