const allowedOriginsDev = [
    'https://localhost:3000',
    'http://localhost:5173'
];

const allowedOriginsProd = [
    "https://election-poll-eight.vercel.app"
];

const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = process.env.NODE_ENV === 'production' ? allowedOriginsProd : allowedOriginsDev;

        if(!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS not allowed for this origin ' + origin));
        }
    },

    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

module.exports = corsOptions;