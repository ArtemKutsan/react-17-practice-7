// src/components/Article/index.jsx
import styles from './Article.module.css';
import { useContext } from 'react';
import BlogSettingsContext from '../../context/blog-settings-context';

function Article() {
  const { fontSize, lineHeight } = useContext(BlogSettingsContext);
  return (
    <p style={{ fontSize, lineHeight }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptatem blanditiis expedita
      aspernatur sapiente facilis excepturi? Excepturi officia, soluta non facilis tenetur ratione
      dolorum. Cupiditate iure illo exercitationem officiis ea!
    </p>
  );
}

export default Article;
