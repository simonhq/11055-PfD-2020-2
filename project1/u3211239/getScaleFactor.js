/*  Programming for Design
    Project 1 - Self Portrait
    Keir Herbert (u3211239)
    September 2020
*/

/*  Examine the screen resolution and determine an appropriate scale factor.

<<<<<<< HEAD
    This is necessary because on small, high pixel density screens like those found on laptops, newer
    versions of Windows apply scaling by default which has the unfortunate effect of making the
    drawing canvas run off the screen.
    Using the value returned by this function it's possible compensate for this and also cater for a 
    large range of screen resolutions.
=======
    This is necessary because on small, high pixel density screens like those found on laptops, newer versions of Windows apply
    scaling by default which has the unfortunate effect of making the drawing canvas run off the screen. Using the value returned
    by this function it's possible compensate for this and also cater for a large range of screen resolutions.
>>>>>>> master
*/
function getScaleFactor () {

    if (screen.height < 720) {          // Catch anything super low-res.
        return 2;
    }
    else if (screen.height < 900) {     // Displays that have been subject to Windows scaling.
        return 3;
    }
    else if (screen.height <= 1080) {   // Catch full HD displays.
        return 4;
    }
    else if (screen.height < 1440) {    // Less than QHD.
        return 5;
    }
    else {
        return 6;                       // For QHD, 4K, and beyond.
    }
}