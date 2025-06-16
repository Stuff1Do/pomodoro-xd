# pomodoro-xd
# 📚 studyxd — The Ultimate Productivity Dashboard

**studyxd** is a productivity web application designed to help students and remote workers maintain focus and manage their time efficiently. Combining a Pomodoro timer, ambient noise controls, custom music player, task management system, and statistics tracker, studyxd is your all-in-one digital study companion.
Dedicated to Sheena
---
## Installation

To run this locally:

1. Clone or download this repository.
2. Place all assets (`index.html`, `style.css`, `script.js`, sound files, image files) in the same root directory.
3. Open `index.html` in your browser.

---

## Features

### Pomodoro Timer
- Fully customizable **Pomodoro**, **Short Break**, and **Long Break** durations.
- Option to auto-start the next timer session.
- Start, pause, and reset functionality with a sleek and responsive UI.
- Settings panel with:
  - Background selection
  - Phone wallpaper support
  - Sound options (Bell, Lofi)
  - Dark-mode friendly design

### To-Do Taskbar
- Easily add, cross off, and delete tasks.
- Draggable and resizable taskbar with minimize/expand buttons.
- Automatically adjusts to the viewport and provides persistent visual feedback.
- Keyboard support for Enter key to quickly add tasks.

### Ambient Sound Environment
- Choose from 9 ambient noise options:
  - Rain 
  - Fireplace 
  - White Noise 
  - Waterfall 
  - Library 
  - Pink Noise 
  - Brown Noise 
  - Heavy Rain 
  - Air Conditioner 
- Each sound includes:
  - On/Off toggle
  - Volume slider
  - Visual opacity feedback for active sounds
-Each one can be stacked on each other for a caocophany of pleasant background noise

### Music Player
- Dual-mode music library:
  - **Built-in Playlist**: Preloaded tracks with cover art, authors, and duration.
  - **Imported Music**: Upload your own `.mp3` files (max 50MB) with drag-and-drop simplicity.
- Features:
  - Search functionality
  - Playlist type switcher
  - Play/pause UI with live duration
  - Responsive scrollable container

### Background Customization
- Set background images from a curated set:
  - Ghibli, Cats, Cabin, Totoro, Firewatch, Urban Japan, etc.
- Phone-specific background support for mobile optimization.

### Statistics & Heatmap
- Access a modal heatmap display of your Pomodoro sessions.
- Sessions are logged in Supabase and rendered for visual insight into productivity trends.

### Picture-in-Picture (PiP) Timer Mode
- Use the **PiP Mode** to pop out the timer as a separate always-on-top window.
- Fully styled to match main interface.
- Resizable and draggable.

---

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Icons & Fonts**: Font Awesome, Google Fonts (Roboto, Inter)
- **Upload database**: [Supabase](https://supabase.com) (for music upload)
- **Storage** Firebase(for session data and statistics)
- **Media Handling**: HTML5 Audio API, dynamic DOM manipulation

---


## Notes
- Mobile responsiveness is limited; optimal use is on desktop/laptop.
- Some features depend on external resources (e.g., Supabase and hosted sound/image files), so an internet connection is recommended.

---

## Credits

- Created by a productivity enthusiast.
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Powered by [Supabase](https://supabase.com) and Firebase
- Backgrounds from [AlphaCoders](https://mobile.alphacoders.com/)

