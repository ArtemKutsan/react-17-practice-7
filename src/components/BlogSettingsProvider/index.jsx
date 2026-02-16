// src/components/BlogSettingsProvider.jsx
import { useState } from 'react';
import BlogSettingsContext from '../../context/blog-settings-context';

const BlogSettingsProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('16px');
  const [lineHeight, setLineHeight] = useState('1.5');

  return (
    <BlogSettingsContext.Provider value={{ fontSize, setFontSize, lineHeight, setLineHeight }}>
      {children}
    </BlogSettingsContext.Provider>
  );
};

export default BlogSettingsProvider;
