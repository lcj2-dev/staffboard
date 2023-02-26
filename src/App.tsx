import { Fragment } from 'react';
import { BoardCard, ContentWrapper, Headline, Navbar } from './components';

export const App = (): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      <ContentWrapper>
        <Headline text='Boards'>
          <h3>asd</h3>
        </Headline>

        {[...Array(3)].map(e => (
          <BoardCard title='ad' />
        ))}
      </ContentWrapper>
    </Fragment>
  );
};
