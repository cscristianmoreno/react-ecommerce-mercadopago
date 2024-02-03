import { FC, ReactElement } from "react";

import "./product.section.css";
import FooterComponent from "../../core/footer/footer.component";
import MenuComponent from "../../core/menu/menu.component";
import ProductsComponent from "../../core/products/products.component";

const ProductSection: FC = (): ReactElement => {
    return (
        <>
            <MenuComponent/>
            <ProductsComponent/>
            <FooterComponent/>
        </>
    );
};

export default ProductSection;