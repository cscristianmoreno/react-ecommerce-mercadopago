import { FC, ReactElement } from "react";

import "./section1.component.css";

import Image from "../../assets/images/image_1.png";

const Section1Component: FC = (): ReactElement => {
    return (
        <div className="class_main_container class_section1_container">
            <h1>Busca el producto que más te guste</h1>

            <div className="class_section1_products_container">
                {
                    [...Array(6)].map((_str: unknown, index: number): ReactElement => {
                        return  (
                            <div key={index} className="class_section_1_products">
                                <img className="class_section_1_image" src={Image}/>
                            </div>
                        );
                    })  
                }
            </div>
        </div>      
    );
};

export default Section1Component;