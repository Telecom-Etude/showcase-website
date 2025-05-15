import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface ManyComboBoxProps {
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

export const ManyComboBox = ({
    selected,
    addRemove,
    items,
    vocab: { title, selectorMessage, empty },
    limit,
}: ManyComboBoxProps) => {
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
                                    className={
                                        selected.length >= limit && !selected.includes(name)
                                            ? 'cursor-not-allowed'
                                            : 'cursor-pointer'
                                    }
                                >
                                    <Checkbox
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            selected.includes(name) ? 'opacity-100' : 'opacity-0'
                                        )}
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
