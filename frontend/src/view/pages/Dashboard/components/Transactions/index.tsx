import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { useTransactionsController } from "./useTransactionsController";
import { cn } from "../../../../../app/utils/cn";
import Spinner from "../../../../components/Spinner";
import emptyStateImage from "../../../../../assets/empty-state.svg";
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { FiltersModal } from "./FiltersModal";
import { formatDate } from "../../../../../app/utils/formatDate";

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    handleChangeFilters,
    filters
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      {isInitialLoading && (
        <div className="items-center justify-center flex flex-1">
          <Spinner className="w-10 h-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />
          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />

              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>
          </header>

          <div className="mt-6 relative">
            <Swiper
              slidesPerView={3}
              centeredSlides
              initialSlide={filters.month}
              onSlideChange={swiper => {
                handleChangeFilters("month")(swiper.realIndex);
              }}
            >
              <SliderNavigation />

              {MONTHS.map((month, index) => (
                <SwiperSlide key={month}>
                  {({ isActive }) => (
                    <SliderOption
                      isActive={isActive}
                      month={month}
                      index={index}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <Spinner className="w-10 h-10" />
              </div>
            )}

            {(!hasTransactions && !isLoading) && (
              <div className="flex flex-col items-center justify-center h-full">
                <img src={emptyStateImage} alt="Empty stat" />
                <p className="text-gray-700">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {(hasTransactions && !isLoading) && transactions.map((transaction) =>  (
              <div
                key={transaction.id}
                className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4"
              >
                <div className="flex-1 flex items-center gap-3">
                  <CategoryIcon
                    type={transaction.type === "EXPENSE" ? "expense" : "income"}
                    category={transaction.category?.icon}
                  />

                  <div>
                    <strong className="font-bold tracking-[-0.5px] block">
                      {transaction.name}
                    </strong>
                    <span className="text-sm text-gray-600">
                      {formatDate(new Date(transaction.date))}
                    </span>
                  </div>
                </div>

                <span className={cn(
                  "tracking-[-0.5px] font-medium",
                  transaction.type === "EXPENSE" ? "text-red-800" : "text-green-800",
                  !areValuesVisible && "blur-sm"
                )}>
                  {transaction.type === "EXPENSE" ? "-" : "+"}
                  {formatCurrency(transaction.value)}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
