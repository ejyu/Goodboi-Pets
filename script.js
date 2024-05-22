// The image that will be changed.
const image = document.getElementById('needsPets');
// File path to the "not petting" image.
const originalSrc = 'img/placeholder-nopet.png';
// File path to "petting" image.
const updatedSrc = 'img/placeholder-pet.png';

// By default, assume no clicking is happening.
let isMouseDown = false;
// This is intended to be used for edge cases.

/**
 * Change the image source when mouse is pressed.
 */
image.addEventListener('mousedown', () => {

    // Indicate that the mouse is being held.
    isMouseDown = true;

    // Change to "petting" image.
    image.src = updatedSrc;

});

/**
 * Revert back to the original image when mouse is released.
 */
image.addEventListener('mouseup', () => {

    // Indicate that the mouse has been released.
    isMouseDown = false;
    
    // Change to "not petting" image.
    image.src = originalSrc;

});

/**
 * Handle case where cursor leaves the image while still pressed.
 */
image.addEventListener('mouseleave', () => {

    // If mouse is held but the cursor moves off the image...
    if (isMouseDown) {

        // ...then change to "not petting" image.
        image.src = originalSrc;

    }

});