import ICondition from "../interfaces/ICondition";
import {MIN_COUNT, MAX_COUNT,MIN_YEAR,MAX_YEAR} from "../misc/constants";

class savedFilters {
  public savedCondition: ICondition;

  public favList: string[];

  constructor() {
    this.savedCondition = JSON.parse(
      localStorage.getItem("condition") as string
    ) || {
      count: [MIN_COUNT, MAX_COUNT],
      year: [MIN_YEAR, MAX_YEAR],
      shape: [],
      color: [],
      size: [],
      favorite: false,
      sortType: "name",
      searchKey: "",
    };
    this.favList = JSON.parse(localStorage.getItem("favList") as string) || [];
  }

  static setCondition(condition: ICondition): void {
    localStorage.setItem("condition", JSON.stringify(condition));
  }

  public setDefaultFilter(): void {
    this.savedCondition = {
      count: [MIN_COUNT, MAX_COUNT],
      year: [MIN_YEAR, MAX_YEAR],
      shape: [],
      color: [],
      size: [],
      favorite: false,
      sortType: this.savedCondition.sortType,
      searchKey: this.savedCondition.searchKey,
    };
    savedFilters.setCondition(this.savedCondition);
  }

  public setDefaultFav(): void {
    this.savedCondition.sortType = "name";
    this.savedCondition.searchKey = "";
    savedFilters.setCondition(this.savedCondition);
    savedFilters.setFavToys([]);
  }

  static setFavToys(favList: string[]): void {
    localStorage.setItem("favList", JSON.stringify(favList));
  }
}

export default savedFilters;
