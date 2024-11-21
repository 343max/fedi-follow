#!/bin/bash

# Array of colorful emojis
emojis=(🌈 🌸 🌺 🌹 🌻 🌞 🌟 ⭐ 🌴 🍀 🍎 🍊 🍋 🍉 🍇 🍓 🦋 🐠 🌍 🎨 🎯 🎪 💫 ✨ 🌙)

# Endless loop
while true; do
    # Get random emoji from array
    random_emoji=${emojis[$RANDOM % ${#emojis[@]}]}
    
    echo "export const Emoji = () => (<h1>$random_emoji</h1>)" > src/emoji.tsx
    
    # Wait for 1 second
    sleep 1
done

