import { FC, ReactElement } from "react";

import "./section3.component.css";

const Section3Component: FC = (): ReactElement => {
    return (
        <div className="class_main_container class_section3_container">
            <div className="class_section3_description_container">
                <span className="class_section3_description_title">ACERCA DE NOSOTROS</span>
                
                <span className="class_section3_description_subtitle">
                    En Electronic-Shop, estamos comprometidos a brindar el mejor servicio de compra en línea posible. 
                    Ofrecemos una amplia selección de productos de alta calidad, un servicio 
                    excepcional al cliente y una experiencia de compra sin complicaciones. Creemos que cada cliente merece sentirse valorado y escuchado, 
                    y nos esforzamos por hacer que eso suceda en cada interacción que tenemos. ¡Gracias por elegir Electronic-Shop para todas tus 
                    necesidades de compras en línea!
                </span>
            </div>
        </div>
    );
};

export default Section3Component;