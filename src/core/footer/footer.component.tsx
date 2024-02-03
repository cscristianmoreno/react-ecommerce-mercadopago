import { FC, ReactElement } from "react";

import "./footer.component.css";
import FacebookIcon from "../../components/icons/facebook.icon";
import GithubIcon from "../../components/icons/github.icon";
import LinkedinIcon from "../../components/icons/linkedin.icon";
import WhatsappIcon from "../../components/icons/whatsapp.icon";

const FooterComponent: FC = (): ReactElement => {
    return (
        <div className="class_footer_container">

            <div className="class_footer_title_developer_container">
                <span>Desarrollado por</span>
                &nbsp;
                <span className="class_footer_title_developer">Cristian Moreno</span>
            </div>
            <div className="class_footer_icon_container">
                <a href="https://wa.me/+5493874450711" target="_blank">
                    <WhatsappIcon/>
                </a>

                <a href="https://www.facebook.com/cmoreno1234/" target="_blank">
                    <FacebookIcon/>
                </a>

                <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank">
                    <LinkedinIcon/>
                </a>

                <a href="https://github.com/cscristianmoreno" target="_blank">
                    <GithubIcon/>
                </a>
            </div>
        </div>
    );
};

export default FooterComponent;