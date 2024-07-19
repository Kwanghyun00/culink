import { Link } from 'react-router-dom';

function VenueCard({ venue }) {
  return (
    <div className="venue-card">
      <img src={venue.image} alt={venue.name} />
      <h3>{venue.name}</h3>
      <p>위치: {venue.location}</p>
      <p>수용 인원: {venue.capacity}명</p>
      <p>시간당 가격: {venue.price}원</p>
      <Link to={`/venue/${venue.id}`}>상세 정보</Link>
    </div>
  );
}

export default VenueCard;