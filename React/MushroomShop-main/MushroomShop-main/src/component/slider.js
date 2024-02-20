import { useState, useEffect } from 'react'

function Slider() {
    const slides = [
        { id: 1, src: "./img/slide1.jpg", alt: "1" },
        { id: 2, src: "./img/slide2.jpg", alt: "2" },
        { id: 3, src: "./img/slide3.jpg", alt: "3" }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);



    function nextSlide() {
        setCurrentIndex(prev => (prev + 1) % slides.length);
    }
    function prevSlide() {
        setCurrentIndex(prev => (prev - 1) % slides.length);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div className="slider" id="SLIDER">
            <div className="slide-show">
                {slides.map((slide, i) => (
                    <div
                        className={` slide-img ${i === currentIndex ? 'active' : ''}`}
                        key={slide.id}
                    >
                        <img src={slide.src} alt={slide.alt} />
                    </div>

                ))}
            </div>
            <div 
            className='slide-btn-next'
            onClick={nextSlide}
            >
                <i class="fa-solid fa-angle-right"></i>
            </div>
            <div 
            className='slide-btn-prev'
            onClick={prevSlide}
            >
                <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className='slide-points'>
                <div className={`slide-point ${currentIndex===0?"curr":''}`}></div>
                <div className={`slide-point ${currentIndex===1?"curr":''}`}></div>
                <div className={`slide-point ${currentIndex===2?"curr":''}`}></div>
            </div>
        </div>
    )
}
export default Slider
