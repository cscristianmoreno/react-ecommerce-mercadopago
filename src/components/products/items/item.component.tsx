import { Button } from "@mui/joy";
import { FC, MouseEventHandler, ReactElement } from "react";
import { numberPointerFormat } from "../../../utils/number-pointer.util";
import { ProductsDTO } from "../../../dto/products.dto";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { ObserverModelStruct } from "../../../models/observer.model";
import { findInArray } from "../../../utils/find.util";
import { useSelect } from "../../../hooks/useSelect";
import { productSlice } from "../../../redux/slice/product.slice";

const ItemComponent: FC<{ product: ProductsDTO, onClick: MouseEventHandler }> = ({ product, onClick }: { product: ProductsDTO, onClick: MouseEventHandler }): ReactElement => {

    const { addElement, isIntersecting }: ObserverModelStruct = useIntersectionObserver();

    const products: ProductsDTO[] = useSelect(productSlice.name);

    return (
        <div ref={addElement} className="class_products">
            <div className="class_products_image_container">
                <img src={product.image}/>
            </div>

            <div className="class_products_offer_container">
                <span className="class_products_price">{numberPointerFormat(product.price)}</span>
                {/* <span className="class_products_price class_products_price_offer">{product.price}</span> */}
            </div>

            <span className="class_products_title">{product.title}</span>

            {
                (isIntersecting && findInArray(products, product)) ?
                    <Button style={{opacity: 1, width: 75}} color="neutral">Añadido</Button>
                :
                    <Button onClick={onClick} color="primary">Añadir</Button>

            }
        </div>
    );
};

export default ItemComponent;