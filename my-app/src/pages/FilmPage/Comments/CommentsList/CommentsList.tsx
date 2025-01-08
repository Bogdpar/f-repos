import CommentsListItem from './CommentsListItem/CommentsListItem';
import CommentsButt from './CommentsButt/CommentsButt';
import { IComment } from '../../../../types/types';
import React, { FC } from 'react';
interface CommentsListProps {
  comments: IComment['data'][];
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const CommentsList: FC<CommentsListProps> = ({ comments, setPage }) => {
  return (
    <div>
      {comments.map(item => {
        return <CommentsListItem data={item} key={item.id} />;
      })}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '69%'
        }}
      >
        <div style={{ display: 'flex', marginLeft: '15px', gap: '5px  ' }}>
          <CommentsButt funk={setPage} title={1} />
          <CommentsButt funk={setPage} title={2} />
          <CommentsButt funk={setPage} title={3} />
          <CommentsButt funk={setPage} title={4} />
          <CommentsButt funk={setPage} title={5} />
        </div>
      </div>
    </div>
  );
};
export default CommentsList;
