'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import {
    ControllerRenderProps,
    DefaultValues,
    FieldValues,
    Path,
    UseFormReturn,
    useForm,
} from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface ValueProps {
    label?: string;
    labelClassName?: string;
    type: 'input' | 'textarea';
    placeholder?: string;
}

export type FieldsType = { [key: string]: ValueProps };

interface FormPageProps<T> {
    fields: FieldsType;
    onSubmit: (_: T) => void;
    submitButton?: ReactNode;
    defaultValues?: DefaultValues<T>;
    formSchema: z.ZodObject<{ [key in Path<T>]: z.ZodType<void> }>;
}

interface FormElementProps<T extends FieldValues> {
    value: ValueProps;
    field: ControllerRenderProps<T>;
}

const FormElement = <T extends FieldValues>({ field, value }: FormElementProps<T>) => {
    if (value.type === 'textarea') {
        return (
            <Textarea
                className="border-[1px] rounded-none  border-primary p-6"
                placeholder={value.placeholder}
                {...field}
                onInput={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.height = 'inherit';
                    const fontSize = parseFloat(
                        window.getComputedStyle(target, null).getPropertyValue('font-size')
                    );
                    target.style.height = `${target.scrollHeight + fontSize}px`;
                }}
            />
        );
    } else if (value.type === 'input') {
        return (
            <Input
                className="border-[1px] rounded-none border-primary p-6"
                placeholder={value.placeholder}
                {...field}
            />
        );
    } else {
        return null;
    }
};

export default function FormPage<T extends FieldValues>({
    fields,
    onSubmit,
    submitButton,
    defaultValues,
    formSchema,
}: FormPageProps<T>) {
    const form: UseFormReturn<T> = useForm<T>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues as DefaultValues<T>,
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-5">
                {Object.entries(fields).map(([key, value], index) => (
                    <FormField
                        control={form.control}
                        key={index}
                        name={key as Path<T>}
                        render={({ field }) => (
                            <FormItem>
                                <>
                                    {value.label && (
                                        <FormLabel className={value.labelClassName}>
                                            {value.label}
                                        </FormLabel>
                                    )}
                                </>
                                <FormControl>
                                    <FormElement field={field} value={value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                {submitButton || <Button type="submit">Submit</Button>}
            </form>
        </Form>
    );
}
