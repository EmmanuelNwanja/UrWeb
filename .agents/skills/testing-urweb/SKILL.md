# Testing UrWeb Full-Stack App

## Overview
UrWeb is a full-stack Web3 educational platform with:
- **Frontend**: Next.js (TypeScript, Tailwind CSS) on port 3000
- **Backend**: NestJS (TypeScript, MongoDB/Mongoose) on port 3001
- **Database**: MongoDB on port 27017

## Prerequisites
- MongoDB must be running locally before starting the backend
- Backend `.env` file must exist (copy from `.env.example`)
- Frontend `.env.local` file must exist (copy from `.env.example`)

## Setup Steps

### 1. Start MongoDB
```bash
sudo mongod --dbpath /var/lib/mongodb --fork --logpath /var/log/mongodb/mongod.log
```

### 2. Start Backend
```bash
cd backend
cp .env.example .env  # if not already done
npm run start:dev
```
Backend runs on http://localhost:3001. Verify with: `curl http://localhost:3001` (should return "Hello World!")

### 3. Start Frontend
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:3000.

## Testing the Backend API

### Auth Login (demo mode)
```bash
curl -X POST http://localhost:3001/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"idToken":"demo_token"}'
```
Returns `access_token` (JWT) and `user` object. The demo_token is a development-only shortcut.

### Other Endpoints
- `GET /pathways` - List all pathways
- `GET /resources?pathway=:id` - List resources for a pathway
- `GET /users/:id` - Get user by ID
- `GET /nfts/user/:userId` - Get user's Weber NFTs

## Testing Frontend Pages

All frontend pages currently use hardcoded demo data from `src/lib/constants.ts` and inline data in page components. They are NOT yet wired to the backend API.

### Page Navigation
| Page | URL | Key Elements |
|------|-----|--------------|
| Landing | `/` | Hero section, features grid, pathways preview, CTA |
| Login | `/auth/login` | Gmail login button, Web3Auth info |
| Register | `/auth/register` | Step-based form with display name |
| Dashboard | `/dashboard` | 4 stat cards, Weber NFT card, activity feed |
| Pathways | `/pathways` | Search, category filters, 8 pathway cards |
| Pathway Detail | `/pathways/:id` | Pathway header, resources list with votes |
| Profile | `/profile` | User info, NFT details, 5 stat bars, equipped runes |

### Navbar Behavior
- **Unauthenticated**: Shows "Pathways" link and "Get Started" button
- **Authenticated**: Shows "Pathways", "Dashboard", user name/"Profile", and "Logout"

## Build & Lint Commands
- Frontend: `npm run build` and `npm run lint` (in `frontend/`)
- Backend: `npm run build` (in `backend/`)

## Known Issues / Notes
- Frontend pages use demo data, not yet connected to backend API
- Auth service accepts `demo_token` for development; real Web3Auth verification is stubbed
- Most backend endpoints lack JWT auth guards (only `GET /auth/me` is protected)
- NFT repair/level-up endpoints don't enforce economic rules (no token deduction)
- React 19 strict lint rules required using `useSyncExternalStore` pattern in AuthContext instead of `useState` + `useEffect`
- The `@types/passport-jwt` package needed to be added manually (not in default NestJS scaffold)

## Devin Secrets Needed
No secrets are currently required for local testing. Future integration testing may need:
- `WEB3AUTH_CLIENT_ID` - For real Web3Auth Gmail login flow
- `MONGODB_URI` - If using a remote MongoDB instance
