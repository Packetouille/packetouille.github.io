import { React, useLayoutEffect, useContext, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from '@gsap/react'
import Box from '../Box'

import TransitionContext from '../../context/TransitionContext';

const Contact = ({ slideRefs }) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

    const main = useRef();
    const { completed } = useContext(TransitionContext);
    const snapTriggers = useRef([]);

    const { contextSafe } = useGSAP(() => {
        if (completed) return;

        let panels = gsap.utils.toArray('.panel');

        panels.forEach((panel, i) => {
            snapTriggers.current[i] = ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                scrub: true,
                pin: true, // Pinning can be left disabled for now if needed
                pinSpacing: false
            });
        });

        ScrollTrigger.refresh();  // Recalculate the scroll positions
    }, {
        dependencies: [completed],
        scope: main,
        revertOnUpdate: true,
    });

    return (
        <div id='contact-section' ref={el => slideRefs.current = { ...slideRefs.current, contact: el}}>
            <main ref={main}>
                <section className="panel light">
                    <div>
                        {/* <Box boxName="red-box"/> */}
                        <h1>Light Panel</h1>
                        <p>Use pinning to layer panels on top of each other as you scroll</p>
                    </div>
                </section>
                <section className='panel dark'>ONE</section>
                <section className='panel purple'>TWO</section>
                <section className='panel orange'>THREE</section>
                <section className='panel red'>FOUR</section>
            </main>
        </div>
    )
}

export default Contact