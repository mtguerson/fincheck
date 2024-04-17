import { useState } from "react";

export function UseAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
  }
}
