import React from 'react';
import * as RdxSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <RdxSelect.Item
      className={cn(
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <RdxSelect.ItemText>{children}</RdxSelect.ItemText>
      <RdxSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </RdxSelect.ItemIndicator>
    </RdxSelect.Item>
  );
});

export function Select() {
  return (
    <RdxSelect.Root>
      <RdxSelect.Trigger
        className={cn(
          "bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 focus:border-gray-800 transition-all outline-none text-left relative",
          //  error && "!border-red-900",
          //  className,
        )}
      >
        <RdxSelect.Value />

        <RdxSelect.Icon className="absolute right-3">
          <ChevronDownIcon className="w-6 h-6 text-gray-800" />
        </RdxSelect.Icon>
      </RdxSelect.Trigger>

      <RdxSelect.Portal>
        <RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
          <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
            <ChevronUpIcon />
          </RdxSelect.ScrollUpButton>
          <RdxSelect.Viewport className="p-[5px]">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
          </RdxSelect.Viewport>
          <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
            <ChevronDownIcon />
          </RdxSelect.ScrollDownButton>
        </RdxSelect.Content>
      </RdxSelect.Portal>
    </RdxSelect.Root>
  );
}
