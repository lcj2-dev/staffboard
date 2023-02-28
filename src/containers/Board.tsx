import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {
  BoardMatrix,
  BoardNav,
  BoardSidebar,
  BoardWrapper
} from '../components';

export const Board = (): JSX.Element => {
  const { boardSlug } = useParams<{ boardSlug: string }>();

  return (
    <Fragment>
      <BoardNav boardName={boardSlug as string} />
      <BoardWrapper>
        <BoardMatrix></BoardMatrix>
        <BoardSidebar></BoardSidebar>
      </BoardWrapper>
    </Fragment>
  );
};
