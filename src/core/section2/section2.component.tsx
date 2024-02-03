import { FC, ReactElement } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { CountdownModelStruct } from "../../models/countdown.model";
import "./section2.component.css";

import Image from "../../assets/images/image_point_finger.png";
import { Chip } from "@mui/joy";

const Section2Component: FC = (): ReactElement => {

    const { getDay, getHour,getMinute, getSecond }: CountdownModelStruct = useCountdown();

    return (
        <div className="class_main_container class_section2_container">
            <span className="class_section_title class_title">Ofertas del día</span>
            
            
            <div className="class_section2_description_container">
                <div className="class_section2_description_title_container">
                    <span className="class_section2_description_title">OFERTA DISPONIBLE</span>

                    <div className="class_section2_description_timer_container">
                        <div className="class_section2_description_timer">
                            <span>{getDay()}</span>
                            <span>días</span>
                        </div>

                        <div className="class_section2_description_timer">
                            <span>{getHour()}</span>
                            <span>horas</span>
                        </div>

                        <div className="class_section2_description_timer">
                            <span>{getMinute()}</span>
                            <span>minutos</span>
                        </div>

                        <div className="class_section2_description_timer">
                            <span>{getSecond()}</span>
                            <span>segundos</span>
                        </div>
                    </div>

                    <div className="class_section2_description_offer_container">
                        <span>Productos al azar</span>
                        <Chip size="lg" color="warning" variant="solid">5% a 90% OFF</Chip>
                    </div>
                </div>
                
                <div className="class_section2_image_container">
                    <img src={Image}/>
                </div>
            </div>
            
            {/* <SectionNumber [page]="'03'" [title]="'SECCIÓN-3'"></SectionNumber> */}
        </div>
    );
};

export default Section2Component;