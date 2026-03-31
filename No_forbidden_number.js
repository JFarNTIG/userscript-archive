// ==UserScript==
// @name         Remove the forbidden number
// @namespace    http://tampermonkey.net/
// @version      2026-03-31
// @description  Replaces all instances of the forbidden number with another number.
// @author       Jacob Farnsworth
// @match        *://*/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==

function invokeOnTextNodes(node, fn) {
    if (node.nodeType === Node.TEXT_NODE) {
        fn(node);
    } else if (node.nodeType == Node.ELEMENT_NODE) {
        $(node).contents().each(function () {
            invokeOnTextNodes(this, fn);
        });
    }
}

function replaceNodeText(node, matchText, newText) {
    node.nodeValue = node.nodeValue.replace(matchText, newText);
}

invokeOnTextNodes(document.body, (node) => replaceNodeText(node, "67", "68"));