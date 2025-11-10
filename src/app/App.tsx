import './styles/index.scss'
import { Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
        <Suspense fallback=''>
          <Navbar/>
          <div className='content-page'>
            <Sidebar/>
            <AppRouter/>
          </div>
        </Suspense>

       
    </div>
  )
}

export default App