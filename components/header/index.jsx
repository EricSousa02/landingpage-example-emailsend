import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "../button";
import { ScrollTo } from "../../utils/scrollTo";

const Header = () => {
  return (
    <div className={Styles.container} id="Home">
      <div className={Styles.logotipo}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={Styles.menu}>
        <Link href="#Home">Home</Link>
        <Link href="#fazemos">O que fazemos</Link>
        <Link href="#Cases">Cases</Link>
      </div>
      <div className={Styles.action}>
        <Button title="Fale conosco" onClick={() => ScrollTo("contato")} />
      </div>
    </div>
  );
};

export default Header;
