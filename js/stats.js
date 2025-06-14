// Use Firestore modules from CDN
import {
    doc,
    setDoc,
    getDocs,
    collection,
    increment,
    serverTimestamp
  } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js';
  
  // Access Firestore instance from global window object
  const db = window.db; // <-- Now pulled from the initialized app
  const userId = 'test-user-1'; // You can make this dynamic later
  
  function getToday() {
    return new Date().toISOString().split('T')[0];
  }
  
  export async function logPomodoro(options = {}) {
    const date = getToday();
    const ref = doc(db, 'users', userId, 'stats', date);
  
    const updateData = {
      last: serverTimestamp(),
    };
  
    if (options.partial) {
      updateData.partial = increment(1);
    } else {
      updateData.sessions = increment(1);
    }
  
    await setDoc(ref, updateData, { merge: true });
    console.log(options.partial ? "Partial Pomodoro logged" : "Full Pomodoro logged");
  }
  
  export async function getUserStats() {
    const coll = collection(db, 'users', userId, 'stats');
    const snapshot = await getDocs(coll);
    const data = [];
    snapshot.forEach(doc => {
      const d = doc.data();
      data.push({
        date: doc.id,
        sessions: d.sessions || 0,
        partial: d.partial || 0
      });
    });
    return data;
  }
  
  export async function showStats() {
    const stats = await getUserStats();
    const ul = document.getElementById('stats-list');
    ul.innerHTML = '';
  
    stats.forEach(stat => {
      const li = document.createElement('li');
  
      const sessionText = stat.sessions > 0 ? `${stat.sessions} full` : '';
      const partialText = stat.partial > 0 ? `${stat.partial} partial` : '';
  
      const combined = [sessionText, partialText].filter(Boolean).join(', ');
      li.textContent = `${stat.date}: ${combined || 'No sessions'}`;
  
      ul.appendChild(li);
    });
  }
  