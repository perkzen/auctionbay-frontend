# AuctionBay Frontend

AuctionBay is a full-stack auction web application that enables users to create and manage events for auctions.
Registered users can create auction events, participate in bidding, and manage their auction events. The highest bid at
the end of the auction period wins the item.

## Features

- **User Authentication**: JWT token-based authentication for secure user sessions.
- **Auction Creation and Management**: Users can create auctions by providing images, titles, descriptions, starting
  prices, and durations.
- **Bidding System**: Bidders can place bids, view the status of their bids, and the system automatically increments
  bids up to a maximum specified amount.
- **Bid History**: Users can view the history of bids for their auction events.
- **Responsive Design**: Pixel-perfect design based on Figma, ensuring a seamless user experience across devices.
- **Security**: Implementation of security best practices according to OWASP guidelines.

## Pre-requirements

- node 20+

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file in the root directory with the following content:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXTAUTH_SECRET=secret
NEXTAUTH_URL=http://localhost:3000/api/auth
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
