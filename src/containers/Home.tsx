import { Fragment } from 'react';
import {
  ContentWrapper,
  Headline,
  BoardCard,
  CardGrid,
  HomeNav
} from '../components';

export const Home = (): JSX.Element => {
  return (
    <Fragment>
      <HomeNav />
      <ContentWrapper>
        <Headline text='Boards'>
          <h3>asd</h3>
        </Headline>

        <CardGrid>
          {[...Array(7)].map((e, idx) => (
            <BoardCard title='STOW' key={idx} />
          ))}
        </CardGrid>
      </ContentWrapper>
    </Fragment>
  );
};
