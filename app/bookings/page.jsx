import Heading from "@/components/Heading";
import getMyBookings from "../actions/getMyBookings";
import BookRoomCard from "@/components/BookRoomCard";

const BookingPage = async () => {
  const bookings = await getMyBookings();

  return (
    <>
      <Heading title="My Bookings" />
      {bookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings</p>
      ) : (
        bookings.map((booking) => (
          <BookRoomCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingPage;