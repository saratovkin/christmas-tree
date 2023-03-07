import * as noUiType from "nouislider";
import noUiSlider from "./nouislider";
import { MAX_COUNT, MAX_YEAR, MIN_COUNT, MIN_YEAR } from "../misc/constants";

class Slider {
  public countSlider: noUiType.target;

  public yearSlider: noUiType.target;

  constructor() {
    this.countSlider = document.getElementById(
      "count-slider"
    ) as noUiType.target;
    this.yearSlider = document.getElementById("year-slider") as noUiType.target;
    noUiSlider.create(this.countSlider, {
      animate: false,
      start: [+MIN_COUNT, +MAX_COUNT],
      step: 1,
      connect: true,
      range: {
        min: +MIN_COUNT,
        max: +MAX_COUNT,
      },
    });
    noUiSlider.create(this.yearSlider, {
      animate: false,
      start: [+MIN_YEAR, +MAX_YEAR],
      step: 10,
      connect: true,
      range: {
        min: +MIN_YEAR,
        max: +MAX_YEAR,
      },
    });
  }
}

export default Slider;
