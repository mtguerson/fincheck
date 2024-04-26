import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuItem } from "../../../../components/DropdownMenu";

export function Fab() {
  return (
    <div className="fixed right-4 bottom-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className="bg-teal-900 w-12 h-12 rounded-full flex items-center justify-center"
          >
            <PlusIcon className="w-6 h-6" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenuItem>
            Nova Despesa
          </DropdownMenuItem>

          <DropdownMenuItem>
            Nova Receita
          </DropdownMenuItem>

          <DropdownMenuItem>
            Nova Conta
          </DropdownMenuItem>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
