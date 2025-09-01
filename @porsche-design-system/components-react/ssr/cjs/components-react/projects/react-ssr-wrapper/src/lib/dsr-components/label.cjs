'use strict';

var jsxRuntime = require('react/jsx-runtime');
var utilsEntry = require('../../../../../../components/dist/utils/esm/utils-entry.cjs');
var required = require('./required.cjs');

const Label = ({ hasLabel, hasDescription, 
// host,
label, description, htmlFor, isRequired, isLoading, isDisabled, }) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("label", { className: "label", id: utilsEntry.labelId, "aria-disabled": isLoading || isDisabled ? 'true' : null, htmlFor: htmlFor, children: hasLabel && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [label || jsxRuntime.jsx("slot", { name: "label" }), isRequired /* && !isParentFieldsetRequired(host) */ && jsxRuntime.jsx(required.Required, {})] })) }), hasDescription && (jsxRuntime.jsx("span", { className: "label", id: utilsEntry.descriptionId, "aria-disabled": isLoading || isDisabled ? 'true' : null, children: description || jsxRuntime.jsx("slot", { name: "description" }) }))] }));
};

exports.Label = Label;
