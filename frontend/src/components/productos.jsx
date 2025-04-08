import "../styles/productos.css";
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Product 1 SVGs (one per unique aspect ratio)
import producto16by9 from "../images/producto1/Producto1_web_1280x720.svg";       // 16:9 ratio (~1.78:1)
import producto4by3 from "../images/producto1/Producto1_web_1024x768.svg";        // 4:3 ratio (1.33:1)
import productoMobileNarrow from "../images/producto1/Producto1_web_390x844.svg"; // Mobile portrait (~0.46:1)
import productoTablet from "../images/producto1/Producto1_web_820x1180.svg";      // Tablet portrait (~0.69:1)

// Import Product 2 SVGs (Portada)
import portada16by9 from "../images/productoEntrada/Portada_web_1280x720.svg";          // 16:9 ratio (~1.78:1)
import portada4by3Landscape from "../images/productoEntrada/Portada_web_1024x768.svg";  // 4:3 landscape (1.33:1)
import portada4by3Portrait from "../images/productoEntrada/Portada_web_768x1024.svg";   // 4:3 portrait (0.75:1)
import portadaMobileNarrow from "../images/productoEntrada/Portada_web_390x844.svg";    // Mobile portrait (~0.46:1)
import portadaTablet from "../images/productoEntrada/Portada_820x1180.svg";             // Tablet portrait (~0.69:1)

gsap.registerPlugin(ScrollTrigger);

const ProductosScroll = () => {
    const [productImage, setProductImage] = useState(null);
    const [portadaImage, setPortadaImage] = useState(null);

    // Function to determine the best image based on aspect ratio
    const getAppropriateImages = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = width / height;
        let selectedProduct, selectedPortada;

        // Define aspect ratio ranges
        if (aspectRatio < 0.55) {
            // Narrow mobile (iPhone and similar) portrait mode
            selectedProduct = productoMobileNarrow;
            selectedPortada = portadaMobileNarrow;
        } else if (aspectRatio < 1) {
            // Check if it's closer to tablet ratio or portrait 4:3
            if (aspectRatio < 0.72) {
                // Tablet or wider mobile in portrait mode
                selectedProduct = productoTablet;
                selectedPortada = portadaTablet;
            } else {
                // Portrait 4:3 (0.75:1)
                selectedProduct = productoTablet; // Use tablet for product 1 (no portrait 4:3 available)
                selectedPortada = portada4by3Portrait;
            }
        } else if (aspectRatio < 1.5) {
            // Standard displays (close to 4:3)
            selectedProduct = producto4by3;
            selectedPortada = portada4by3Landscape;
        } else {
            // Widescreen displays (close to 16:9 and wider)
            selectedProduct = producto16by9;
            selectedPortada = portada16by9;
        }

        return { selectedProduct, selectedPortada };
    };

    useEffect(() => {
        ScrollTrigger.create({
                    trigger: ".productos",
                    start: "top-=5% top",
                    end: "bottom-=5%",
                    toggleClass:
                        { targets: [".navbar", ".ulvert", ".logoblanco", ".logocolor", ".nav-prod"], className: "in-productos" },
                });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
        }, []);

    useEffect(() => {
        // Set initial images
        const { selectedProduct, selectedPortada } = getAppropriateImages();
        setProductImage(selectedProduct);
        setPortadaImage(selectedPortada);

        // Update images on window resize
        const handleResize = () => {
            const { selectedProduct, selectedPortada } = getAppropriateImages();
            setProductImage(selectedProduct);
            setPortadaImage(selectedPortada);
        };

        window.addEventListener('resize', handleResize);

        ScrollTrigger.create({
            trigger: ".productos-container",
            start: "top top",
            pin: true,
            scrub: 2,
        });

        gsap.to(".productos", {
            xPercent: -51,
            ease: "none",
            scrollTrigger: {
                trigger: ".productos",
                start: "center center-=30%",
                scrub: 3,
            },
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".productos",
                start: "top top",
                end: "bottom top",
                scrub: 2,
            },
        });

        tl.fromTo(".img-pro2",
            { y: -150, opacity: 0 },
            { y: -10, opacity: 1, duration: 0.5}
        )
            .fromTo(".img-pro1",
                { y: -150, opacity: 0 },
                { y: -10, opacity: 1, duration: 0.3 }
            )
            .fromTo("body",
                {backgroundColor: "#d03e16"},
                {backgroundColor: "white"}
            );

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".producto-1",
            start: "center+=10% top",
            end: "bottom+=90%",
            matkers: true,
            toggleClass:
                { targets: [".nav-conta"], className: "nav-black" },
        });

        ScrollTrigger.create({
            trigger: ".producto-1",
            scrub: 2,
            start: "center+=20% top",
            end: "bottom+=90%",
            toggleClass:
                { targets: [".nav-team"], className: "nav-black" },
        });

        ScrollTrigger.create({
            trigger: ".producto-1",
            start: "center+=25% top",
            end: "bottom+=90%",
            toggleClass:
                { targets: [".nav-us"], className: "nav-black" },
        });

        ScrollTrigger.create({
            trigger: ".producto-1",
            start: "center+=30% top",
            end: "bottom+=90%",
            toggleClass:
                { targets: [".nav-clien"], className: "nav-black" },
        })
        
        ScrollTrigger.create({
            trigger: ".producto-1",
            start: "center+=30% top",
            end: "bottom+=85%",
            toggleClass:
            { targets: [".nav-prod"], className: "prod-navpos" }
        });;

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
        <div className="productos-container" id="productos">
            <div className="productos">
                <div className="producto producto-2">
                    <img
                        className="img-pro2"
                        src={portadaImage || portada4by3Landscape}
                        alt="Producto 2 - First slide"
                        loading="eager"
                    />
                </div>
                <div className="producto producto-1">
                    <img
                        className="img-pro1"
                        src={productImage || producto4by3}
                        alt="Producto 1 - Second slide"
                        loading="eager"
                    />
                </div>
                {/* <div className="producto producto-3">Producto 3</div> */}
            </div>
        </div>
    );
};

export default ProductosScroll;