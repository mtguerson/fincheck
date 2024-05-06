import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModalController";

export function NewAccountModal() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal
    errors,
    handleSubmit,
    register,
  } = useNewAccountModalController();

  return (
    <Modal
      title="Nova conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo inicial</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency
              error={errors.initialBalance?.message}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Nome da Conta"
            error={errors.name?.message}
          />

          <Select
            placeholder="Tipo"
            error={errors.type?.message}
            options={[
              {
                value: "INVESTMENT",
                label: "Investimentos",
              },
              {
                value: "CHECKING",
                label: "Conta corrente",
              },
              {
                value: "CASH",
                label: "Dinheiro Físico",
              },
            ]}
          />

          <ColorsDropdownInput
            error={errors.color?.message}
          />
        </div>
      </form>
    </Modal>
  );
}
