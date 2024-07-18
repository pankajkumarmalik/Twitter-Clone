# Social Media Platform

Designed and developed a cutting-edge social media platform, inspired by the renowned X (formerly Twitter), delivering a seamless and intuitive user experience.

## Features

* 🔒 Secure Authentication: Signup, Login, and Logout functionality using JWT (JSON Web Tokens) for secure user authentication.
* 🐦 Tweeting: Share your thoughts with the world!
* ❤ Engage: Like and comment on tweets, and spark meaningful conversations.
* 🎨 Personalization: Customize your profile with a profile picture, cover picture, and bio.
* 👥 Follow/Unfollow: Follow and unfollow users, and discover new accounts to connect with.
* 🤔 Suggested Users: Get recommendations for new accounts to follow.
* 📱 Feed: View two tabs - "For You" (all tweets) and "Following" (tweets of followed users).
* 🔔 Notifications: Receive alerts for likes and new followers.
* 📷 Image Upload: Upload images with Cloudinary integration.
* 📊 Profile Tweets: View your own tweets and liked tweets in two separate tabs in your profile.
* 🚮 Tweet Deletion: Delete your own tweets, and have control over your content.
* 📝 Edit Profile: Update your username, password, bio, profile pictures and cover picture.

## Technologies

* Frontend: React, JavaScript, Tailwind CSS
* Backend: Node.js, Express.js, MongoDB
* Database: MongoDB
* Authentication: JWT (JSON Web Tokens)
* React Query for Data Fetching, Caching etc.
* Image Upload: Cloudinary

## Setup and Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory with the following variables:
	* `MONGO_URI=<your_mongo_db_uri>`
	* `JWT_SECRET=<your_jwt_secret_key>`
	* `CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>`
	* `CLOUDINARY_API_KEY=<your_cloudinary_api_key>`
	* `CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>`
4. Start the app by running `npm run dev`

