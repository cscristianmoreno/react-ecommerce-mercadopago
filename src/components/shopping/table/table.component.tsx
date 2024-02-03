import { Table } from "@mui/joy";
import { FC, ReactElement } from "react";

import "./table.component.css";
import { ProductsDTO } from "../../../dto/products.dto";
import { useSelect } from "../../../hooks/useSelect";
import RowComponent from "../row/row.component";
import { productSlice } from "../../../redux/slice/product.slice";
import { PriceHookModelStruct } from "../../../models/price.model";
import { usePrice } from "../../../hooks/usePrice";
import { numberPointerFormat } from "../../../utils/number-pointer.util";

const TableComponent: FC = (): ReactElement => {

    const products: ProductsDTO[] = useSelect(productSlice.name);

    const { price, additional }: PriceHookModelStruct = usePrice();

    return (
        <div className="class_shopping_table_container">
            <Table hoverRow size="md" stickyHeader stickyFooter variant="outlined">
                <thead>
                    <tr>
                        <th style={{ width: 325 }}>Producto</th>
                        <th>Cantidad</th>
                        <th scope="col">Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody style={{overflow: "scroll"}}>
                    {
                        (products.length) ?
                            products.map((product: ProductsDTO, index: number): ReactElement => {
                                return <RowComponent key={index} product={product}/>;
                            })
                        :
                            <tr><th>Aún no hay productos</th></tr>
                    }
                </tbody>
                <tfoot>
                    <tr style={{width: "100%"}}>
                        <td>En total: {products.length}</td>
                        <td>Adicional: +{numberPointerFormat(additional)}</td>
                        <td>Precio: {numberPointerFormat(price)}</td>
                        <td>Total: {numberPointerFormat(price + additional)}</td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default TableComponent;