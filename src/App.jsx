import { useContext, useState } from 'react';
import './App.css';
import ThemeContext from './context/theme-context';
import ThemeSwitcher from './components/ThemeSwitcher';
import DataProvider from './components/DataProvider';
import DataContext from './context/data-context';
import TodoApp from './components/TodoApp';
import SettingsPanel from './components/SettingsPanel';
import BlogSettingsProvider from './components/BlogSettingsProvider';
import Article from './components/Article';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, userName: 'Artem' }}>
      <DataProvider>
        <main>
          <h1 className="container">React 17 Practice 7</h1>

          <section>
            <div className="container">
              {/* <h2>Задача 3: Приложение TodoApp</h2>
              <TodoApp /> */}

              {/* <h2>Задача 4: Контекст темы</h2>
              <ThemeSwitcher /> */}

              {/* <h2>Задача 6: Контекст данных</h2>
              <DataViewer /> */}

              <h2>Задача 1: Панель настроек</h2>
              <BlogSettingsProvider>
                <SettingsPanel />
                <Article />
              </BlogSettingsProvider>
            </div>
          </section>
        </main>
      </DataProvider>
    </ThemeContext.Provider>
  );
}

// Просмотр данных
const DataViewer = () => {
  const { data } = useContext(DataContext);

  if (!data) return <p>Loading...</p>;

  // console.log(data);

  return (
    <pre
      style={{
        maxWidth: '100%',
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default App;
