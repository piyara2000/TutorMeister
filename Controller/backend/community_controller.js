exports.community = (req, res) => {
  if (!req.session.studentId && !req.session.instructorId) {
    return res.redirect("/login");
  } else {
    if (req.session.instructorId == undefined) {
      const username =
        "Student: " + req.session.stuFname + " " + req.session.stuLname;

      // Get the 'io' object from the app
      const io = req.app.get("io");

      // Emit a socket event to all clients
      io.emit("community-event", { message: "Welcome to the community!" });

      res.render("community", { message: "Student", username });
    } else {
      const username =
        "Instructor: " + req.session.instructorFname + " " + req.session.instructorLname;
      const io = req.app.get("io");

      io.emit("community-event", { message: "Welcome to the community!" });

      res.render("community", { message: "Instructor", username });
    }
  }
};
