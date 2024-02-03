import { Search } from "@mui/icons-material";
import { Input } from "@mui/joy";
import { FC, ReactElement } from "react";

const SearchComponent: FC<{ placeholder: string }> = ({ placeholder }: { placeholder: string }): ReactElement => {
    return <Input sx={{marginTop: 5}} placeholder={placeholder} startDecorator={<Search/>}/>;
};

export default SearchComponent;

