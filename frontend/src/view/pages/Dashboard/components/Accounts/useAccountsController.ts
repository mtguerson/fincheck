import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../DashboardContext/useDashboard";
import { useQuery } from "@tanstack/react-query";
import { bankAccountsService } from "../../../../../app/services/bankAccountsService";

export function UseAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const { data, isFetching } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountsService.getAll,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts: data ?? [],
    openNewAccountModal,
  }
}
