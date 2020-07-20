class SorterGrid extends HTMLElement {
  constructor() {
    super();
    fetch("/sorter/sortergrid/sortergrid.html")
      .then(stream => stream.text())
      .then(text => this.innerHTML = text);

    console.log("Grid element loaded.");
  }
}

export { SorterGrid };
