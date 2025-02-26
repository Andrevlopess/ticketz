
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { Option } from "react-day-picker";
import { Badge } from "./badge";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface Option {
  label: string;
  value: string;
}
interface MultipleSelectProps {
  title?: string
  maxVisibleOptions?: number
  options: Option[];
  selectedOptions: Option[];
  onChange: (data: Option[]) => void
}

export default function MultipleSelect({ options, selectedOptions, title, maxVisibleOptions = 2, onChange }: MultipleSelectProps) {


  const [selectedValues, setSelectedValues] = useState<Option[]>(selectedOptions)


  useEffect(() => {
    onChange(selectedValues)
  }, [selectedValues])


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex px-3 py-2 justify-start w-64 h-full">
          {selectedValues?.length > 0 ? (
            <>
              {/* <Separator orientation="vertical" className="mx-2 h-4" /> */}
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal md:hidden"
              >
                {selectedValues.length} {title ?? 'options'} selected
              </Badge>

              <div className="hidden gap-2 md:flex flex-wrap w-full">

                {selectedValues
                  .slice(0, maxVisibleOptions)
                  .map((option) => (
                    <Badge
                      variant="secondary"
                      key={option.value}
                      className="rounded-sm font-normal truncate"
                    >
                      {option.label}
                    </Badge>
                  ))}
                {
                  selectedValues.length > maxVisibleOptions && (
                    <Badge
                      variant="secondary"
                      className="rounded-sm font-normal"
                    >
                      +{selectedValues.length - maxVisibleOptions}
                    </Badge>
                  )}
              </div>
            </>
          ) : (

            <div className="flex justify-between w-full items-center">
              <span>Select {title ?? 'option'}</span>
              <CirclePlus className="h-4 w-4 opacity-50" />
            </div>

          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-64 p-0" align="start">
        <Command>
          <CommandInput placeholder={`Search for ${title ?? 'option'}`} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {

                const isSelected = selectedValues.some(item => item.value === option.value);


                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {

                      if (isSelected) {
                        setSelectedValues(prev => prev.filter(item => item.value !== option.value))
                      } else {
                        setSelectedValues(prev => [...prev, option])
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check />
                    </div>

                    <span className="truncate">{option.label}</span>

                  </CommandItem>
                )
              })}
            </CommandGroup>
            {selectedOptions.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => setSelectedValues([])}
                    className="justify-center text-center"
                  >
                    Clear {title ?? 'options'}
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover >
  );
}
