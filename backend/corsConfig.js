const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://shreya-mishra325-election-poll.vercel.app',
    'https://shreya-mishra325-election-poll-bc4g6jz32.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports = corsOptions;
