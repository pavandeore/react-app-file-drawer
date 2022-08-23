import React from 'react';
import './style.css';
import Drawer from './components/Drawer';

export default function App() {
  const data = [
    {
      title: 'folder1',
      subFolder: [{ title: 'file1' }, { title: 'file2' }, { title: 'file3' }],
    },
    {
      title: 'folder2',
      subFolder: [{ title: 'file1' }, { title: 'file2' }, { title: 'file3' }],
    },
  ];

  return (
    <div>
      <Drawer data={data} />
    </div>
  );
}
