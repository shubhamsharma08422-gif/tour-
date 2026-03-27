# Tour Booking System with FastAPI and Railway MySQL

A full-stack tour booking application with FastAPI backend and HTML/CSS/JS frontend, designed to deploy on Railway with Railway MySQL.

## Quick Start

### Local Development (with local MySQL or Railway MySQL)

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure database (choose one):**
   - **Local MySQL**: Update `.env` with localhost credentials
   - **Railway MySQL**: Copy credentials from [Railway dashboard](https://railway.app)
   
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

3. **Run the server:**
   ```bash
   uvicorn main:app --reload
   ```
   
   API available at: http://localhost:8000
   Docs: http://localhost:8000/docs

4. **Open frontend:**
   Open `index.html` in your browser

## Deployment to Railway

**See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step Railway + GitHub setup.**

Quick summary:
1. Push code to GitHub
2. Connect GitHub repo to Railway
3. Add Railway MySQL service
4. Set environment variables in Railway dashboard
5. Update frontend `API_URL` to your Railway backend URL

## Project Structure

```
├── main.py              # FastAPI backend
├── script.js            # Frontend logic
├── index.html           # Home page
├── signup.html          # Sign up page
├── login.html           # Login page
├── destination.html     # Destinations page
├── booking.html         # Booking page
├── styles.css           # Styling
├── requirements.txt     # Python dependencies
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore file
├── DEPLOYMENT.md        # Deployment guide
└── image/               # Images folder
```

## API Endpoints

| Endpoint | Method | Body | Description |
|----------|--------|------|-------------|
| `/signup` | POST | `{name, email, phone, password}` | User registration |
| `/login` | POST | `{email/phone, password}` | User login |
| `/book` | POST | `{destination, date, guests}` | Create booking |
| `/save-destination` | POST | `{name, description, image_url}` | Save destination |
| `/destinations` | GET | - | Get all destinations |

## Database Tables (Auto-Created)

- **users**: id, name, email, phone, password
- **bookings**: id, destination, date, guests, created_at
- **destinations**: id, name, description, image_url, created_at

## Environment Variables

```
DB_HOST=localhost          # Railway host for production
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password  # Set in Railway dashboard
DB_DATABASE=tour_db        # railway on Railway
```

## Features

✅ User registration and login (MySQL storage)
✅ Tour booking system
✅ Destination management
✅ Local fallback storage (localStorage)
✅ FastAPI auto-generated API docs
✅ CORS enabled for frontend
✅ Environment variable configuration

## Tech Stack

- **Backend**: FastAPI, Python
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Hosting**: Railway
- **Version Control**: Git + GitHub

## Troubleshooting

**Cannot connect to database?**
- Verify all credentials in `.env`
- For Railway: check your MySQL instance is running in Railway dashboard
- For local: ensure MySQL server is running

**API endpoints return 500 error?**
- Check backend logs in Railway dashboard
- Verify database credentials and connection

**Frontend can't reach backend?**
- Update `API_URL` in `script.js` to your Railway backend URL
- Check CORS settings in `main.py`

## Support

For Railway deployment issues: [Railway Docs](https://docs.railway.app)
For FastAPI help: [FastAPI Docs](https://fastapi.tiangolo.com)

## License

MIT
