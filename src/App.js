import React, { useState, useEffect } from "react";
import "./styles.css";
import { data } from "./Data";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = data.filter((o) => o.nim.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Kelompok 4</h1>
      <h1>Cari Data Mahasiswa</h1>
      <h5>Note : kelompok genap pake onChange/ onKeyUp (Gapake Button)</h5>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="nim mahasiswa"
      />
      {searchResults &&
        searchResults.map((item) => (
          <div key={item.nim[0]} className="results">
            <h5>Hasil Pencarian : </h5>
            <div className="profile-card">
              <div className="card-header">
                <h3>{item.nama_lengkap}</h3>
                <div className="img-profile">
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></img>
                </div>
              </div>
              <div className="card-body">
                <table border={0}>
                  <tr>
                    <td>Nama Panggilan</td>
                    <td>:</td>
                    <td>{item.nama_panggilan}</td>
                  </tr>
                  <tr>
                    <td>Nim</td>
                    <td>:</td>
                    <td>{item.nim}</td>
                  </tr>
                  <tr>
                    <td>Nomer Telepon</td>
                    <td>:</td>
                    <td>{item.nomor_telepon}</td>
                  </tr>
                  <tr>
                    <td>Hobi</td>
                    <td>:</td>
                    <td>{item.hobi}</td>
                  </tr>
                </table>
            
              </div>
              <div className="card-footer">
                <div className="medsos">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <p> {item.email}</p>
                </div>
                <div className="medsos">
                  <img src="https://line.me/static/115d5539e2d10b8da66d31ce22e6bccd/84249/favicon.png"></img>
                  <p> {item.id_line}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
