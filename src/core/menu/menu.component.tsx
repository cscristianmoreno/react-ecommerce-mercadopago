import { MenuModelStruct } from "../../models/menu.mode";

import "./menu.component.css";

import { Dispatch, FC, ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FuncModelStruct } from "../../models/function.model";
import { setModal } from "../../redux/slice/modal.slice";
import { UnknownAction } from "@reduxjs/toolkit";
import { HookModelStruct } from "../../models/hook.model";
import { Link } from "react-router-dom";
import { ProductsDTO } from "../../dto/products.dto";
import { useSelect } from "../../hooks/useSelect";
import { productSlice } from "../../redux/slice/product.slice";
import ShoppingCartIcon from "../../components/icons/shoppincart.icon";
import LoginComponent from "../login/login.component";
import RegisterComponent from "../register/register.component";
import { UsersDTO } from "../../dto/users.dto";
import { userSlice } from "../../redux/slice/user.slice";
import { Avatar } from "@mui/joy";

const ITEMS: MenuModelStruct[] = [
    { item: "Inicio", link: "/" },
    { item: "Productos", link: "/products" },
    { item: "Ingresar", link: "/login" },
];

const MenuComponent: FC = (): ReactElement => {

    const [formRegister, setFormRegister]: HookModelStruct<boolean> = useState<boolean>(false);

    const products: ProductsDTO[] = useSelect(productSlice.name);
    const user: UsersDTO = useSelect(userSlice.name);

    useEffect((): void => {
    }, [user]);

    const dispatch: Dispatch<UnknownAction> = useDispatch();

    const handleOpenModal: FuncModelStruct = (): void => {
        dispatch(setModal(true));
    };

    return (
        <>
            <div className="class_menu_container">
                <div className="class_menu_icon_container">
                    <span className="class_menu_title">Electronic-Shop</span>
                </div>
                
                <div className="class_menu_items_container">
                    {
                        ITEMS.map((item: MenuModelStruct, index: number): ReactElement => {
                            if (item.link.includes("login")) {
                                return (
                                    (Object.keys(user).length > 0) ?
                                        <a onClick={(): void => handleOpenModal()} key={index}>
                                            <Avatar>{user.name[0].toUpperCase() + user.lastname[0].toUpperCase()}</Avatar>
                                        </a>
                                    :
                                        <a onClick={(): void => handleOpenModal()} key={index}>{item.item}</a>
                                );
                            }

                            if (user && item.link.includes("Ingresar")) {
                                return <Avatar>{user.name[0]}</Avatar>;
                            }

                            return <Link key={index} to={item.link}>{item.item}</Link>;
                        })
                    }
                
                    <Link to="/shopping" className="class_menu_icon_shopping_cart">
                        <ShoppingCartIcon/>
                        <span className={(products.length > 0) ? "class_menu_icon_effect" : ""}>
                        </span>
                    </Link>
                </div>
            </div>

            {
                (!formRegister) ?
                    <LoginComponent onClick={(): void => setFormRegister(true)}/>
                :
                    <RegisterComponent onClick={(): void => setFormRegister(false)}/>
            }
        </>
    );
};

export default MenuComponent;