# NASBU Chatbot Demo

A simple, professional webpage featuring a chatbot popup in the lower right corner for NASBU Legal.

## Features

- Clean, professional design matching NASBU's legal services brand
- Interactive chatbot popup with smooth animations
- Webhook integration for connecting your custom chatbot
- Fully responsive design
- Spanish language interface

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure your chatbot webhook:
   - Copy `.env.example` to `.env`
   - Add your webhook URL:
   ```
   VITE_CHATBOT_WEBHOOK_URL=https://your-webhook-url.com/chat
   ```

3. Run the development server:
```bash
npm run dev
```

## Webhook Integration

The chatbot sends POST requests to your configured webhook with the following format:

```json
{
  "message": "User's message text",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

Your webhook should respond with:

```json
{
  "response": "Bot's response text"
}
```

Or alternatively:

```json
{
  "message": "Bot's response text"
}
```

## Demo Mode

If no webhook URL is configured, the chatbot will run in demo mode with simulated responses.

## Build for Production

```bash
npm run build
```

The production files will be in the `dist/` directory.

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)
