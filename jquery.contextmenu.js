/*
 * jQuery contextmenu plugin
 * Version: 1.1.1 
 * Update (d/m/y): 09/03/13
 * Original author: @gokercebeci 
 * Licensed under the MIT license
 * Demo: http://gokercebeci.com/dev/contextmenu
 */

(function($) {
    // Methods
    var methods = {
        init: function(element, options) {
            $this = this;
            // Bind options
            var contextmenu = $.extend(element, options);
            contextmenu.init(contextmenu);
            contextmenu.bind({
                'contextmenu': function(e) {
                    if (!e.ctrlKey || !contextmenu.ctrl) {
                        e.preventDefault();
                        $this.start(contextmenu);
                        $('#contextmenu').remove();
                        var c = $('<div id="contextmenu">')
                                .addClass(contextmenu.style)
                        c.css({
                            position: 'absolute',
                            display: 'none',
                            'z-index': '10000'
                        })
                                .appendTo($('body'));
                        for (var i in contextmenu.menu)
                            $('<a>', {
                                'href': contextmenu.menu[i]
                            })
                                    .html(i).appendTo(c);
                        // Set position
                        var ww = $(document).width();
                        var wh = $(document).height();
                        var w = c.outerWidth(1);
                        var h = c.outerHeight(1);
                        var x = e.pageX > (ww - w) ? ww : e.pageX;
                        var y = e.pageY > (wh - h) ? wh : e.pageY;
                        c.css({
                            display: 'block',
                            top: y,
                            left: x
                        });
                    }
                }
            });
            $(document)
                    .click(function() {
                $this.finish(contextmenu);
            })
                    .keydown(function(e) {
                if (e.keyCode == 27) {
                    $this.finish(contextmenu);
                }
            })
                    .scroll(function() {
                $this.finish(contextmenu);
            })
                    .resize(function() {
                $this.finish(contextmenu);
            });
        },
        start: function(contextmenu) {
            contextmenu.start(contextmenu);
            return;
        },
        finish: function(contextmenu) {
            contextmenu.finish(contextmenu);
            $('#contextmenu').remove();
            return;
        },
        error: function(contextmenu) {
            contextmenu.error(contextmenu);
            return;
        }
    };
    $.fn.contextmenu = function(options) {
        options = $.extend({
            init: function() {
            },
            start: function() {
            },
            finish: function() {
            },
            error: function() {
            },
            ctrl: 1,
            style: '',
            menu: []
        }, options);
        this.each(function() {
            methods.init($(this), options);
        });
    };
})(jQuery);