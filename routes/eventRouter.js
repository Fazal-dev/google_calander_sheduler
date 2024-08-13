import express from "express";
import { google } from "googleapis";
import { oauth2Client } from "../auth.js";
import { v4 as uuidv4 } from "uuid";

const eventRouter = express.Router();

const calender = google.calendar({
  version: "v3",
  auth: oauth2Client,
});

const event = {
  summary: "Tech Talk with fazal",
  location: "Google Meet",

  description: "Demo event for testing.",
  start: {
    dateTime: "2024-03-14T19:30:00+05:30",
    timeZone: "Asia/Kolkata",
  },
  end: {
    dateTime: "2024-03-14T20:30:00+05:30",
    timeZone: "Asia/Kolkata",
  },
  colorId: 1,
  conferenceData: {
    createRequest: {
      requestId: uuidv4(),
    },
  },

  attendees: [{ email: "mhdm8675@gmail.com" }],
};

eventRouter.get("/create-event", async (req, res) => {
  try {
    const result = await calender.events.insert({
      calendarId: "primary",
      auth: oauth2Client,
      conferenceDataVersion: 1,
      sendUpdates: "all",
      resource: event,
    });

    // Check if the event was created successfully
    if (!result.status === 200) {
      console.log("Event creation failed", result);
      res.status(500).send({
        status: result.status,
        message: "Event creation failed",
      });
    }

    res.send({
      status: 200,
      message: "Event created",
      link: result.data.hangoutLink,
    });
  } catch (error) {
    console.log("Error creating event:", error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while creating the event",
      error: error.message,
    });
  }
});

export default eventRouter;
