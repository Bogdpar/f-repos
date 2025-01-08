import React, { FC, useEffect, useState } from 'react';
import styles from './Comments.module.scss';
import ModalWindow from './ModalWindow/ModalWIndow';
import CommentsList from './CommentsList/CommentsList';
import axios from 'axios';
import { IComments } from '../../../types/types';

const Comments: FC = () => {
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [comments, setComments] = useState<IComments[]>([]);
  const [comment, setComment] = useState({ email: '', body: '' });
  const [emailErorr, setEmailErorr] = useState(true);
  const [bodyErorr, setBodyErorr] = useState(true);
  const [emailDirty, setEmailDirty] = useState(false);
  const [bodyDirty, setBodyDirty] = useState(false);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    if (emailErorr || bodyErorr) {
      setValid(false);
    } else setValid(true);
  }, [emailErorr, bodyErorr]);

  const emailHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(prev => {
      return {
        ...prev,
        email: e.target.value
      };
    });
    const re = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErorr(true);
    } else {
      setEmailErorr(false);
    }
  };
  const bodyHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(prev => {
      return {
        ...prev,
        body: e.target.value
      };
    });
    const re = /^.+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setBodyErorr(true);
    } else {
      setBodyErorr(false);
    }
  };

  const blurHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'body':
        setBodyDirty(true);
        break;
      default:
    }
  };

  useEffect(() => {
    axios
      .get<IComments[]>(
        `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`
      )
      .then(response => {
        setComments(response.data);
      });
  }, [limit, page]);

  const handleSign = async () => {
    try {
      await axios
        .post('http://localhost:3001/Comments', comment)
        .then(response => {
          setComments(prev => [response.data, ...prev]);
          setComment(prev => {
            return {
              ...prev,
              email: '',
              body: ''
            };
          });
          console.log('Данные отправлены успешно:', response.data);
        });
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };
  return (
    <div className={styles.comments}>
      <div className={styles.head}>
        <h1>Comments</h1>
        <button onClick={() => setVisible(true)}>Add comment</button>
        <ModalWindow visible={visible} setVisible={setVisible}>
          <h1>Comment</h1>
          <input
            name='email'
            type='email'
            placeholder='Email'
            autoComplete='off'
            value={comment.email}
            onChange={e => emailHendler(e)}
            onBlur={e => blurHendler(e)}
          />
          {emailErorr && emailDirty && (
            <span style={{ color: 'red', margin: 0 }}>{'incorect'}</span>
          )}
          <input
            name='body'
            type='text'
            placeholder='Comment'
            autoComplete='off'
            value={comment.body}
            onChange={e => bodyHendler(e)}
            onBlur={e => blurHendler(e)}
          />
          {bodyErorr && bodyDirty && (
            <span style={{ color: 'red', margin: 0 }}>{'incorect'}</span>
          )}
          <button
            disabled={!valid}
            onClick={() => {
              setVisible(false);
              handleSign();
            }}
          >
            Sign
          </button>
        </ModalWindow>
      </div>
      <div>
        <CommentsList comments={comments} setPage={setPage} />
      </div>
    </div>
  );
};
export default Comments;
