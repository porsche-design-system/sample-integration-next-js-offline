import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Component } from 'react';
import '../../provider.mjs';
import { splitChildren } from '../../splitChildren.mjs';
import { minifyCss } from '../../minifyCss.mjs';
import { getSelectCss as getComponentCss$q } from '../../../../../../components/dist/styles/esm/styles-entry.mjs';
import { getHasNativePopoverSupport, getComboboxAriaAttributes, getSelectedOptionString, labelId } from '../../../../../../components/dist/utils/esm/utils-entry.mjs';
import { Label } from './label.mjs';
import { messageId, StateMessage } from './state-message.mjs';
import { PIcon } from '../components/icon.wrapper.mjs';
import { PInputSearch } from '../components/input-search.wrapper.mjs';
import { NoResultsOption } from './no-results-option.mjs';

/**
 * @slot {"name": "label", "description": "Shows a label. Only [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content) is allowed." }
 * @slot {"name": "description", "description": "Shows a description. Only [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content) is allowed." }
 * @slot {"name": "", "description": "Default slot for the `p-select-option` tags." }
 * @slot {"name": "message", "description": "Shows a state message. Only [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content) is allowed." }
 *
 * @controlled { "props": ["value"], "event": "update", "isInternallyMutated": true }
 */
class DSRSelect extends Component {
    host;
    // The "name" property is reflected as an attribute to ensure compatibility with native form submission.
    // In the React wrapper, all props are synced as properties on the element ref, so reflecting "name" as an attribute ensures it is properly handled in the form submission process.
    isOpen = false;
    hasFilterResults = true;
    internals;
    defaultValue;
    buttonElement;
    popoverElement;
    inputSearchElement;
    inputSearchInputElement;
    listboxElement;
    selectOptions = [];
    selectOptgroups = [];
    preventOptionUpdate = false; // Used to prevent value watcher from updating options when options are already updated
    searchString = '';
    searchTimeout = null;
    slottedImagePath = '';
    hasNativePopoverSupport = getHasNativePopoverSupport();
    cleanUpAutoUpdate;
    currentlyHighlightedOption = null;
    formDisabledCallback() {
    }
    formStateRestoreCallback() {
    }
    formResetCallback() {
        this.props.internals?.setFormValue(this.props.defaultValue);
    }
    render() {
        const { namedSlotChildren, otherChildren } = splitChildren(this.props.children);
        const buttonId = 'button';
        const popoverId = 'list';
        const descriptionId = this.props.description ? 'description' : undefined;
        const selectMessageId = (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state) ? messageId : undefined;
        const ariaDescribedBy = [descriptionId, selectMessageId].filter(Boolean).join(' ');
        const style = minifyCss(getComponentCss$q(this.props.isOpen, this.props.disabled, this.props.hideLabel, this.props.state, this.props.compact, this.props.theme));
        return (jsxs(Fragment, { children: [jsxs("template", { shadowroot: "open", shadowrootmode: "open", shadowrootdelegatesfocus: "true", children: [jsx("style", { dangerouslySetInnerHTML: { __html: style } }), jsxs("div", { className: "root", children: [jsx(Label, { hasLabel: this.props.label || namedSlotChildren.filter(({ props: { slot } }) => slot === 'label').length > 0, hasDescription: this.props.description || namedSlotChildren.filter(({ props: { slot } }) => slot === 'description').length > 0, host: null, label: this.props.label, description: this.props.description, htmlFor: buttonId, isRequired: this.props.required, isDisabled: this.props.disabled }), jsxs("button", { "aria-invalid": this.props.state === 'error' ? 'true' : null, type: "button", role: "combobox", id: buttonId, ...getComboboxAriaAttributes(this.props.isOpen, this.props.required, labelId, ariaDescribedBy, popoverId), disabled: this.props.disabled, children: [this.props.slottedImagePath && jsx("img", { src: this.props.slottedImagePath, alt: "" }), jsx("span", { children: getSelectedOptionString(otherChildren) }), jsx(PIcon, { className: "icon", name: "arrow-head-down", theme: this.props.theme, color: this.props.disabled ? 'state-disabled' : 'primary', "aria-hidden": "true" })] }), jsxs("div", { id: popoverId, popover: "manual", tabIndex: -1, role: "dialog", "aria-label": this.props.label, "aria-hidden": this.props.isOpen ? null : 'true', children: [this.props.filter && (jsx(PInputSearch, { className: "filter", name: "filter", label: "Filter options", hideLabel: true, autoComplete: "off", clear: true, indicator: true, compact: true, theme: this.props.theme })), jsxs("div", { className: "options", role: "listbox", "aria-label": this.props.label, onPointerMove: this.props.onPointerMove, children: [this.props.filter && !this.props.hasFilterResults && jsx(NoResultsOption, {}), jsx("slot", {})] })] }), jsx(StateMessage, { hasMessage: (this.props.message || namedSlotChildren.filter(({ props: { slot } }) => slot === 'message').length > 0) && ['success', 'error'].includes(this.props.state), state: this.props.state, message: this.props.message, theme: this.props.theme, host: null })] })] }), this.props.children] }));
    }
    getSelectedOptionImagePath = (options) => {
        return (options
            .find((option) => option.selected)
            ?.querySelector('img')
            ?.getAttribute('src') ?? '');
    };
}

export { DSRSelect };
