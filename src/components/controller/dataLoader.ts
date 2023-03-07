import Loader from "./loader";

class DataLoader extends Loader {
  public constructor() {
    super(
      "https://raw.githubusercontent.com/saratovkin/json-data/main/decorations.json"
    );
  }
}

export default DataLoader;
