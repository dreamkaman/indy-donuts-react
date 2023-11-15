import { FC } from "react";

interface IPictureProps {
    imgPath: string;
    imgAlt: string;
}
const Picture: FC<IPictureProps> = ({ imgPath, imgAlt }) => {
    return <img src={imgPath} alt={imgAlt} />
}

export default Picture;