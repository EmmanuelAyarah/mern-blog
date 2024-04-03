import { Footer, FooterLinkGroup } from "flowbite-react";
import { Link } from 'react-router-dom';
import { BsDiscord, BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTiktok, BsTwitter, BsTwitterX } from 'react-icons/bs';


export default function footerCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>cHurcH</span>
                    of-PHONES
                </Link>
            </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>

            <Footer.Title title="About"/>
            <Footer.LinkGroup col>
            <Footer.Link href='https://www.Konga.com' target="_blank" rel="noopener noreferrer">
                  IPHONES
              </Footer.Link>

              <Footer.Link href='https://www.Jumia.com' target="_blank" rel="noopener noreferrer">
                  ANDROID
              </Footer.Link>
              
            </Footer.LinkGroup>

            </div>

            <div>

            <Footer.Title title="Follow Us"/>
            <Footer.LinkGroup col>
            <Footer.Link href='https://www.t/me' target="_blank" rel="noopener noreferrer">
                Discord
            </Footer.Link>

            <Footer.Link href='/About' target="_blank" rel="noopener noreferrer">
                X
            </Footer.Link>
            
            </Footer.LinkGroup>

            </div>

            <div>

            <Footer.Title title="Legal"/>
            <Footer.LinkGroup col>
            <Footer.Link href='#' >
                 Privacy Policy
            </Footer.Link>

            <Footer.Link href='#'>
                Terms &amp; Conditions
            </Footer.Link>
            
            </Footer.LinkGroup>

            </div>
        
        </div>
        </div>

        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Church Of Phones" year={new Date().getFullYear()}/>
            <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
                <Footer.Icon href='https://facebook.com/emmanuelayarah' icon={BsFacebook}/>
                <Footer.Icon href='https://twitter.com/churchoffunds' icon={BsTwitterX}/>
                <Footer.Icon href='https://instagram.com/Nostrings' icon={BsInstagram}/>
                <Footer.Icon href='https://discord.com/coltonbrandon' icon={BsDiscord}/>
                <Footer.Icon href='https://tiktok.com/churchoffunds' icon={BsTiktok}/>
                <Footer.Icon href='https://github.com/emmanuelayarah' icon={BsGithub}/>
                <Footer.Icon href='#' icon={BsDribbble}/>
  
                
            </div>
        </div>
      </div>
        
    </Footer>
  )
}
