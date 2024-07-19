import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function VenueDetails() {
  const [venue, setVenue] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // 여기서 실제로는 API를 호출하여 공연장 상세 정보를 가져와야 합니다.
    const mockVenue = {
      id: 1,
      name: "서울 아트센터",
      location: "서울시 강남구",
      capacity: 500,
      price: 100000,
      image: "url-to-image",
      description: "최신 시설을 갖춘 현대적인 공연장입니다.",
    };
    setVenue(mockVenue);
  }, [id]);

  if (!venue) return <div>로딩 중...</div>;

  return (
    <div className="venue-details">
      <h1>{venue.name}</h1>
      <img src={venue.image} alt={venue.name} />
      <p>위치: {venue.location}</p>
      <p>수용 인원: {venue.capacity}명</p>
      <p>시간당 가격: {venue.price}원</p>
      <p>{venue.description}</p>
      <Link to={`/booking/${venue.id}`}>예약하기</Link>
    </div>
  );
}

export default VenueDetails;