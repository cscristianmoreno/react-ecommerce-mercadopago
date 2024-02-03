import { Typography } from "@mui/joy";
import { FC, ReactElement } from "react";
import { TitleModelStruct } from "../../models/title.model";

const TitleComponent: FC<TitleModelStruct> = ({ ...props }: TitleModelStruct): ReactElement => {
    const { title, level }: TitleModelStruct = props;

    if (!level) {
        props.level = "h1";
    }

    return <Typography {...props}>{title}</Typography>;
};

export default TitleComponent;