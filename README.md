# 🚀 MediaFlow
<div align="center">

### 🌐 Live Demo

👉 **[Try MediaFlow Here](https://media-flow-jet.vercel.app/)**

<br>

</div>

> A modern glassmorphism-powered media search engine for discovering Photos, Videos, and GIFs from multiple sources in one beautiful interface.

---

## 📸 Preview

### 🌙 Dark Mode

<p align="center">
  <img src="./Screenshots/dark-mode.png" alt="MediaFlow Dark Mode" width="90%">
</p>

---

### ☀️ Light Mode

<p align="center">
  <img src="./Screenshots/light-mode.png" alt="MediaFlow Light Mode" width="90%">
</p>

---

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38BDF8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow?logo=vite)

---

## ✨ Features

### 🔍 Unified Media Search
Search multiple content sources simultaneously:

- 📸 Photos from Unsplash
- 🎥 Videos from Pexels
- 🎭 GIFs from Giphy

All media is fetched in parallel for a lightning-fast search experience.

---

### 🎨 Modern Glassmorphism UI

- Floating search bar
- Frosted glass cards
- Smooth animations
- Responsive layout
- Premium user experience

---

### 🌙 Dark & Light Mode

Switch themes instantly with a beautiful animated toggle.

- Dark Mode
- Light Mode
- Smooth transitions

---

### 📑 Save Your Favorites

Create your own personal collection:

- Save photos
- Save videos
- Save GIFs
- Unsave anytime

---

### 🗂 Smart Category Filtering

Instantly switch between:

- Photos
- Videos
- GIFs

No extra API requests required.

---

### ⚡ Performance Optimized

- Parallel API fetching
- Redux state management
- Skeleton loading screens
- Responsive card grid
- Route-based navigation

---

## 📸 Preview

### Home Page

- Floating search interface
- Media discovery
- Tab filtering

### Saved Collection

- Personal media library
- Quick access to favorites

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend UI |
| Redux Toolkit | State Management |
| React Router DOM | Routing |
| Tailwind CSS | Styling |
| Axios | API Requests |
| Unsplash API | Photo Search |
| Pexels API | Video Search |
| Giphy API | GIF Search |
| Lucide React | Icons |
| Vite | Build Tool |

---

## 📂 Project Structure

```bash
src
│
├── api
│   └── media.js
│
├── components
│   ├── Card.jsx
│   ├── Grid.jsx
│   ├── Search_navbar.jsx
│   ├── Tab.jsx
│   └── Loading.jsx
│
├── pages
│   ├── Home.jsx
│   └── Saved.jsx
│
├── redux
│   ├── searchSlice.js
│   ├── themeSlice.js
│   └── collectionSlice.js
│
├── App.jsx
└── main.jsx
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/mediaflow.git
cd mediaflow
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🧠 How It Works

1. User enters a search query.
2. Redux updates the global search state.
3. Three APIs are called simultaneously.
4. Results are normalized into a common format.
5. Users browse media using tabs.
6. Favorites can be saved to Collections.

---

## 🎯 Roadmap

- [ ] Infinite Scrolling
- [ ] Masonry Layout
- [ ] Search History
- [ ] Download Media
- [ ] Local Storage Persistence
- [ ] AI Search Suggestions
- [ ] User Authentication
- [ ] Collection Folders

---

## 🤝 Contributing

Contributions are welcome!

```bash
Fork 🍴
Clone 📥
Code 💻
Commit ✅
Push 🚀
Create Pull Request 🎉
```

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a star ⭐ on GitHub.

---

## 📜 License

Licensed under the MIT License.

---

### Built with ❤️ using React, Redux, Tailwind CSS, and caffeine ☕