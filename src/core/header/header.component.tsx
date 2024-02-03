import { FC, ReactElement } from "react";
import "./header.component.css";
import HeaderImage from "../../assets/images/image_1.png";

const HeaderComponent: FC = (): ReactElement => {  
    return (
        <div className="class_header_container">
            <div className="class_header_title_container">
                <h1>Tus compras, a tu alcance</h1>

                <div className="class_header_subtitle_container">
                    <span className="class_subtitle">
                        Busca más de 200 productos en una gran variedad de catálogos,
                        elige el producto que más te guste y guárdalo en el carro de compras
                    </span>
                </div>
            </div>
            
            <div className="class_header_image_container">
                <img src={HeaderImage}/>
            </div>

            {/* <SectionNumber [page]="'01'" [title]="'SECCIÓN-1'"></SectionNumber> */}
        </div>
    );
};

export default HeaderComponent;