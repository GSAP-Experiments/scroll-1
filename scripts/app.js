
// IIFE
let Animations = (()=>{

    const _overlayEl = document.querySelector('.overlay'),
          _heroEl = document.querySelector('.hero'),
          _heroHeadingUnderline = document.querySelector('.hero-heading-underline'),
          _heroHeading1 = document.querySelector('#hero-heading-1'),
          _heroHeading2 = document.querySelector('#hero-heading-2');


    let onloadSettings = () => {
        gsap.set(_heroEl, {autoAlpha: 1});
    }

    let introAnimations = () =>{

        let _heroChars1 = new SplitText(_heroHeading1, {type: 'chars'});
        let _heroChars2 = new SplitText(_heroHeading2, {type: 'chars'});

        let _introTL = gsap.timeline( {delay: 0.25});

        _introTL
            .to(_overlayEl, { duration: 1, scaleY: 0, ease: "power2" })
            .from(_heroHeadingUnderline, { duration: 0.5, scaleX: 0, ease: "power2"}, "-=0.75")
            .add('chars-in', '-=0.45')
            .fromTo(_heroChars1.chars, {opacity: 0, y: 195},
                {duration: 0.5, opacity: 1, y: 0, stagger: 0.1, ease: 'power2'}, 'chars-in')
            .fromTo(_heroChars2.chars, {opacity: 0, y: -210},
            {duration: 0.5, opacity: 1, y: 0, stagger: 0.1, ease: 'power2'}, 'chars-in')
            // .set(_heroHeadingUnderline, { transformOrigin: '-50%, 89%' })
    }


    return {
        onloadSettings,
        introAnimations
    }

});

window.onload = () => {
    Animations().onloadSettings();
    Animations().introAnimations();
}
