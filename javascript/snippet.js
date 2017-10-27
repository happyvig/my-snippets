
    /*
        If an element is 'absolute'ly positioned, the width has to be set manually.
     */

    /**
     *  Most fonts are not proportionally spaced. "WWWWW" is wider than "iiiii", 
     *  therefore counting characters will not work.
     *  Hence, measure the length of the given text from actual rendered pixels.
     *  
     *  @param {String} str 
     *  @return {Number} length of the given string measured in pixels
     */
    function getPseudoLength(str){

        // create a dummy DIV
        var $rulerDiv = jQuery('<span />')
                            .attr({'id':'ruler'})
                            .css({'visibility': 'hidden', 'white-space': 'nowrap'});
         
        // set the given string to that DIV                
        $rulerDiv[0].innerHTML = str + '';
        $rulerDiv[0].style.fontSize = '14px';

        // get actual width of the string
        var offsetWidth = $rulerDiv[0].offsetWidth || 0;
        
        // cleanup
        $rulerDiv.remove();
        
        return +offsetWidth;
    };
    // USAGE: getPseudoLength('someSampleTextForWhichIWantedToMeasureLength')


    /**
     *  Returns the value of property of the given pseudo selector (before | after) of the given element
     */  
    function getPseudoContent(selector, pseudoSelector, prop) {

        var computedStyle = window.getComputedStyle(document.querySelectorAll(selector)[0], ':'+pseudoSelector);
        var value = computedStyle.getPropertyValue(prop);

        return value;
    };
    // USAGE: getPseudoContent('#some-id', 'before', 'content')