import React, { FC, useEffect, useState } from 'react';
import styles from './AuthPage.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../resources/routes-constants';
import { useAppDispatch } from '../../hooks/storeHooks';
import { log } from '../../store/slice/AuthSlice';
const AuthPage: FC = () => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [logDirty, setLogDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);
  const [logError, setLogError] = useState('Enter your login');
  const [passError, setPassError] = useState('Enter your password');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (logError || passError) {
      setFormValid(false);
    } else setFormValid(true);
  }, [passError, logError]);

  const logHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    const re = /^[0-9A-Za-z]{6,16}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLogError('Incorrect input');
    } else {
      setLogError('');
    }
  };

  const passHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    const re = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setPassError('Incorrect input');
    } else {
      setPassError('');
    }
  };

  const blurHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'login':
        setLogDirty(true);
        break;
      case 'pass':
        setPassDirty(true);
        break;
      default:
    }
  };

  return (
    <div className={styles.wra}>
      <div className={styles.wraper}>
        <div className={styles.title}>
          <h1>Loged In</h1>
        </div>
        <div className={styles.form}>
          <form action='#'>
            <input
              onChange={e => logHendler(e)}
              onBlur={e => blurHendler(e)}
              value={login}
              name='login'
              type='text'
              placeholder='Login'
              autoComplete='off'
            />
            {logError && logDirty && (
              <span style={{ color: 'red' }}>{logError}</span>
            )}

            <input
              onChange={e => passHendler(e)}
              onBlur={e => blurHendler(e)}
              value={pass}
              name='pass'
              type='password'
              placeholder='Password'
              autoComplete='off'
            />
            {passError && passDirty && (
              <span style={{ color: 'red', margin: 0 }}>{passError}</span>
            )}
            <button
              disabled={!formValid}
              onClick={(e) => {
                e.preventDefault()
                dispatch(log(true))
              }}
            >
              <Link to={ROUTES.MAINPAGE_ROUTE}> Log In</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
