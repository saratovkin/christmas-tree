import DataLoader from "./dataLoader";
import IToy from "../interfaces/IToy";

class AppController extends DataLoader {
  public async getData(): Promise<IToy[]> {
    const data: IToy[] = await super.load() || [];
    return data;
  }
}

export default AppController;
