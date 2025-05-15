import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import Link from 'next/link';

const buttonVariantsStyles = {
    default: 'call2action text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground call',
    link: 'text-primary underline-offset-4 hover:underline',
    call2action:
        'font-medium flex flex-col justify-center text-primary-foreground rounded-full call2action min-w-[150px]',
};
export const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: buttonVariantsStyles,
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

interface VariantLinkProps {
    className?: string;
    variant: keyof typeof buttonVariantsStyles | null | undefined;
    href: string;
    children: React.ReactNode;
    btnCn?: string;
    target?: React.HTMLAttributeAnchorTarget;
}

export const VariantLink = ({
    target,
    className,
    btnCn,
    variant,
    href,
    children,
}: VariantLinkProps) => (
    <Button variant={variant} className={btnCn} asChild>
        <Link href={href} target={target} passHref>
            <span className={className}>{children}</span>
        </Link>
    </Button>
);

// reading properties of navigations and pages on home page.
