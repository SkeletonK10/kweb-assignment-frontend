import React from 'react';
import styled from '@emotion/styled';

import Header from './header';

const PageStyle = styled.div`
`;

type PageProps = { children: React.ReactNode };

const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <PageStyle>
      <Header />
      {children}
    </PageStyle>
  );
}

export default Page;