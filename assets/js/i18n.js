/* Client-side Chinese/English toggle.
 *
 * Both languages are rendered into the page; CSS shows the active one based on
 * the data-lang attribute on <html>. The initial value is applied by an inline
 * script in <head> (see _includes/head/custom.html) to avoid a flash of the
 * wrong language, so this file only wires up the toggle button afterwards.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'lang';

  function currentLang() {
    return document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
  }

  function updateTitle(lang) {
    var node = document.querySelector('.page__title .lang-' + lang);
    var siteTitle = document.documentElement.getAttribute('data-site-title');
    if (node && siteTitle) {
      document.title = node.textContent.trim() + ' - ' + siteTitle;
    }
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage unavailable (e.g. private mode) — switching still works for this page */
    }
    updateTitle(lang);
  }

  function toggleLang() {
    applyLang(currentLang() === 'zh' ? 'en' : 'zh');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleLang);
    }
    updateTitle(currentLang());
  });
})();
