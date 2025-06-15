// Use Firestore modules from CDN
import {
    doc,
    setDoc,
    getDocs,
    collection,
    increment,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js';

// Firestore setup
const db = window.db;
const userId = 'test-user-1';
function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export async function logPomodoro(options = {}) {
    const date = getToday();
    const ref = doc(db, 'users', userId, 'stats', date);
    const updateData = { last: serverTimestamp() };
    if (options.partial) updateData.partial = increment(1);
    else updateData.sessions = increment(1);
    await setDoc(ref, updateData, { merge: true });
    console.log(options.partial ? "Partial Pomodoro logged" : "Full Pomodoro logged");
}

export async function getUserStats() {
    const snapshot = await getDocs(collection(db, 'users', userId, 'stats'));
    return snapshot.docs.map(doc => ({
        date: doc.id,
        sessions: doc.data().sessions || 0,
        partial: doc.data().partial || 0
    }));
}
export async function showStats() {
    const stats = await getUserStats();
    const container = document.querySelector('.heatmap');
    container.innerHTML = '';

    const startDate = new Date('2025-01-01');
    const endDate = new Date('2025-12-31');

    const days = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        days.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Organize by week columns
    const weekColumns = [];
    let currentWeek = [];

    // Fill initial empty days to start on Sunday
    for (let i = 0; i < days[0].getDay(); i++) {
        currentWeek.push(null); // Empty box
    }

    days.forEach(day => {
        currentWeek.push(day);
        if (currentWeek.length === 7) {
            weekColumns.push(currentWeek);
            currentWeek = [];
        }
    });

    // Push last week if not full
    if (currentWeek.length > 0) {
        while (currentWeek.length < 7) {
            currentWeek.push(null);
        }
        weekColumns.push(currentWeek);
    }

    // Convert stats array to a map for quick lookup
    const statMap = Object.fromEntries(
        stats.map(s => [s.date, s.sessions + s.partial])
    );

    // Build the heatmap grid
    const grid = document.createElement('div');
    grid.classList.add('heatmap-grid');

    // Track the starting index of each month
    const monthStartIndexes = {};

    weekColumns.forEach((week, index) => {
        const weekCol = document.createElement('div');
        weekCol.classList.add('week-column');

        week.forEach(day => {
            const box = document.createElement('div');
            box.classList.add('day-box');

            if (day) {
                const dateStr = day.toISOString().split('T')[0];
                const count = statMap[dateStr] || 0;
                box.dataset.date = dateStr;
                box.title = `${dateStr}: ${count} sessions`;

                // Set intensity color
                if (count === 0) {
                    box.style.backgroundColor = '#ebedf0';
                } else if (count < 2) {
                    box.style.backgroundColor = '#c6e48b';
                } else if (count < 4) {
                    box.style.backgroundColor = '#7bc96f';
                } else if (count < 6) {
                    box.style.backgroundColor = '#239a3b';
                } else {
                    box.style.backgroundColor = '#196127';
                }

                // Record month start
                if (day.getDate() === 1 && !(day.getMonth() in monthStartIndexes)) {
                    monthStartIndexes[day.getMonth()] = index;
                }
            } else {
                box.style.backgroundColor = 'transparent';
            }

            weekCol.appendChild(box);
        });

        grid.appendChild(weekCol);
    });

    container.appendChild(grid);

    // Create month labels row
    const monthRow = document.createElement('div');
    monthRow.classList.add('month-row');

    // Prepare month labels aligned with week columns
    weekColumns.forEach((_, index) => {
        const label = document.createElement('div');
        label.classList.add('month-label');

        // Check if this week starts a month
        const monthIndex = Object.values(monthStartIndexes).indexOf(index);
        if (monthIndex !== -1) {
            const monthName = new Date(2025, parseInt(Object.keys(monthStartIndexes)[monthIndex])).toLocaleString('default', { month: 'short' });
            label.textContent = monthName;
        } else {
            label.textContent = '';
        }

        monthRow.appendChild(label);
    });

    container.appendChild(monthRow);
}
