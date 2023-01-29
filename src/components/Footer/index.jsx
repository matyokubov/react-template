import { FooterBox } from "./style"
// import { NavLink } from "react-router-dom";

function Footer() {
    console.log("The Footer");
    return (
        <FooterBox>
            <div className="footer container">
                <h4>Footer</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut nihil,
                    enim est tenetur asperiores pariatur inventore quasi labore unde aliquam minima
                    voluptatibus deleniti facere laborum eos itaque tempore porro!

                </p>
            </div>
        </FooterBox>
    )
}

export default Footer;