import { FC, ReactElement } from "react";
import FooterComponent from "../../core/footer/footer.component";
import MenuComponent from "../../core/menu/menu.component";
import ShoppingComponent from "../../core/shopping/shopping.component";

const ShoppingSection: FC = (): ReactElement => {
    return (
        <>
            <MenuComponent/>
            <ShoppingComponent/>
            <FooterComponent/>
        </>

    );
};

export default ShoppingSection;