# Scrolling-Animations
The div that is selected to be animated when scrolled will slide right or slide down.


In order to use this animation, in your HTML code you must add a "slide" class to the DIV you want animated. jQuery will use this
to collect all the DOM objects to animate.


You can choose either 'slideDown' or 'slideRight' as animations by adding a 'slideDown' or 'slideRight' class to the DIV
To determine when the animation should be run when scrolling, you must also add a 'top' or 'bottom' class to the DIV

'top' means that when the scrollbar passes the top position of the div it will animate
'bottom' means that when the scrollbar passes the bottom position of the div it will animate.

E.G <div class="slide top slideRight"></div>

This will slide right when the scrollbar passes the top position of the div.


