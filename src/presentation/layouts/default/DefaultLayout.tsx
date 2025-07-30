
import Header from "../sections/default/header/Header";
import Background from "@/presentation/renderutils/background/Background";
import { useState } from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
   const [isClick, setClick] = useState<boolean>(false);
   const handleClick = () => {
    setClick(true);
   }
    return (
        <>
        <Background onClick={handleClick}>
        <Header isClick={isClick} onClick={handleClick}/>
        <main>{children}</main>
        </Background>
        </>
    );
};

export default DefaultLayout;
