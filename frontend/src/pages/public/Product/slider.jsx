import React from 'react';
import { Carousel } from 'flowbite-react';

const Slider = () => {
    return (
        <>
            <div className="relative w-full h-[15rem]">
                <Carousel>
                    <img src="https://file.hstatic.net/200000260587/file/1920x1000_a28bdd3fa115470ab2bd38946d030bc3.jpg" alt="..." />
                    <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1602810316693-3667c854239a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                </Carousel>
            </div>
        </>
    )
}

export default Slider;
