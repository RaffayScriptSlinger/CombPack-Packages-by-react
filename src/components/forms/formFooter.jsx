
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
  
  export function FormFooter() {
    return (
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterBrand
                href="https://flowbite.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                name="Flowbite"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="About Us" />
                <FooterLinkGroup col>
                  <FooterLink><Link to={"/"}>Home</Link> </FooterLink>
                  <FooterLink ><Link to={"/About"}>About</Link> </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Contact & Explore" />
                <FooterLinkGroup col>
                  <FooterLink ><Link to={"/Contact"}>Contact</Link></FooterLink>
                  <FooterLink ><Link to={"/Content"}>Packages</Link></FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Book Now" />
                <FooterLinkGroup col>
                  <FooterLink ><Link to={"/Form"}>Book Tour</Link> </FooterLink>
                  <FooterLink ><Link to={"/islamicForm"}>Book &amp; Islamic</Link> </FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          {/* <FooterDivider /> */}
          {/* <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
              <FooterIcon href="#" icon={BsDribbble} />
            </div>
          </div> */}
        </div>
      </Footer>
    );
  }
  