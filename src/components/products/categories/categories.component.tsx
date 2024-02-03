import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { CategoryModelStruct } from "../../../models/category.model";
import { ProductsDTO } from "../../../dto/products.dto";
import { ResultModelStruct } from "../../../models/result.model";
import { FuncModelStruct } from "../../../models/function.model";

const CATEGORY: CategoryModelStruct[] = [
    { title: "Todo", icon: "fa-border-all", category: "" },
    { title: "Remeras", icon: "fa-tshirt", category: "shirt" },
    { title: "Pantalón", icon: "fa-bacon", category: "pant" },
    { title: "Mochilas", icon: "fa-toolbox", category: "backpack" },
    { title: "Zapatillas", icon: "fa-shoe-prints", category: "footwear" },
    { title: "Conjuntos", icon: "fa-vest", category: "set" },
    { title: "Gorras", icon: "fa-hat-cowboy", category: "cap" },
    { title: "Teléfonos", icon: "fa-mobile", category: "phone" },
    { title: "Valijas", icon: "fa-suitcase-rolling", category: "luggage" },
    { title: "Gafas", icon: "fa-glasses", category: "glasses" },
    { title: "Televisores", icon: "fa-tv", category: "tv" },
    { title: "Ofertas", icon: "fa-tag", category: "+" },
];

const CategoriesComponent: FC<{ products: ResultModelStruct<ProductsDTO[]>, category: Dispatch<SetStateAction<string>> }> = ({ products, category }: { products: ResultModelStruct<ProductsDTO[]>, category: Dispatch<SetStateAction<string>> }): ReactElement => {

    const filterByCategory: FuncModelStruct<string, number> = (category: string): number => {
        const productsFilter: ProductsDTO[] = products.content.filter((product: ProductsDTO): boolean => product.category.includes(category));
        return productsFilter.length;
    };

    const handleChangeCategory: FuncModelStruct<CategoryModelStruct, void> = (icon: CategoryModelStruct): void => {
        if (!filterByCategory(icon.category)) {
            return;
        }

        category(icon.category);
    };

    return (
            <div className="class_products_category_container">
                {
                    CATEGORY.map((icon: CategoryModelStruct, index: number): ReactElement => {
                        return (
                            <div onClick={(): void => handleChangeCategory(icon)} key={index} className="class_products_category">
                                {
                                    (filterByCategory(icon.category)) ?
                                        <span><i className={"fas " + icon.icon}/>({filterByCategory(icon.category)})</span>
                                    :
                                        <span style={{cursor: "not-allowed"}}><i className={"fas " + icon.icon}/>({filterByCategory(icon.category)})</span>
                                }
                            </div>
                        );
                    })
                }
            </div>
    );
};

export default CategoriesComponent;