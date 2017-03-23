//tweenmax
//the currect cdn that we're using is called tweenmax, we're calling it here, GSAP uses tweens

TweenMax.to(".moonman", 9, {x:1250, rotation: 360, scale: 0.5});
//.to method
//the to method allows you to specific the target of the tween and the duration and the vars objects {}
//selector all is looking for the class element moonman
//if you do not want to specify a class element as we did in the above, you can also select the element in tweenmax by using document.getElementById to specify which element you would like it to select to animate
//you can also pass in jquery selectors as targets and array of objects
//the 9 is the duration of the animation
//vars objects {}
//tweenmax can recognize css properties and process them thanks to the css plugin that comes with this cdn
//in this code, it's using the transform matrix elements to make the moonman rotate and appear farther away in space.

TweenMax.staggerFrom(".spaceshuttle", 3, {y:-300, scale: 0.7, delay:9.5});
//the staggerFrom method let's you transition the first animation to the next
//the delay gives the first animation to run before the second runs, in this case, I gave it an extra second as a way to have the spaceshuttle appear after the astronaunt
