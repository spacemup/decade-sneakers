// The MIT License (MIT)

// Copyright (c) 2013 Dustan Kasten

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

"use strict";function polyfill(){var f=window,n=document;if(!("scrollBehavior"in n.documentElement.style&&!0!==f.__forceSmoothScrollPolyfill__)){var o,t=f.HTMLElement||f.Element,s=468,p={scroll:f.scroll||f.scrollTo,scrollBy:f.scrollBy,elementScroll:t.prototype.scroll||d,scrollIntoView:t.prototype.scrollIntoView},a=f.performance&&f.performance.now?f.performance.now.bind(f.performance):Date.now,l=(o=f.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);f.scroll=f.scrollTo=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?c.call(f,n.body,void 0!==arguments[0].left?~~arguments[0].left:f.scrollX||f.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:f.scrollY||f.pageYOffset):p.scroll.call(f,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:f.scrollX||f.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:f.scrollY||f.pageYOffset))},f.scrollBy=function(){void 0!==arguments[0]&&(e(arguments[0])?p.scrollBy.call(f,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):c.call(f,n.body,~~arguments[0].left+(f.scrollX||f.pageXOffset),~~arguments[0].top+(f.scrollY||f.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==e(arguments[0])){var o=arguments[0].left,t=arguments[0].top;c.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==e(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):p.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){if(!0!==e(arguments[0])){var o=function(o){for(;o!==n.body&&!1===(void 0,l=r(t=o,"Y")&&i(t,"Y"),e=r(t,"X")&&i(t,"X"),l||e);)o=o.parentNode||o.host;var t,l,e;return o}(this),t=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==n.body?(c.call(this,o,o.scrollLeft+l.left-t.left,o.scrollTop+l.top-t.top),"fixed"!==f.getComputedStyle(o).position&&f.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):f.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else p.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function d(o,t){this.scrollLeft=o,this.scrollTop=t}function e(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function r(o,t){return"Y"===t?o.clientHeight+l<o.scrollHeight:"X"===t?o.clientWidth+l<o.scrollWidth:void 0}function i(o,t){var l=f.getComputedStyle(o,null)["overflow"+t];return"auto"===l||"scroll"===l}function v(o){var t,l,e,r,i=(a()-o.startTime)/s;r=i=1<i?1:i,t=.5*(1-Math.cos(Math.PI*r)),l=o.startX+(o.x-o.startX)*t,e=o.startY+(o.y-o.startY)*t,o.method.call(o.scrollable,l,e),l===o.x&&e===o.y||f.requestAnimationFrame(v.bind(f,o))}function c(o,t,l){var e,r,i,s,c=a();s=o===n.body?(r=(e=f).scrollX||f.pageXOffset,i=f.scrollY||f.pageYOffset,p.scroll):(r=(e=o).scrollLeft,i=o.scrollTop,d),v({scrollable:e,method:s,startTime:c,startX:r,startY:i,x:t,y:l})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill();

(function() {
  var isDesktop;

  var shoeInModal;
  var activeYear;
  var activeYearButtonEl = document.querySelector('.nav-item.active');
  var bodyEl = document.querySelector('body');
  var modalEl = document.querySelector('.modal');
  var modalNameEl = document.querySelector('.modal-info-name');
  var modalCopyEl = document.querySelector('.modal-info-copy');
  var modalImageEl = document.querySelector('.modal-image');
  
  var isNavBarDisplayed = false;
  var navBarEl = document.querySelector('.nav-bar-wrap');
  var navBarTrigger;

  var windowWidth = document.body.clientWidth;
  var navButtonWidth = 77;
  var navButtonGutter = 8;
  var centreXOffset = (windowWidth / 2) - (navButtonWidth / 2);

  var yearSectionTriggers = {};

  var setIsDesktop = function() {
    isDesktop = document.body.clientWidth >= 1024 ? true : false;
  }

  var setYearSectionScrollPositionTriggers = function() {
    yearSectionTriggers = {};
    var scrollTop = window.scrollY - (window.innerHeight / 2);
    var yearSections = document.querySelectorAll('.section-wrap[id]');
    yearSections.forEach(function(section) {
      var year = parseInt(section.getAttribute('id'), 10);
      var top = scrollTop + section.getBoundingClientRect().y;
      yearSectionTriggers[top] = year;
    })
  }
  
  var setNavBarTrigger = function() {
    navBarTrigger = window.scrollY - (window.innerHeight / 2) + document.getElementById('2010').getBoundingClientRect().y;
  }

  var addClickHandlers = function() {
    var navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(function(btn) {
      btn.addEventListener('click', navButtonClickHandler);
    });

    var runnerUps = document.querySelectorAll('.runner-up[id]');
    runnerUps.forEach(function(ru) {
      ru.addEventListener('click', runnerUpClickHandler);
    });

    var momentReadMores = document.querySelectorAll('.moment-read-more');
    momentReadMores.forEach(function(mrm) {
      mrm.addEventListener('click', momentClickHandler);
    });
  }

  var addModalCloseButtonClickHandler = function() {
    var modalCloseButtonEl = document.querySelector('.modal-close-button');
    modalCloseButtonEl.addEventListener('click', function() {
      toggleModal(false);
    });
  }
  
  var navButtonClickHandler = function(e) {
    e.stopPropagation();
    e.preventDefault();
    activeYear = e.target.parentNode.dataset.year; // e.target is the <a>
    
    // i thought this callback system would solve the problems with the buttons highlighting as it scrolls
    // but it doesnt, and it still works  so im gonna leave it
    var fns = [disableHighlightActiveYearButton, navigateToYear, enableHighlightActiveYearButton];
    fns.forEach(function(fn) {
      fn();
    });
  }

  var runnerUpClickHandler = function(e) {
    var target = e.target;
    if (e.target.classList.contains('runner-up-info')) {
      target = e.target.parentNode;
    }

    var id = target.id;
    shoeInModal = document.getElementById(id);
    populateModalWithRunnerUp();
    toggleModal(true, true, false);
  }

  var momentClickHandler = function(e) {
    var target = e.target;
    if (e.target.classList.contains('moment-read-more')) {
      target = e.target.parentNode.parentNode; // get div.moment
    }

    populateModalWithMoment(target);
    toggleModal(true, false, true);
  }

  var toggleModal = function(openModal, isShoe, isMoment) {
    if (openModal) {
      bodyEl.classList.add('modal-open');

      if (isShoe) {
        shoeInModal.classList.add('active');
        modalEl.classList.add('runner-up-populated');
      }

      if (isMoment) {
        modalEl.classList.add('moment-populated');
      }
    } else {
      bodyEl.classList.remove('modal-open');
      if (shoeInModal) {
        shoeInModal.classList.remove('active');
      }
      modalEl.classList.remove('runner-up-populated');
      modalEl.classList.remove('moment-populated');
      clearModal();
    }
  }

  var populateModalWithRunnerUp = function() {
    var name = shoeInModal.querySelector('.runner-up-name span').innerHTML;
    var copy = shoeInModal.querySelector('.runner-up-copy').innerHTML;
    var imgSrc = shoeInModal.querySelector('.runner-up-image img').src;

    modalNameEl.innerHTML = name;
    modalCopyEl.innerHTML = copy;
    modalImageEl.src = imgSrc;
  }

  var populateModalWithMoment = function(momentEl) {
    var name = momentEl.querySelector('.moment-name').innerHTML;
    var copy = momentEl.querySelector('.moment-copy').innerHTML;
    var imgSrc = momentEl.querySelector('.moment-image img').src;

    modalNameEl.innerHTML = name;
    modalCopyEl.innerHTML = copy;
    modalImageEl.src = imgSrc;
  }
  
  var clearModal = function() {
    modalNameEl.innerHTML = '';
    modalCopyEl.innerHTML = '';
    modalImageEl.src = '';
  }

  var animateModal = function() {

  }

  var getActiveYearBasedOnScrollPosition = function() {
    if (!yearSectionTriggers) {
      return;
    }
    var y = window.scrollY;
    var triggers = Object.keys(yearSectionTriggers);
    for (var i = 0; i < triggers.length; i++) {
      if (i + 1 === triggers.length) {
        // for year 2019
        return 2019;
      }
      if (y >= triggers[i] && y < triggers[i + 1]) {
        return yearSectionTriggers[triggers[i]];
      }
    }
  }

  var highlightActiveYearButton = function() {
    if (activeYearButtonEl) {
      activeYearButtonEl.classList.remove('active');
    }
    activeYearButtonEl = document.querySelector('.nav-item[data-year="' + activeYear + '"]');
    activeYearButtonEl.classList.add('active');
    history.pushState({ year: activeYear }, "", window.location.origin + window.location.pathname + '#' + activeYear);
  }

  var disableHighlightActiveYearButton = function() {
    window.removeEventListener('scroll', onScrollHandler);
  }

  var enableHighlightActiveYearButton = function() {
    window.addEventListener('scroll', onScrollHandler);
  }

  var navigateToYear = function() {
    var sectionOffset = document.getElementById(activeYear).getBoundingClientRect().top;
    
    window.scroll({
      top: parseInt(window.pageYOffset) + parseInt(sectionOffset),
      behavior: 'smooth'
    });
    
    highlightActiveYearButton();
    // snapButtonToCenter();
  }

  var snapButtonToCenter = function(year) {
    if (isDesktop) {
      return;
    }

    if (!year) {
      year = activeYear;
    }

    var index = document.querySelector('.nav-item[data-year="' + year + '"]').dataset.index;
    
    document.querySelector('.nav-bar').scroll({
      left: index * (navButtonWidth + navButtonGutter),
      behavior: 'smooth',
    });
  }

  var toggleNavBarDisplay = function() {
    if (window.scrollY > navBarTrigger && !isNavBarDisplayed) {
      navBarEl.classList.remove('hidden');
      isNavBarDisplayed = true;
    } else if (window.scrollY < navBarTrigger && isNavBarDisplayed) {
      navBarEl.classList.add('hidden');
      isNavBarDisplayed = false;
    };
  }

  var onScrollHandler = function() {
    toggleNavBarDisplay();

    // TODO: throttle
    var currentYear = getActiveYearBasedOnScrollPosition();
    if (currentYear !== activeYear) {
      activeYear = currentYear;
      highlightActiveYearButton();
      snapButtonToCenter();
    }
  }

  window.onload = function() {
    setIsDesktop();

    addClickHandlers();
    addModalCloseButtonClickHandler();
    snapButtonToCenter();

    setYearSectionScrollPositionTriggers();
    setNavBarTrigger();
    activeYear = getActiveYearBasedOnScrollPosition();
    highlightActiveYearButton();

    enableHighlightActiveYearButton();
  }

  window.onresize = function() {
    setIsDesktop();
    setYearSectionScrollPositionTriggers();
    setNavBarTrigger();
    activeYear = getActiveYearBasedOnScrollPosition();
  }
})();
