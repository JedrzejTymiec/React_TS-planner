import BuyNow from './BuyNow';
import MobileApp from './MobileApp';
import FAQ from './FAQ';
import { FooterWrapper } from './Footer.styles';

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
