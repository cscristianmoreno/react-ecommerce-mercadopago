import { FC, ReactElement, useEffect, useState } from "react";

import "./products.component.css";
import { ProductsDTO } from "../../dto/products.dto";
import { useProductsQuery } from "../../redux/api/product.api";
import { FuncModelStruct } from "../../models/function.model";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Button, CircularProgress } from "@mui/joy";
import { AddCircleOutline } from "@mui/icons-material";
import { setSaveProduct } from "../../redux/slice/product.slice";
import CategoriesComponent from "../../components/products/categories/categories.component";
import ItemComponent from "../../components/products/items/item.component";
import SearchComponent from "../../components/search/search.component";
import TitleComponent from "../../components/title/title.component";
import { SnackbarHookModelStruct } from "../../models/snackbar.model";
import { useSnackbar } from "../../hooks/useSnackbar";
import { useSelect } from "../../hooks/useSelect";
import { productPageSlice, setSavePage } from "../../redux/slice/product-page.slice";
import { HookModelStruct } from "../../models/hook.model";

const ProductsComponent: FC = (): ReactElement => {

    const page: number = useSelect(productPageSlice.name);

    const [category, setCategory]: HookModelStruct<string> = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/typedef
    const { data, isSuccess, isError, refetch, isFetching } = useProductsQuery(page);

    const dispatch: Dispatch<UnknownAction> = useDispatch<Dispatch<UnknownAction>>();

    const { snackbarError, snackbarSuccess }: SnackbarHookModelStruct = useSnackbar();

    const saveProduct: FuncModelStruct<ProductsDTO, void> = (product: ProductsDTO): void => {
        dispatch(setSaveProduct(product));
    };

    useEffect((): void => {
        refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, category]);

    useEffect((): void => {
        if (!isError) {
            return;
        }

        snackbarError("Ocurrió un error al cargar los productos");
    }, [isError]);

    const handleOnPagination: FuncModelStruct = (): void => {
        if (!data) {
            return;
        }
        
        dispatch(setSavePage(page + 1));
        snackbarSuccess("Se cargaron nuevos productos");
        setCategory("");
    };

    return (
        <div className="class_main_container class_products_main_container">
            <TitleComponent marginTop={3} title="Busca tu producto"/>

            <SearchComponent placeholder="Buscar producto"/>
            
            <div className="class_products_container">
                {isSuccess && <CategoriesComponent products={data} category={setCategory}/>}
                {
                    isSuccess && data && 
                    [...data.content].filter((product: ProductsDTO): boolean => product.category.includes(category)).map((product: ProductsDTO, index: number): ReactElement => {
                        return <ItemComponent key={index} product={product} onClick={(): void => saveProduct(product)}/>;
                    })
                }
            </div>

            {isError && <span>Ocurrió un error al buscar productos disponibles...</span>}
            {isFetching && <CircularProgress size="sm"/>}            
            {isSuccess && <Button startDecorator={<AddCircleOutline/>} onClick={(): void => handleOnPagination()}>Cargar más productos</Button>}
            <br/>
        </div>
    );
};

export default ProductsComponent;
