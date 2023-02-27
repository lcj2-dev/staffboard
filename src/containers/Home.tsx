import { Fragment } from 'react';
import {
  Headline,
  BoardCard,
  CardGrid,
  HomeNav,
  SystemStatus,
  HomeWrapper
} from '../components';
import { dummyBoards } from '../data/state';

export const Home = (): JSX.Element => {
  return (
    <Fragment>
      <HomeNav />
      <HomeWrapper>
        {/* boards section */}
        <div>
          <Headline text='Boards' />

          <CardGrid>
            {dummyBoards.map((b, idx) => (
              <BoardCard board={b} key={idx} />
            ))}
          </CardGrid>
        </div>

        {/* system section */}
        <div>
          <Headline text='System status' />

          <SystemStatus />
        </div>
      </HomeWrapper>
    </Fragment>
  );
};
