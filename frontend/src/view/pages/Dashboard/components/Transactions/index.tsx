import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";

export function Transactions() {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10">
      <header className="">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>
      </header>

      <div className="mt-6">
        <Swiper>
          <SwiperSlide>
            Jan
          </SwiperSlide>
          <SwiperSlide>
            Fev
          </SwiperSlide>
          <SwiperSlide>
            Mar
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mt-4">
        Conteúdo
      </div>
    </div>
  );
}
