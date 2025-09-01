import type { FC } from 'react';
type LabelProps = {
    hasLabel: boolean;
    hasDescription: boolean;
    htmlFor: string;
    isRequired?: boolean;
    host: HTMLElement;
    label: string;
    description?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
};
export declare const Label: FC<LabelProps>;
export {};
