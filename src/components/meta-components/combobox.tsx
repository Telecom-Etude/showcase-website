import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export interface ComboLabels {
    [key: number]: string;
}

export interface ManyComboBoxProps {
    limit: number;
    vocab: {
        selectorMessage: string;
        title: string;
        empty: string;
    };
    selectedKeys: number[];
    addRemoveKey: (v: number) => void;
    items: ComboLabels;
}

export const ManyComboBox = ({ selectedKeys, addRemoveKey, items, vocab: { title, selectorMessage, empty }, limit }: ManyComboBoxProps) => {
    const [open, setOpen] = useState(false);
    const entries = Object.entries(items).map(([key, value]) => [Number(key), value]) as [number, string][];
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open}>
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
                            {entries.map(([id, name], i) => (
                                <CommandItem
                                    key={i}
                                    value={name}
                                    onSelect={() => addRemoveKey(id)}
                                    className={selectedKeys.length >= limit && !selectedKeys.includes(id) ? "cursor-not-allowed" : "cursor-pointer"}
                                >
                                    <Checkbox
                                        className={cn("mr-2 h-4 w-4", selectedKeys.includes(id) ? "opacity-100" : "opacity-0")}
                                        checked={selectedKeys.includes(id)}
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
    selectKey
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
                                        selectKey(currentKey === newKey ? null : currentKey);
                                        setOpen(false);
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
