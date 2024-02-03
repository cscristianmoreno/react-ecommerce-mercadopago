import { FC, ReactElement } from "react";
import FooterComponent from "../../core/footer/footer.component";
import HeaderComponent from "../../core/header/header.component";
import MenuComponent from "../../core/menu/menu.component";
import Section1Component from "../../core/section1/section1.component";
import Section2Component from "../../core/section2/section2.component";
import Section3Component from "../../core/section3/section3.component";

const IndexSection: FC = (): ReactElement => {

    return(
        <>
            <MenuComponent/>
            <HeaderComponent/>
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
            <FooterComponent/>
        </>
    );
};

export default IndexSection;