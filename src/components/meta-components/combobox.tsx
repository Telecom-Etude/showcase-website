import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface ManyComboBoxProps {
    limit: number;
    vocab: {
        selectorMessage: string;
        title: string;
        empty: string;
    };
    selected: string[];
    addRemove: (v: string) => void;
    items: string[];
}

export const ManyComboBox = ({ selected, addRemove, items, vocab: { title, selectorMessage, empty }, limit }: ManyComboBoxProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-full">
                    {title}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder={selectorMessage} />
                    <CommandList>
                        <CommandEmpty>{empty}</CommandEmpty>
                        <CommandGroup>
                            {items.map((name, i) => (
                                <CommandItem
                                    key={i}
                                    value={name}
                                    onSelect={() => addRemove(name)}
                                    className={selected.length >= limit && !selected.includes(name) ? "cursor-not-allowed" : "cursor-pointer"}
                                >
                                    <Checkbox
                                        className={cn("mr-2 h-4 w-4", selected.includes(name) ? "opacity-100" : "opacity-0")}
                                        checked={selected.includes(name)}
                                    />
                                    {name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export const Combobox = ({
    items,
    emptyMessage,
    currentKey,
    selectKey,
}: {
    currentKey: string | null;
    selectKey: (_: string | null) => void;
    emptyMessage: string;
    items: [{ key: string; value: string }];
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {currentKey ? items.find(item => item.key === currentKey)?.value : "Select framework..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {items.map((item, i) => (
                                <CommandItem
                                    key={i}
                                    value={item.key}
                                    onSelect={newKey => {
                                        selectKey(currentKey === newKey ? null : newKey);
                                    }}
                                >
                                    <Check className={cn("mr-2 h-4 w-4", currentKey === item.key ? "opacity-100" : "opacity-0")} />
                                    {item.value}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export const DisplayItems = ({ items, removeItem }: { items: string[]; removeItem: (item: string) => void }) => (
    <div className="flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-2 items-center">
        {items.map((item, i) => (
            <div key={i} className="flex space-x-2 items-center bg-muted rounded-full w-fit px-2">
                <p>{item}</p>
                <Button variant="ghost" onClick={() => [removeItem(item)]} className="px-0">
                    <X />
                </Button>
            </div>
        ))}
    </div>
);
