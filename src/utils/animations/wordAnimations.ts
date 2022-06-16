const SHAKE_DISTANCE = 8; // px
const SHAKE_SPEED = 160; // ms
const SHAKE_EASING = 'linear';

const shake = (element: HTMLElement): Animation => {
    const KeyFrames = new KeyframeEffect(
        element, // element to animate
        [
            { left: `${0}px` },
            { left: `${SHAKE_DISTANCE}px` },
            { left: `${-2 * SHAKE_DISTANCE}px` },
            { left: `${0}px` },
        ],
        { duration: SHAKE_SPEED, easing: SHAKE_EASING } // keyframe options
    );
    const animation = new Animation(KeyFrames);

    return animation;
}

export { shake }