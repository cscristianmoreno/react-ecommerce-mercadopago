import { FC, ReactElement } from "react";
import FooterComponent from "../../core/footer/footer.component";
import HeaderComponent from "../../core/header/header.component";
import MenuComponent from "../../core/menu/menu.component";

const LoginSection: FC = (): ReactElement => {
    return (
        <>
            <MenuComponent/>
            <HeaderComponent/>
            <FooterComponent/>
        </>
    );
};

export default LoginSection;