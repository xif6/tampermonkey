// ==UserScript==
// @name         Utiliser Supprimer dans gmail
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://mail.google.com/mail/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @updateURL    https://raw.githubusercontent.com/xif6/tampermonkey/main/gmail.user.js
// @downloadURL  https://raw.githubusercontent.com/xif6/tampermonkey/main/gmail.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Delete' && e.target.nodeName !== 'INPUT' && !e.target.isContentEditable) {
            document.dispatchEvent(new KeyboardEvent('keypress', {'key': '#'}));
        }
    });

})();
