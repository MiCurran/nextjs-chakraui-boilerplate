export const animationVariants = {
    hidden: {
        scale: .8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: .4
        }
    },
    visibleExtraDelay: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: .8
        }
    },
    visibleSpin: {
        scale: 1,
        rotateZ: '360deg',
        opacity: 1,
        transition: {
            delay: .4
        }
    },
    run: {
        scale: 1,
        translateX: '-360px',
        translateY: '50px',
        opacity: 1,
        transition: {
            delay: .4
    }
    },
    wiggle: {
        rotateZ: ['10deg', '0deg', '10deg', '0deg'],
    },
    visibleExtraDelay2: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1
        }
    },
    visibleExtraDelay3: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1.2
        }
    },
}