inView.js
=========

This is a jQuery function which allows us to quickly check if an element 
is within the browsers visual viewport (window object).


Documentation
-------------
inView.js is a function that allows you to select element or group of elements on a web page and track their visibility as you scroll or resize the page. 

Since this is a simple plugin, the usage is simple too.
First, add the inView.js to your document along with jQuery library:

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>`

`<script type="text/javascript" src="_js/jquery.inView.js"></script>`

After that all you need to do is assign a class named **_.trackInView_** to all of the elements on the page that you want to track. Once it's done, inView.js will execute on every onresize and onscroll event and assign class named **_.inView_** if the element is in the viewport or **_.notInView_** if it's not. 


Limitations
-----------

This function will consider element’s position and dimensions, compared to dimension and scroll position of window. It will NOT check if the element is hidden using css, or positioned behind another object using z-index.
