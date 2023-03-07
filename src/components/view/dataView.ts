import "./decoration.css";
import "./filter.css";

import IToy from "../interfaces/IToy";

import FavToys from "../app/favToys";
import TreePage from "../app/treePage";

class DataView {
  private treePage: TreePage;

  private favToys: FavToys;

  public constructor() {
    this.favToys = new FavToys();
    this.treePage = new TreePage();
  }

  public setToys(data: IToy[]) {
    this.treePage.setToys(data);
  }

  private drawDecorations(data: IToy[]): void {
    this.showFavToys();
    const decorations: IToy[] = data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const decorationCard: HTMLTemplateElement = <HTMLTemplateElement>(
      document.querySelector("#decorationTemplate")
    );
    decorations.forEach((item: IToy) => {
      const decorationCardClone: HTMLTemplateElement = <HTMLTemplateElement>(
        decorationCard.content.cloneNode(true)
      );
      (
        decorationCardClone.querySelector(
          ".decoration-image"
        ) as HTMLImageElement
      ).src = `toys/${item.num}.png`;
      (
        decorationCardClone.querySelector(
          ".decoration-image"
        ) as HTMLImageElement
      ).alt = item.num;
      decorationCardClone
        .querySelector(".decoration-toggle-fav")
        ?.addEventListener("click", (e) => {
          this.favToys.toggleFav(e);
          this.showFavToys();
        });
      (
        decorationCardClone.querySelector(".decoration-name") as HTMLElement
      ).textContent = item.name;
      (
        decorationCardClone.querySelector(".decoration-count") as HTMLElement
      ).textContent = `Amount: ${item.count}`;
      (
        decorationCardClone.querySelector(".decoration-year") as HTMLElement
      ).textContent = `Year: ${item.year}`;
      (
        decorationCardClone.querySelector(".decoration-shape") as HTMLElement
      ).textContent = `Shape: ${item.shape}`;
      (
        decorationCardClone.querySelector(".decoration-color") as HTMLElement
      ).textContent = `Color: ${item.color}`;
      (
        decorationCardClone.querySelector(".decoration-size") as HTMLElement
      ).textContent = `Size: ${item.size}`;
      (
        decorationCardClone.querySelector(".decoration-is-fav") as HTMLElement
      ).textContent = `Grany's favorite: ${item.favorite ? "Yes" : "No"}`;
      if (this.favToys.favList.includes(item.num)) {
        (
          decorationCardClone.querySelector(".decoration") as HTMLElement
        ).classList.add("fav-toy");
      }
      (
        decorationCardClone.querySelector(
          ".decoration-toggle-fav"
        ) as HTMLElement
      ).id = item.num;
      fragment.append(decorationCardClone);
    });
    document.querySelector(".decorations-container")?.appendChild(fragment);
  }

  private static clearDecorations(): void {
    document.querySelectorAll(".decoration").forEach((item) => {
      item.remove();
    });
  }

  public clearFavToys() {
    this.favToys.clearFav();
  }

  public updateDecorations(data: IToy[]): void {
    DataView.clearDecorations();
    this.drawDecorations(data);
  }

  public showFavToys() {
    this.treePage.setFavList(this.favToys.favList);
    this.treePage.showFavToys();
  }
}

export default DataView;
