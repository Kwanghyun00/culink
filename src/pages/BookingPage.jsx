import { useState } from 'react';
import { useParams } from 'react-router-dom';

function BookingPage() {
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    startTime: '',
    endTime: '',
  });
  const { id } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 예약 정보를 서버로 전송하는 로직을 구현해야 합니다.
    console.log('Booking submitted:', { venueId: id, ...bookingDetails });
  };

  return (
    <div className="booking-page">
      <h1>공연장 예약</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={bookingDetails.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="startTime"
          value={bookingDetails.startTime}
          onChange={handleInputChange}
          required
        />
        <input
          type="time"
          name="endTime"
          value={bookingDetails.endTime}
          onChange={handleInputChange}
          required
        />
        <button type="submit">예약하기</button>
      </form>
    </div>
  );
}

export default BookingPage;