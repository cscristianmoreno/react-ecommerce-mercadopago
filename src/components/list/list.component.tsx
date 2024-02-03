import { Check } from "@mui/icons-material";
import { ListItem } from "@mui/joy";
import { FC, ReactElement } from "react";

const ListItemComponent: FC<{ item: string }> = ({ item }: { item: string }): ReactElement => {
    return (
        <ListItem> 
            <Check/>
            {item}
        </ListItem>
    );
};

export default ListItemComponent;