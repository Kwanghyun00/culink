import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const categories = [
    { id: 1, name: '소규모 공연장', icon: 'fas fa-music' },
    { id: 2, name: '중형 공연장', icon: 'fas fa-theater-masks' },
    { id: 3, name: '대형 공연장', icon: 'fas fa-building' },
    { id: 4, name: '블랙박스', icon: 'fas fa-box' },
  ];

  const newVenues = [
    { id: 1, name: '새로운 공연장 1', location: '서울', image: 'https://via.placeholder.com/150' },
    { id: 2, name: '새로운 공연장 2', location: '부산', image: 'https://via.placeholder.com/150' },
    { id: 3, name: '새로운 공연장 3', location: '대구', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>모든 공연을 위한 최적의 공간</h1>
          <p>원하는 공연장을 쉽고 빠르게 찾아보세요</p>
          <Link to="/search" className="cta-button">공연장 찾기</Link>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>왜 저희 서비스를 이용해야 할까요?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <i className="fas fa-search"></i>
              <h3>다양한 공연장</h3>
              <p>소규모부터 대형 공연장까지 모든 유형의 공간을 찾아보세요.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-calendar-alt"></i>
              <h3>간편한 예약</h3>
              <p>원하는 날짜와 시간에 맞춰 쉽게 예약할 수 있습니다.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-star"></i>
              <h3>검증된 공간</h3>
              <p>모든 공연장은 철저한 검증 과정을 거쳤습니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <h2>공연장 카테고리</h2>
          <div className="category-grid">
            {categories.map(category => (
              <Link to={`/category/${category.id}`} key={category.id} className="category-item">
                <i className={category.icon}></i>
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="new-venues">
        <div className="container">
          <h2>새로 등록된 공연장</h2>
          <div className="venue-grid">
            {newVenues.map(venue => (
              <Link to={`/venue/${venue.id}`} key={venue.id} className="venue-item">
                <img src={venue.image} alt={venue.name} />
                <h3>{venue.name}</h3>
                <p>{venue.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="about-service">
        <div className="container">
          <h2>서비스 소개</h2>
          <p>저희 공연장 대관 서비스는 사용자들이 원하는 공연장을 쉽게 찾고 예약할 수 있도록 도와드립니다. 다양한 공연장 옵션과 검증된 공간을 제공하여 모든 유형의 공연에 적합한 장소를 찾을 수 있습니다. 빠르고 간편한 검색 기능을 통해 원하는 날짜와 시간에 맞춰 공연장을 예약해보세요.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>© 2024 Artause. All rights reserved.</p>
          <p>상호명: 공연장 대관 서비스 | 위치: 서울특별시 강남구 | 사업자 등록 번호: 123-45-67890</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
