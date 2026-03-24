// Caption dataset
const captions = {
    motivational: [
        "When you realize your potential is limitless 💪 #motivation #success",
        "Every expert was once a beginner. Keep going! 🌟 #growth #nevergiveup",
        "Your only limit is the one you set for yourself 🔥 #believe #achieve",
        "Success is not final, failure is not fatal. Keep pushing! 💯 #motivation",
        "Dream big, work hard, stay focused ✨ #goals #hustle",
        "The only way to fail is to stop trying 🚀 #neverstop #winner",
        "Your future self will thank you for not giving up today 🙏 #discipline",
        "Great things never come from comfort zones 🌟 #growthmindset",
        "Be the energy you want to attract ⚡ #positivevibes #manifest",
        "Turn your wounds into wisdom and your obstacles into opportunities 💪 #resilience"
    ],
    funny: [
        "Me trying to adult: 👀 #adulting #fail #relatable",
        "When the pizza arrives and you forget you were on a diet 🍕 #foodie #yolo",
        "That moment when you realize adulting is just googling how to do stuff 🤦‍♂️ #adultlife",
        "Me: I'm going to be productive today Also me: *watches 47 cat videos* 🐱 #procrastination",
        "When you try to be sexy but end up looking like a malfunctioning robot 💃 #dancefail",
        "My therapist: You need to learn to let go Me: *clings to pizza* 🍕 #priorities",
        "When you accidentally send a nude to your boss instead of your crush 😳 #worstdayever",
        "Me trying to cook: This recipe calls for 3 cups of flour Me: *pours entire bag* 👨‍🍳 #chefmode",
        "When you realize the spider in your room is bigger than your future plans 🕷️ #priorities",
        "That awkward moment when you wave at someone who wasn't waving at you ✋ #socialfail"
    ],
    romantic: [
        "You make my heart skip a beat every single day 💕 #love #soulmate",
        "In your arms is where I belong forever 🌹 #romance #true love",
        "Every moment with you is a treasure I hold dear 💑 #lovebirds",
        "You are my everything, my always, my forever ❤️ #soulmates",
        "With you, every day feels like Valentine's Day 💕 #love #blessed",
        "You complete me in ways I never knew were possible 💫 #perfectmatch",
        "My love for you grows stronger with each passing day 🌹 #eternallove",
        "You are the light of my life, my reason to smile ☀️ #love #grateful",
        "Forever isn't long enough when I'm with you 💑 #timelesslove",
        "You make ordinary moments extraordinary ✨ #love #magical"
    ],
    business: [
        "Building empires one strategic decision at a time 🏗️ #entrepreneur #business",
        "Success is 1% inspiration, 99% perspiration 💼 #hustle #grind",
        "Invest in yourself today, reap the rewards tomorrow 📈 #investinyourself",
        "Your network is your net worth 🤝 #networking #connections",
        "Turn your passion into profit 💰 #entrepreneurship #success",
        "The best investment you can make is in yourself 📚 #selfimprovement",
        "Build your empire, one brick at a time 🧱 #buildingwealth #legacy",
        "Success favors the bold and the prepared 🎯 #businessmindset",
        "Your income can only grow as fast as you do 📊 #personalgrowth",
        "Create value, capture value, scale value 🚀 #businessstrategy"
    ],
    storytelling: [
        "The day that changed everything forever... 📖 #storytime #lifechanging",
        "Let me tell you about the time I learned the hardest lesson... 💭 #storytelling",
        "This is the story of how I turned my biggest failure into my greatest success 🌟 #comeback",
        "The unexpected twist that made me who I am today 🎭 #lifejourney",
        "When life threw me a curveball, this is what happened... ⚾ #resilience",
        "The moment I realized everything happens for a reason ✨ #divineguidance",
        "My journey from rock bottom to reaching new heights 🏔️ #transformation",
        "The conversation that completely shifted my perspective 💬 #mindshift",
        "When I stopped playing small and started dreaming big 🌙 #limitless",
        "The day I chose courage over comfort and never looked back 🦁 #bravery"
    ],
    pov: [
        "POV: You're the main character of your own success story 📖 #pov #maincharacter",
        "POV: You finally understand your worth and walk away ✨ #selfrespect #pov",
        "POV: You're living your dream life and loving every moment 🌟 #blessed #pov",
        "POV: You invested in yourself and now you're unstoppable 🚀 #growth #pov",
        "POV: You chose yourself and now everything aligns perfectly 💫 #selflove #pov",
        "POV: You're the CEO of your life making boss moves 💼 #leadership #pov",
        "POV: You turned your pain into power and your dreams into reality 💪 #transformation",
        "POV: You're exactly where you're meant to be, doing what you love ❤️ #purpose #pov",
        "POV: You stopped waiting for permission and started creating your destiny 🎨 #creator",
        "POV: You're the architect of your future building something amazing 🏗️ #visionary"
    ],
    lifestyle: [
        "Morning routine that sets the tone for an amazing day ☀️ #morningroutine #lifestyle",
        "Finding beauty in the simple moments of everyday life ✨ #mindfulness #grateful",
        "Creating a life you don't need a vacation from 🌴 #lifestyle #balance",
        "Small daily habits that lead to extraordinary results 📈 #discipline #growth",
        "Choosing experiences over things, memories over possessions 🎒 #minimalism",
        "Building a life around what truly matters to you 💝 #purpose #lifestyle",
        "The art of balancing hustle with self-care 🧘‍♀️ #wellness #balance",
        "Creating your own definition of success 🌟 #personalsuccess #lifestyle",
        "Living intentionally, loving deeply, laughing often 😊 #life #joy",
        "Building habits that serve your highest self 💫 #selfimprovement #lifestyle"
    ]
};

// DOM elements
const moodSelect = document.getElementById('mood-select');
const categorySelect = document.getElementById('category-select');
const generateBtn = document.getElementById('generate-btn');
const captionOutput = document.getElementById('caption-output');
const captionText = document.getElementById('caption-text');
const copyBtn = document.getElementById('copy-btn');
const generateAnotherBtn = document.getElementById('generate-another-btn');
const categoryCards = document.querySelectorAll('.category-card');
const emailInput = document.getElementById('email-input');
const waitlistBtn = document.getElementById('waitlist-btn');
const waitlistMessage = document.getElementById('waitlist-message');

// Generate caption function
function generateCaption() {
    const mood = moodSelect.value;
    const category = categorySelect.value;

    if (!mood || !category) {
        alert('Please select both a mood and category');
        return;
    }

    // Get captions for the selected mood
    const moodCaptions = captions[mood];
    if (!moodCaptions) {
        alert('No captions available for this mood');
        return;
    }

    // Select random caption
    const randomIndex = Math.floor(Math.random() * moodCaptions.length);
    const selectedCaption = moodCaptions[randomIndex];

    // Display caption
    captionText.textContent = selectedCaption;
    captionOutput.classList.remove('hidden');

    // Scroll to caption output
    captionOutput.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Copy caption to clipboard
async function copyCaption() {
    try {
        await navigator.clipboard.writeText(captionText.textContent);
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('bg-green-600', 'hover:bg-green-700');
        copyBtn.classList.remove('bg-slate-600', 'hover:bg-slate-500');

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
            copyBtn.classList.add('bg-slate-600', 'hover:bg-slate-500');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy caption. Please copy manually.');
    }
}

// Handle category card clicks
function handleCategoryClick(event) {
    const category = event.currentTarget.dataset.category;
    moodSelect.value = category;

    // Scroll to generator
    document.getElementById('generator').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Handle email waitlist
function handleWaitlist() {
    const email = emailInput.value.trim();

    if (!email) {
        alert('Please enter your email address');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Simulate success (in real app, this would send to backend)
    emailInput.value = '';
    waitlistMessage.classList.remove('hidden');

    setTimeout(() => {
        waitlistMessage.classList.add('hidden');
    }, 5000);
}

// Event listeners
generateBtn.addEventListener('click', generateCaption);
copyBtn.addEventListener('click', copyCaption);
generateAnotherBtn.addEventListener('click', generateCaption);
waitlistBtn.addEventListener('click', handleWaitlist);

// Category card event listeners
categoryCards.forEach(card => {
    card.addEventListener('click', handleCategoryClick);
});

// Enable/disable generate button based on selections
function updateGenerateButton() {
    const moodSelected = moodSelect.value !== '';
    const categorySelected = categorySelect.value !== '';
    generateBtn.disabled = !(moodSelected && categorySelected);
}

moodSelect.addEventListener('change', updateGenerateButton);
categorySelect.addEventListener('change', updateGenerateButton);

// Initialize
updateGenerateButton();