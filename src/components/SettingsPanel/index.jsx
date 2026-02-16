// src/components/SettingsPanel/index.jsx
import styles from './SettingsPanel.module.css';
import { useContext } from 'react';
import BlogSettingsContext from '../../context/blog-settings-context';

const SettingsPanel = () => {
  const { fontSize, setFontSize, lineHeight, setLineHeight } = useContext(BlogSettingsContext);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <label>
        Размер шрифта:{' '}
        <select
          className={styles.select}
          value={fontSize}
          onChange={(event) => setFontSize(event.target.value)}
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
      </label>

      <label>
        Межстрочный интервал:{' '}
        <select
          className={styles.select}
          value={lineHeight}
          onChange={(event) => setLineHeight(event.target.value)}
        >
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="1.75">1.75</option>
          <option value="2.0">2.0</option>
        </select>
      </label>
    </div>
  );
};

export default SettingsPanel;
