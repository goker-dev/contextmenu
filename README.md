contextmenu
===========

**contextmenu** is a **jQuery** plug-in for context menu (right click menu).
 
You can change image size and quality with plugin [**options**](#options) easily.

### Tested on: 
 *  Chromium (14.0.835.202), 
 *  Google Chrome (15.0.874.120), 
 *  Mozilla Firefox (3.6.17), 
 *  Opera (11.52) 
 *  Internet Explorer (8.0.6001)

You can check it on [gokercebeci.com/dev/contextmenu](http://gokercebeci.com/dev/contextmenu).

Usage
-----

    <script src="jquery.contextmenu.js"></script>
    <link rel="stylesheet" href="contextmenu.css" />
    <script>
        $(document).contextmenu({
            menu: {
                'custom link 1' : 'http://...',
                'custom link 2' : 'http://...'
            }
        });
    </script>

Options
-------

    init   : function(){}, // Optional init function.
    start  : function(){}, // Optional start function
    finish : function(){}, // Optional finish function.
    ctrl   : false, // Default false. Optional. If you right click with ctrl key 
    the contect menu do not show. [true,false] Default value is true;
    style  : 'dark', // Optional class name.
    menu   : {}  // Required menu object.

License
-------
It is under [MIT License](https://github.com/gokercebeci/contextmenu/blob/master/LICENCE.md "MIT License").

Developer
---------
[goker](http://gokercebeci.com/ "goker")

