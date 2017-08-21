$(document).ready(function()
{
	var sections=$("div[class*='slide']");  //Div objects that will be animated
	var slideBottomPositions=[]; //Bottom sections/positions are the position of the div's bottom relative to the document position
    var slideTopPositions=[]; //Top sections/positions are the position of the div's top relative to the document position
    var slideDirection=[];//Has slideRight or slideDown, slideRight=true, slideDown=false	
    var windowHeight=$(window).height();


    //Get the DOM object's positions that will be used to animate
    for (counter=0; counter<sections.length;counter++)
    {
        slideBottomPositions[counter]=$(sections[counter]).position().top;//Top position of the div
        slideBottomPositions[counter]+=$(sections[counter]).outerHeight();//Top position of the div plus its height will give its bottom position
        slideTopPositions[counter]=$(sections[counter]).position().top;//Top position of the div

        /*This part is only necessary if you want the div to disappear when the window scrolls past it and it is no longer visible on the browser. This will allow you
        to re-animate the div if the webpage is scrolled back up to the div*/

        //Check to see which animation the div has, if it has slideRight make it true, if it has slideDown make it false
        if ($(sections[counter]).hasClass('slideRight'))
        {
            slideDirection[counter]=true;
        }
        else
        {
            slideDirection[counter]=false;
        }
    }
     $(window).scroll(function() 
    {
        top=$(window).scrollTop();
        /*Bottom screen will vary depending on your personal preference. I chose to animate divs when the bottom 10% of the screen passes the div's position*/
        bottomScreen=top+windowHeight*0.9;
        

        for (counter=0; counter<sections.length;counter++)    
        {
            //Animate based on the window being past the top position of the div
            if ($(sections[counter]).hasClass('top'))
            {
                if (bottomScreen>=slideTopPositions[counter])
                {
                    $(sections[counter]).removeClass('slideRight');
                    $(sections[counter]).removeClass('slideDown');
                }
            }
            //Animate based on the window being past the bottom position of the div
            else
            {
                if (bottomScreen>=slideBottomPositions[counter])
                {
                    $(sections[counter]).removeClass('slideRight');
                    $(sections[counter]).removeClass('slideDown');
                }
            }
            /*REMOVE THESE TWO IF STATEMENTS IF YOU DO NOT WANT THE DIVS TO DISAPPEAR AND REAPPEAR AFTER IT IS NO LONGER VISIBLE ON THE WINDOW*/

            //If the bottom of the screen or whatever was set is above the top position meaning you must scroll DOWN to view it.
            if (bottomScreen<slideTopPositions[counter])
            {
                if (slideDirection[counter]==true)
                {
                    $(sections[counter]).addClass('slideRight');
                }
                else
                {
                    $(sections[counter]).addClass('slideDown');
   
                }
            } 
            //If the top of the screen is past the bottom position of the div meaning you must scroll UP to view it.
            else if (top>slideBottomPositions[counter])
            {
                if (slideDirection[counter]==true)
                {
                    $(sections[counter]).addClass('slideRight');
                }
                else
                {
                    $(sections[counter]).addClass('slideDown');
                }
            }
        }
    });
});