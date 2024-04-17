import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function UseAccountsController() {
  const windowWidth = useWindowWidth();
  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
  }
}
