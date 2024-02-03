import { FC, ReactElement, useState } from "react";

import "./shopping.component.css";
import { HookModelStruct } from "../../models/hook.model";
import CreditCardComponent from "../../components/credit-card/credit-card.component";
import TableComponent from "../../components/shopping/table/table.component";
import TitleComponent from "../../components/title/title.component";

const ShoppingComponent: FC = (): ReactElement => {

    const [payment, setPayment]: HookModelStruct<boolean> = useState<boolean>(false);

    return (
        <div className="class_main_container class_shopping_container" style={{ marginBottom: 150 }}>
            <TitleComponent marginTop={3} title="Mis compras"/>

            <div className="class_shopping_items_container">
                <TableComponent/>
                
                {/* {!payment && <PriceComponent onClick={(): void => setPayment(true)}/>} */}
                {!payment && <CreditCardComponent onClick={(): void => setPayment(false)}/>}
            </div>
        </div>
    );
};

export default ShoppingComponent;