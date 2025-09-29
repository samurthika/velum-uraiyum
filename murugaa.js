const askBtn = document.getElementById('askBtn');
const quoteArea = document.getElementById('quoteArea');
const lampBtn = document.getElementById('lampBtn');
const lampFlame = document.getElementById('lampFlame');
const feelingBox = document.getElementById('feelingBox');

function murugaaReply(feeling) {
    const msg = feeling.toLowerCase();
    if (!feeling || feeling.trim().length < 3) {
        return {
            ta: "ஒரு உணர்வை பகிருங்கள். முருகா கேட்கிறார்!",
            en: "Share something from your heart. Murugaa is listening."
        };
    }
    if (msg.includes('துயரம்') || msg.includes('sad') || msg.includes('சோக')) {
        return {
            ta: "உங்கள் துயரத்தை முருகா கேட்டுக்கொண்டு இருக்கிறார். மனம் உத்தரவாதம், அறுபடை வன்னம் உங்கள் உள்ளத்தில்!",
            en: "Murugaa hears your sorrow and fills your heart with hope and his sacred strength."
        };
    }
    if (msg.includes('பயம்') || msg.includes('fear')) {
        return {
            ta: "பயப்பட வேண்டாம், முருகா பக்கத்தில்தான் இருக்கிறார். துணிச்சல் தருவேன்!",
            en: "Don't be afraid, Murugaa is by your side. I'll give you courage."
        };
    }
    if (msg.includes('நன்றி') || msg.includes('thank')) {
        return {
            ta: "உங்கள் நன்றி மனதில் உரைத்தது. ஆசீர்வதிக்கிறேன்!",
            en: "Your gratitude touches my heart. Blessings to you!"
        };
    }
    if (msg.includes('மகிழ்ச்சி') || msg.includes('happy')) {
        return {
            ta: "உங்கள் மகிழ்ச்சியில் நானும் மகிழுகிறேன்! வாழ்த்துகள்!",
            en: "I'm happy with your happiness! Joy and blessings!"
        };
    }
    // Default emotional reply
    return {
        ta: `உங்கள் உணர்வு முருகா மனதில்! மனம் தெளிவாகும், விசுவாசியுங்கள்.`,
        en: "Murugaa has heard your feeling. Peace and clarity will come, trust in me."
    };
}

askBtn.onclick = () => {
    const userFeeling = feelingBox.value;
    const reply = murugaaReply(userFeeling);
    quoteArea.innerHTML = `<span>${reply.ta}</span><br><em>${reply.en}</em>`;
};

// Lamp button animation unchanged
lampBtn.onclick = () => {
    lampFlame.classList.add('active');
    setTimeout(() => lampFlame.classList.remove('active'), 3200);
};
const healingTips = [
  "🧘‍♀️ Breathe deeply for 1 minute",
  "💧 Drink some water slowly",
  "🚶‍♂️ Take a short walk outside",
  "🪔 Light a lamp and sit quietly",
  "🎧 Listen to calming music or bhajan",
  "🙏 Close your eyes and say 'Vel Vel Muruga'"
];
const randomTip = healingTips[Math.floor(Math.random() * healingTips.length)];
document.getElementById("wellnessTip").innerText = randomTip;
askBtn.onclick = () => {
  const userFeeling = feelingBox.value;
  const reply = murugaaReply(userFeeling);
  quoteArea.innerHTML = `<span>${reply.ta}</span><br><em>${reply.en}</em>`;

  const randomTip = healingTips[Math.floor(Math.random() * healingTips.length)];
  document.getElementById("wellnessTip").innerText = randomTip;
};
