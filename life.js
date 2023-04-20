function getMotivation() {
    const motivations = [
        "Believe you can and you're halfway there. -Theodore Roosevelt",
        "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
        "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
        "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. -Norman Vincent Peale",
        "If you can dream it, you can achieve it. -Zig Ziglar"
    ];

    const randomIndex = Math.floor(Math.random() * motivations.length);
    return motivations[randomIndex];
}

console.log(getMotivation());
