import SavedFilters from "./savedFilters";

const favLimit = 20;

class FavToys {
  public favList: string[];

  private savedFilters: SavedFilters;

  constructor() {
    this.savedFilters = new SavedFilters();
    this.favList = this.savedFilters.favList;
    this.updateCounter();
  }

  public toggleFav(e: Event): void {
    if (!e.target) return;
    const current = e.target as HTMLElement;
    const parent = current.parentNode as HTMLElement;
    const index: string = current.id;
    if (this.favList.includes(index)) {
      this.favList.splice(this.favList.indexOf(index), 1);
      parent.classList.remove("fav-toy");
    } else if (this.favList.length < favLimit) {
      this.favList.push(index);
      parent.classList.add("fav-toy");
    } else {
      FavToys.showAlertMessage(current.parentNode);
    }
    SavedFilters.setFavToys(this.favList);
    this.updateCounter();
  }

  private static showAlertMessage(node: Node | null): void {
    if (node === null) return;
    const elem = node as HTMLElement;
    elem.querySelector(".fav-limit")?.classList.remove("hide");
    setTimeout(
      () => elem.querySelector(".fav-limit")?.classList.add("hide"),
      1500
    );
  }

  private updateCounter(): void {
    const counter = document.querySelector(".fav-count");
    if (!counter) return;
    counter.textContent = this.favList.length.toString();
  }

  public clearFav(): void {
    this.favList = [];
    this.updateCounter();
    document.querySelectorAll(".fav-toy").forEach((item) => {
      item.classList.remove("fav-toy");
    });
  }
}

export default FavToys;
