# Timer Challenge Game

A React-based timer challenge game where players race against the clock to stop timers as close to the target time as possible without letting them expire.

## Features

- Multiple timer challenges with different difficulty levels (1s, 5s, 10s)
- Score calculation based on remaining time
- Player name input
- Start/Stop timer functionality
- Modal dialog for results display
- Reset functionality

## How to Play

1. Enter your player name
2. Click "Start Challenge" for any timer
3. Try to stop the timer as close to 0 as possible
4. Your score is calculated based on how much time remains
5. If the timer expires (reaches 0), you lose!

## Technologies Used

- React (useState, useRef)
- Portals (for modal rendering)
- JavaScript intervals (setInterval/clearInterval)

## State Management Concepts

- **useState** for player name and time tracking
- **useRef** for timer IDs and modal reference
- **Immutability** - proper state updates without mutations
- **Derived state** for active timer detection

## What I Learned

- Managing intervals with refs
- Using portals for modal dialogs
- Proper interval cleanup
- Score calculation logic
- State management patterns in React

---

Built as part of React learning journey - practicing state management and refs.
