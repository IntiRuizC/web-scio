import "../styles/productos.css";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import producto from "../fotos/Producto 1_2.jpg"
import productoentrada from "../fotos/Producto 2_3.jpg";
import productocel from "../fotos/Producto 1_cel.jpg"
import productoprueba from "../fotos/Producto_prueba.jpg"
// import productoOJS from "../fotos/Producto_GE_OJS_OMP.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProductosScroll = () => {

    useEffect(() => {

        //DESPLAZAMIENTO HORIZONTAAAAAAAAAAAAAL

        ScrollTrigger.create({
            trigger: ".productos-container",
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 2,
        });

        gsap.to(".productos", {
            xPercent: -66,
            ease: "none",
            scrollTrigger: {
                trigger: ".productos",
                start: "center center+=10%",
                end: "+=3000",
                scrub: 3,
            },
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".productos",
                start: "top-=200vh top+=150vh",
                end: "bottom bottom",
                markers:true,
                scrub: 2,
            },
        });

        tl.fromTo(".img-pro1", { y: -150, opacity: 0 }, { y: -10, opacity: 1 });




    }, []);

    return (
        <div className="productos-container" id="productos">
            <div className="productos">
                <div className="producto producto-1">
                    <img
                        className="img-pro1"
                        src={window.innerWidth < 1000 ? productocel : productoprueba}
                        alt="Producto"
                    />
                </div>
                <div className="producto producto-2"> 
                    <img src={productoentrada} alt="" />
                </div>
               {/* <div className="producto producto-3">Producto 3</div> */}
            </div>
        </div>
    );
};

export default ProductosScroll;