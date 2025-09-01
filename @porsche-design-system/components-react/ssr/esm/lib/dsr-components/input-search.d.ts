import { Component } from 'react';
/**
 * @slot {"name": "label", "description": "Shows a label. Only [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content) is allowed."}
 * @slot {"name": "description", "description": "Shows a description. Only [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content) is allowed."}
 * @slot {"name": "message", "description": "Shows a state message. Only [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content) is allowed."}
 * @slot {"name": "start", "description": "Shows content at the start of the input (e.g. icon)."}
 * @slot {"name": "end", "description": "Shows content at the end of the input (e.g. search button)."}
 */
export declare class DSRInputSearch extends Component<any> {
    host: HTMLElement;
    private internals;
    private isClearable;
    private initialLoading;
    private inputElement;
    private defaultValue;
    formResetCallback(): void;
    formDisabledCallback(): void;
    formStateRestoreCallback(): void;
    render(): JSX.Element;
}
