import React, { useEffect, useState } from 'react';
import { data } from "./constants";

const ImageSlideMapTwo = () => {

    // -------------------------------
    // STATE: Track which image is active
    // -------------------------------
    // activeImageIndex → current visible image index
    // setActiveImageIndex → updates state & triggers re-render
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // -------------------------------
    // PREVIOUS BUTTON HANDLER
    // -------------------------------
    const handlePreviousClick = () => {

        /*
        Logic:
        - If index is 0 → go to last image
        - Else → move one step back
        */

        // Ternary shortcut:
        setActiveImageIndex(
            !activeImageIndex 
                ? data.length - 1 
                : activeImageIndex - 1
        );
    };

    // -------------------------------
    // NEXT BUTTON HANDLER
    // -------------------------------
    const handleNextClick = () => {

        /*
        (activeImageIndex + 1) % data.length
        - Moves to next image
        - Automatically wraps to 0 at the end
        */

        setActiveImageIndex(
            (activeImageIndex + 1) % data.length
        );
    };

    // -------------------------------
    // AUTO SLIDER (useEffect)
    // -------------------------------
    useEffect(() => {

        /*
        This effect:
        - Runs every time activeImageIndex changes
        - Sets a timer to move to next image
        */

        const timer = setTimeout(() => {
            handleNextClick();
        }, 1000);

        // CLEANUP FUNCTION (VERY IMPORTANT 🔥)
        return () => {
            /*
            Why cleanup?
            - Prevents multiple timers
            - Prevents memory leaks
            - Clears old timeout before new one is set
            */
            clearTimeout(timer);
        };

    }, [activeImageIndex]); // dependency → runs effect after each slide change

    return (
        <div>
            <h1 className='title text-center'>Optimize and Map</h1>

            <div className='flex justify-center mt-5'>

                {/* Previous Button */}
                <button onClick={handlePreviousClick}>
                    Prev
                </button>

                {/* 
                  Mapping through images
                  Only the active image is shown
                */}
                {data.map((url, i) => (

                    <img
                        key={url}
                        src={url}
                        alt="slider"
                        className={
                            'w-[700px] h-[400px] ' +
                            (activeImageIndex === i ? "block" : "hidden")
                        }
                    />

                ))}

                {/* Next Button */}
                <button onClick={handleNextClick}>
                    Next
                </button>

            </div>
        </div>
    );
};

export default ImageSlideMapTwo;


/*
==================== IMAGE SLIDER SUMMARY ====================

State:
- activeImageIndex controls visible image
- Updating state triggers re-render

--------------------------------
Navigation Logic:
- Previous → conditional check
- Next → modulo (%) for wrap-around

--------------------------------
useEffect:
- Handles auto-slide
- Runs after render
- Cleanup prevents memory leaks

--------------------------------
Rendering:
- map() renders all images
- Only active image is visible
- Optimized & scalable approach

--------------------------------
Performance Tips 🔥
✔ Always cleanup timers
✔ Use modulo for circular logic
✔ Avoid conditional rendering outside map

--------------------------------
Interview Golden Rule 🏆

"State drives UI, Effect drives side-effects"

--------------------------------
One-line Memory Trick 🧠

"useState = what to show
useEffect = when to act"

================================================
*/

/*
==================== IMAGE SLIDER DRY RUN SUMMARY ====================

handlePreviousClick:
- If index = 0 → go to last image
- Else → index - 1
- Circular backward navigation

handleNextClick:
- Always index + 1
- % operator wraps index to 0
- Circular forward navigation

useEffect Lifecycle:
- Runs after render
- Cleanup runs before next effect
- Replaces mount, update, unmount

--------------------------------
Why cleanup is mandatory?

✔ Prevents timer stacking
✔ Prevents memory leaks
✔ Keeps slider speed stable

--------------------------------
Interview Golden Rule 🏆

"State change → Re-render → Effect → Cleanup"

--------------------------------
One-line Memory Trick 🧠

"Prev = conditional, Next = modulo"

================================================
*/
