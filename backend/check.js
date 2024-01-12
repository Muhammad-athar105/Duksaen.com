// Approve Reservation
exports.approveReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    // Update booking_status to "Approved"
    reservation.booking_status = "Approved";
    await reservation.save();

    // Update room availability
    const room = await Room.findById(reservation.roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    room.roomAvailability = false; // Set room availability to false
    await room.save();

    await sendConfirmationEmail(reservation);

    res.json({ message: "Reservation approved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error approving reservation" });
  }
};
