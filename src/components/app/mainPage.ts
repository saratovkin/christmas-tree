import "./main-page.css";

class MainPage {
  private toysBtn: HTMLElement;

  private treeBtn: HTMLElement;

  private searchInput: HTMLInputElement;

  private favCounter: HTMLElement;

  public constructor() {
    this.toysBtn = document.getElementById("toys-button") as HTMLElement;
    this.treeBtn = document.getElementById("tree-button") as HTMLElement;
    this.searchInput = document.querySelector(".search") as HTMLInputElement;
    this.favCounter = document.querySelector(".fav-counter") as HTMLElement;
  }

  private showToysPage(): void {
    document.querySelector(".toys-page")?.classList.remove("hide");
    document.querySelector(".tree-page")?.classList.add("hide");
    document.querySelector(".toys-container")?.classList.add("hide");
    this.toysBtn.classList.add("clicked");
    this.treeBtn.classList.remove("clicked");
    this.searchInput.classList.remove("hide");
    this.searchInput.focus();
    this.favCounter.classList.remove("hide");
  }

  private showTreePage(): void {
    document.querySelector(".toys-page")?.classList.add("hide");
    document.querySelector(".tree-page")?.classList.remove("hide");
    document.querySelector(".toys-container")?.classList.remove("hide");
    this.toysBtn.classList.remove("clicked");
    this.treeBtn.classList.add("clicked");
    this.searchInput.classList.add("hide");
    this.favCounter.classList.remove("hide");
  }

  public initNavigation() {
    this.toysBtn.addEventListener("click", () => {
      this.showToysPage();
    });
    this.treeBtn.addEventListener("click", () => {
      this.showTreePage();
    });
    this.searchInput.addEventListener("input", () => {
      this.showToysPage();
    });
  }
}

export default MainPage;
