import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import './SearchPage.css';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (criteria) => {
    // 검색 로직 추가 (API 호출 등)
    console.log('Search criteria:', criteria);
    // 검색 결과 설정 (예시 데이터)
    setSearchResults([
      { id: 1, name: '공연장 A', location: '서울', capacity: 100, type: '소규모 공연장' },
      { id: 2, name: '공연장 B', location: '부산', capacity: 200, type: '중형 공연장' },
    ]);
  };

  return (
    <div className="search-page">
      <SearchForm onSearch={handleSearch} />
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map(result => (
            <div key={result.id} className="search-result">
              <h3>{result.name}</h3>
              <p>위치: {result.location}</p>
              <p>수용 인원: {result.capacity}</p>
              <p>유형: {result.type}</p>
            </div>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
