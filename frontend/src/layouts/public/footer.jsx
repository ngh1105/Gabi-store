import { Footer as FbFooter } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
    return (
        <FbFooter container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <FbFooter.Brand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="Flowbite"
                    />
                    <FbFooter.LinkGroup>
                        <FbFooter.Link href="#">About</FbFooter.Link>
                        <FbFooter.Link href="#">Privacy Policy</FbFooter.Link>
                        <FbFooter.Link href="#">Licensing</FbFooter.Link>
                        <FbFooter.Link href="#">Contact</FbFooter.Link>
                    </FbFooter.LinkGroup>
                </div>
                <FbFooter.Divider />
                <FbFooter.Copyright href="#" by="GabiStore™" year={2023} />
            </div>
        </FbFooter>
    );
}
