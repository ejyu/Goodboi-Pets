// The image that will be changed.
const image = document.getElementById('needsPets');
// File path to the "not petting" image.
const originalSrc = 'img/Nelca-nopet.png';
// File path to "petting" image.
const updatedSrc = 'img/Nelca-pet.png';

// By default, assume no clicking is happening.
let isMouseDown = false;
// This is intended to be used for edge cases.

// By default, assume no tapping is happening.
let isTouched = false;
// This is intended to be used for edge cases.

// Preload the "not petting" image.
const preloadNoPet = new Image();
preloadNoPet.src = originalSrc;

// Preload the "petting" image.
const preloadPet = new Image();
preloadPet.src = updatedSrc;

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

/**
 * Change the image source when touched.
 */
image.addEventListener('touchstart', () => {

    // Indicate that the image is being touched.
    isTouched = true;

    // Change to "petting" image.
    image.src = updatedSrc;

});

/**
 * Revert back to the original image when touching ends.
 */
image.addEventListener('touchend', () => {

    // Indicate that the image is no longer being touched.
    isTouched = false;
    
    // Change to "not petting" image.
    image.src = originalSrc;

});

/**
 * Handle case where finger leaves the image while still on touchscreen.
 */
image.addEventListener('touchcancel', () => {

    // If touching but user's finger moves off the image...
    if (isTouched) {

        // ...then change to "not petting" image.
        image.src = originalSrc;

    }

});