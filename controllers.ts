import { PelisCollection, Peli } from "./models";

class PelisController {
  pelis: PelisCollection;
  constructor() {
    this.pelis = new PelisCollection();
  }
  get(options) {
    if (options.id) {
      return this.pelis.getById(options.id);
    } else if (options.search.title && options.search.tag) {
      return this.pelis.search({
        title: options.search.title,
        tag: options.search.tag,
      });
    } else if (options.search.title) {
      return this.pelis.search(options.search.title);
    } else if (options.search.tag) {
      return this.pelis.search(options.search.tag);
    } else {
      return this.pelis.getAll();
    }
  }
  add(peli: Peli) {
    return this.pelis.add(peli);
  }
}

export { PelisController };

// const nuevaPelisController = new PelisController();

// const getId = nuevaPelisController.get({ id: 2 });
// console.log(getId);
