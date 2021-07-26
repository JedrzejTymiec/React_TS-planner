import { PageWrapper } from './Page.styles';

type Props = {
  text: string;
};

const Page: React.FC<Props> = ({ text }) => {
  return (
    <PageWrapper>
      <h1>{text}</h1>
    </PageWrapper>
  );
};

export default Page;
