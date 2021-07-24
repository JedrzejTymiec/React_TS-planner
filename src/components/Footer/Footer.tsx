//Components
import BuyNow from './BuyNow';
import MobileApp from './MobileApp';
import FAQ from './FAQ';
//Styles
import { FooterWrapper } from './style/Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <BuyNow />
      <MobileApp />
      <FAQ />
    </FooterWrapper>
  );
};

export default Footer;