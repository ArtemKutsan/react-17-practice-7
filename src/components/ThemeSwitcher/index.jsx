// src/components/ThemeSwitcher/index.jsx
import styles from './ThemeSwitcher.module.css';
import { useContext } from 'react';
import ThemeContext from '../../context/theme-context';

function ThemeSwitcher() {
  console.log(useContext(ThemeContext));

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={theme === 'dark' ? { backgroundColor: 'gray' } : { backgroundColor: 'lightblue' }}>
      <p>Текущая тема: {theme}</p>
      <button onClick={toggleTheme}>Изменить тему</button>
    </div>
  );
}

export default ThemeSwitcher;
