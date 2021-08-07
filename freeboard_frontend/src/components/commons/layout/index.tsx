import LayoutBanner from './baenner/LayoutBanner.container';
import LayoutHeader from './header/LayoutHeader.container';
import LayoutNavigation from './navigation/LayoutNavigation.container';
import LayoutFooter from './footer/LayoutFooter.container';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Body = styled.div`
  /* margin: 0 auto; */
  height: 100%;
`;
const Wrapper = styled.div`
  /* height: 1080px; */
`;

interface IProps {
  children: ReactNode;
}

export default function Layout(props: IProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        {/* <div style={{ backgroundColor: 'green' }}>사이드메뉴입니다.</div> */}
        <Body>{props.children}</Body>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
