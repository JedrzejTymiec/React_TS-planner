//Components
import BuyNow from './BuyNow';
import MobileApp from './MobileApp';
import FAQ from './FAQ';
//Styles
import { FooterWrapper } from './style/Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper className="footer-container">
      <BuyNow />
      <MobileApp />
      <FAQ />
    </FooterWrapper>
  );
};

export default Footer;
