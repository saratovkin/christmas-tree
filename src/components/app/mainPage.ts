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
    const toysPage = document.querySelector(".toys-page");
    if (toysPage) toysPage.classList.remove("hide");
    const treePage = document.querySelector(".tree-page");
    if (treePage) treePage.classList.add("hide");
    const toysContainer = document.querySelector(".toys-container");
    if (toysContainer) toysContainer.classList.add("hide");
    this.toysBtn.classList.add("clicked");
    this.treeBtn.classList.remove("clicked");
    this.searchInput.classList.remove("hide");
    this.searchInput.focus();
    this.favCounter.classList.remove("hide");
  }

  private showTreePage(): void {
    const toysPage = document.querySelector(".toys-page");
    if (toysPage) toysPage.classList.add("hide");
    const treePage = document.querySelector(".tree-page");
    if (treePage) treePage.classList.remove("hide");
    const toysContainer = document.querySelector(".toys-container");
    if (toysContainer) toysContainer.classList.remove("hide");
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
