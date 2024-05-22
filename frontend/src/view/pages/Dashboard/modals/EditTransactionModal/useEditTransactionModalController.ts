import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useBankAccounts } from "../../../../../app/hooks/useBankAccount";
import { useCategories } from "../../../../../app/hooks/useCategories";
import { useMemo } from "react";
import { Transaction } from "../../../../../app/entities/Transaction";

const schema = z.object({
  value: z.union([
    z.string().nonempty("Informe o valor"),
    z.number(),
  ]),
  name: z.string().nonempty("Informe o nome"),
  categoryId: z.string().nonempty("Informe o categoria"),
  bankAccountId: z.string().nonempty("Informe o categoria"),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController(
  transaction: Transaction | null,
) {

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction.date) : new Date(),
    }
  });

  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();

  const handleSubmit = hookFormSubmit(async data => {
    console.log(data);
  });

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === transaction?.type);
  }, [categoriesList, transaction]);

  return {
    register,
    control,
    errors,
    handleSubmit,
    accounts,
    categories,
    isLoading: false,
  };
}
