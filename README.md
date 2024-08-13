# Google Calendar Event Scheduler

This project is a Node.js application that integrates with the Google Calendar API to create events and send Google Meet invitations to participants. It allows users to authenticate via OAuth2, generate Google Meet links, and schedule events on their Google Calendar with email notifications sent to attendees.

## Features

1. Authenticate with Google using OAuth2.
2. Create and schedule events on Google Calendar.
3. Automatically generate Google Meet links for events.
4. Send email notifications to event attendees.

## Tech Stack

- express: Web framework for Node.js.
- dotenv: Loads environment variables from a .env file.
- googleapis: Google API client for Node.js.

## Installation

1. **Clone the Repository:**

```bash
git clone https://github.com/Fazal-dev/google_calander_sheduler.git
cd google_calander_sheduler
```

2. **Install Dependencies:**
   Use npm to install the required packages:

```bash
npm install
```

3. **Set Up Google API Credentials:**

- Go to the Google Cloud Console.
- Create a new project (if you don't have one).
- Enable the Google Calendar API for your project.

### Configuration

Create a .env file in the root of your project and add the following configuration details:

```env

PORT=5000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/redirect
```

- Replace your-google-client-id, your-google-client-secret, and your-google-redirect-uri with the appropriate values from your Google Cloud project.

## Usage

1. **Run the Server:**

Start the Node.js server:

```bash

npm start
```

2. **Authenticate with Google:**

- Visit http://localhost:5000/auth in your browser to authenticate.
- Grant the necessary permissions and you'll be redirected back to the application.

3. **Create an Event:**
   Once authenticated, visit http://localhost:5000/create-event to create an event with a Google Meet link and send notifications to attendees.

## Contact

For questions or further information, please contact:

- **Fasal Mohamed** - mfazal404@gmail.com
