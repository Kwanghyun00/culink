import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [venueType, setVenueType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, date, capacity, venueType });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="location">지역</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="지역"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="capacity">수용 인원</label>
        <input
          type="number"
          id="capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          placeholder="수용 인원"
        />
      </div>
      <div className="form-group">
        <label htmlFor="venueType">공연장 유형</label>
        <select
          id="venueType"
          value={venueType}
          onChange={(e) => setVenueType(e.target.value)}
        >
          <option value="">공연장 유형 선택</option>
          <option value="small">소규모 공연장</option>
          <option value="medium">중형 공연장</option>
          <option value="large">대형 공연장</option>
          <option value="blackbox">블랙박스</option>
        </select>
      </div>
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchForm;
