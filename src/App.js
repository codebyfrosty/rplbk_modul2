import React, { useState, useEffect } from 'react';
import './styles.css';
import { data } from './Data';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = data.filter(o => o.nim.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className='App'>
      <h1>Kelompok 4</h1>
      <h1>Cari Data Mahasiswa</h1>
      <h5>Note : kelompok genap pake onChange/ onKeyUp (Gapake Button)</h5>
      <input type='text' value={searchTerm} onChange={handleChange} placeholder='nim mahasiswa' />
      {searchResults &&
        searchResults.map(item => (
          <div key={item.nim[0]} className='results card'>
            <h5>Hasil Pencarian : </h5>
            <ul>
              <li>Nama : {item.nama_lengkap}</li>
              <li>Nama Panggilan : {item.nama_panggilan}</li>
              <li>NIM : {item.nim}</li>
              <li>No Telepon : {item.nomor_telepon}</li>
              <li>ID Line : {item.id_line}</li>
              <li>Email : {item.email}</li>
              <li>Hobi : {item.hobi}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}
