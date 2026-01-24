// The 'Knowledge Base' - Categories with keywords and suggestions

const suggestionRules = {
    shopping: {
        keywords: ['buy', 'purchase', 'shop', 'get', 'order', 'groceries', 'store', 'amazon', 'online'],
        suggestions: [
            'Check online prices first to save money',
            'Look for coupon codes before purchasing',
            'Compare at least 3 stores or websites',
            'Check product reviews before buying',
            'Make a list to avoid impulse purchases',
            'Consider buying in bulk for better value'
        ]
    },
    learning: {
        keywords: ['learn', 'study', 'practice', 'master', 'understand', 'course', 'tutorial', 'read', 'book', 'research'],
        suggestions: [
            'Start with official documentation',
            'Build a small project to practice',
            'Join online communities for help',
            'Set aside 30 minutes daily for consistency',
            'Take notes and review them regularly',
            'Watch YouTube tutorials for visual learning'
        ]
    },
    communication: {
        keywords: ['call', 'email', 'contact', 'message', 'text', 'reach out', 'talk', 'meeting', 'schedule'],
        suggestions: [
            'Schedule during business hours for better response',
            'Prepare talking points before the call',
            'Set a reminder so you don\'t forget',
            'Have pen and paper ready for notes',
            'Follow up with an email to confirm',
            'Check their timezone if international'
        ]
    },
    health: {
        keywords: ['exercise', 'workout', 'gym', 'run', 'jog', 'health', 'doctor', 'appointment', 'fitness', 'yoga'],
        suggestions: [
            'Schedule in the morning when energy is high',
            'Start with just 10 minutes if you\'re new',
            'Drink water before and after',
            'Set out workout clothes the night before',
            'Track your progress to stay motivated',
            'Book the appointment now before you forget'
        ]
    },
    work: {
        keywords: ['meeting', 'presentation', 'report', 'project', 'deadline', 'work', 'submit', 'complete', 'finish'],
        suggestions: [
            'Break it into smaller milestones',
            'Block calendar time to focus without interruptions',
            'Start with the hardest part first',
            'Set a timer for 25-minute work sprints',
            'Prepare an agenda or outline first',
            'Review your work before submitting'
        ]
    },
    household: {
        keywords: ['clean', 'organize', 'fix', 'repair', 'laundry', 'dishes', 'tidy', 'vacuum', 'wash'],
        suggestions: [
            'Set a timer for 15 minutes and see how much you can do',
            'Put on music to make it more enjoyable',
            'Do a little each day instead of all at once',
            'Declutter one small area at a time',
            'Reward yourself after completing it',
            'Get someone to help make it faster'
        ]
    },
    cooking: {
        keywords: ['cook', 'prepare', 'meal', 'recipe', 'dinner', 'lunch', 'breakfast', 'bake'],
        suggestions: [
            'Check you have all ingredients before starting',
            'Prep vegetables and ingredients first',
            'Read the entire recipe before cooking',
            'Set timers for each cooking step',
            'Cook extra portions for leftovers',
            'Clean as you go to save time later'
        ]
    },
    finance: {
        keywords: ['pay', 'bill', 'invoice', 'budget', 'save', 'money', 'bank', 'transfer', 'invest'],
        suggestions: [
            'Set up automatic payments to avoid late fees',
            'Review your statement before paying',
            'Set a monthly budget reminder',
            'Save receipts for tax purposes',
            'Compare rates before committing',
            'Use a budgeting app to track spending'
        ]
    },
    travel: {
        keywords: ['travel', 'trip', 'vacation', 'book', 'flight', 'hotel', 'pack', 'passport'],
        suggestions: [
            'Book flights on Tuesday/Wednesday for better prices',
            'Make a packing list a week before',
            'Check passport expiry date (needs 6 months validity)',
            'Download offline maps before traveling',
            'Notify your bank of travel plans',
            'Research local customs and etiquette'
        ]
    },
    job: {
        keywords: ['apply', 'resume', 'cv', 'interview', 'job', 'career', 'linkedin', 'portfolio'],
        suggestions: [
            'Tailor your resume to the job description',
            'Research the company before applying',
            'Practice common interview questions',
            'Prepare 2-3 questions to ask them',
            'Send a thank-you email within 24 hours',
            'Update your LinkedIn profile regularly'
        ]
    },
    car: {
        keywords: ['car', 'vehicle', 'drive', 'mechanic', 'oil change', 'tire', 'repair', 'auto', 'gas'],
        suggestions: [
            'Check your car manual for maintenance schedule',
            'Get quotes from 3 mechanics before committing',
            'Keep receipts for warranty purposes',
            'Schedule regular oil changes every 5000km',
            'Check tire pressure monthly',
            'Compare fuel prices using apps'
        ]
    },
    pets: {
        keywords: ['pet', 'dog', 'cat', 'vet', 'animal', 'puppy', 'kitten', 'grooming'],
        suggestions: [
            'Book vet appointments early, they fill up fast',
            'Keep vaccination records organized',
            'Set reminders for flea/tick medication',
            'Research pet-friendly options before booking',
            'Prepare a pet first-aid kit',
            'Take photos before grooming for reference'
        ]
    },
    entertainment: {
        keywords: ['watch', 'movie', 'show', 'netflix', 'concert', 'theatre', 'game', 'play'],
        suggestions: [
            'Check reviews before committing time',
            'Book tickets early for popular shows',
            'Look for discount days (usually Tuesdays)',
            'Download content for offline viewing',
            'Check venue parking options beforehand',
            'Set aside specific "entertainment time" to actually enjoy it'
        ]
    },
    social: {
        keywords: ['party', 'event', 'birthday', 'celebration', 'invite', 'rsvp', 'gathering'],
        suggestions: [
            'RSVP as soon as possible',
            'Ask about dress code if unsure',
            'Bring a small gift or dish to share',
            'Plan your transportation ahead of time',
            'Check the weather forecast for outdoor events',
            'Charge your phone for taking photos'
        ]
    },
    studying: {
        keywords: ['exam', 'test', 'quiz', 'study', 'homework', 'assignment', 'revision'],
        suggestions: [
            'Create a study schedule 2 weeks before exams',
            'Use active recall instead of just re-reading',
            'Take 5-minute breaks every 25 minutes (Pomodoro)',
            'Study the hardest subject when you\'re most alert',
            'Form a study group for accountability',
            'Practice with past exam papers'
        ]
    },
    homeImprovement: {
        keywords: ['renovate', 'paint', 'furniture', 'decorate', 'install', 'build', 'diy'],
        suggestions: [
            'Measure twice, cut once',
            'Watch YouTube tutorials for the specific task',
            'Get multiple quotes from contractors',
            'Start with small projects to build confidence',
            'Buy 10% extra materials for mistakes',
            'Check if you need permits before starting'
        ]
    },
    tech: {
        keywords: ['computer', 'laptop', 'phone', 'software', 'app', 'install', 'update', 'download', 'tech'],
        suggestions: [
            'Backup your data before major updates',
            'Restart your device to fix 80% of issues',
            'Check official forums for troubleshooting',
            'Keep your software up to date for security',
            'Clear cache and cookies regularly',
            'Use strong, unique passwords for each account'
        ]
    },
    parenting: {
        keywords: ['child', 'kid', 'baby', 'school', 'daycare', 'pediatrician', 'parent'],
        suggestions: [
            'Keep a list of emergency contacts easily accessible',
            'Prepare tomorrow\'s things the night before',
            'Set consistent routines for better behavior',
            'Take photos/videos, they grow up fast',
            'Schedule regular check-ups in advance',
            'Join parent groups for support and advice'
        ]
    },
    relationships: {
        keywords: ['date', 'anniversary', 'relationship', 'partner', 'spouse', 'valentine'],
        suggestions: [
            'Set phone reminders for important dates',
            'Plan something meaningful, not just expensive',
            'Reserve restaurants a week in advance',
            'Consider experiences over material gifts',
            'Communicate Plans clearly to avoid surprises',
            'Keep a list of gift ideas year-round'
        ]
    },
    insurance: {
        keywords: ['insurance', 'policy', 'claim', 'coverage', 'premium', 'deductible'],
        suggestions: [
            'Compare quotes from multiple providers',
            'Review your coverage annually',
            'Keep all policy documents in one place',
            'Take photos for claims documentation',
            'Ask about bundle discounts',
            'Understand what\'s NOT covered'
        ]
    },
    legal: {
        keywords: ['lawyer', 'legal', 'contract', 'document', 'sign', 'notary', 'will'],
        suggestions: [
            'Read everything before signing',
            'Get legal advice for important contracts',
            'Keep copies of all signed documents',
            'Don\'t rush important legal decisions',
            'Ask questions if you don\'t understand',
            'Check credentials before hiring a lawyer'
        ]
    },
    gardening: {
        keywords: ['garden', 'plant', 'grow', 'lawn', 'mow', 'water', 'seed', 'flower'],
        suggestions: [
            'Research plant requirements for your climate',
            'Water in the morning to reduce evaporation',
            'Start with hardy plants if you\'re a beginner',
            'Use mulch to retain moisture and reduce weeds',
            'Label your plants to track what works',
            'Compost kitchen scraps for free fertilizer'
        ]
    },
    moving: {
        keywords: ['move', 'relocate', 'pack', 'apartment', 'house', 'rent', 'lease'],
        suggestions: [
            'Start packing non-essentials 2 weeks early',
            'Label boxes by room and contents',
            'Take photos of electronics before disconnecting',
            'Update your address with all services',
            'Keep important documents with you, not in the truck',
            'Clean your old place for deposit return'
        ]
    },
    gifts: {
        keywords: ['gift', 'present', 'birthday gift', 'christmas', 'holiday shopping'],
        suggestions: [
            'Keep a note when people mention things they want',
            'Buy gifts throughout the year to spread cost',
            'Keep gift receipts in case of returns',
            'Consider their hobbies and interests',
            'Presentation matters - take time to wrap nicely',
            'Check return policies before purchasing'
        ]
    },
    photography: {
        keywords: ['photo', 'picture', 'camera', 'shoot', 'photograph', 'picture'],
        suggestions: [
            'Clean your lens before important shots',
            'Use natural light when possible',
            'Take multiple shots from different angles',
            'Back up your photos immediately',
            'Learn the rule of thirds for composition',
            'Shoot in the golden hour (sunrise/sunset)'
        ]
    },
    writing: {
        keywords: ['write', 'blog', 'article', 'essay', 'content', 'draft', 'publish'],
        suggestions: [
            'Write a rough draft without editing first',
            'Let it sit for a day before final edits',
            'Read it aloud to catch awkward phrasing',
            'Use Grammarly or similar tools for proofreading',
            'Have someone else review before publishing',
            'Write when you\'re most creative (morning/night)'
        ]
    },
    sports: {
        keywords: ['practice', 'training', 'game', 'match', 'sport', 'team', 'tournament'],
        suggestions: [
            'Warm up properly to avoid injuries',
            'Stay hydrated before, during, and after',
            'Arrive 15 minutes early for warm-up',
            'Pack your gear the night before',
            'Track your progress to stay motivated',
            'Rest is as important as practice'
        ]
    },
    volunteering: {
        keywords: ['volunteer', 'charity', 'donate', 'community', 'nonprofit', 'help'],
        suggestions: [
            'Research the organization\'s reputation first',
            'Commit to a realistic time schedule',
            'Bring necessary skills or willingness to learn',
            'Track volunteer hours for resumes/applications',
            'Connect with other volunteers for networking',
            'Take photos for your portfolio (with permission)'
        ]
    },
    appointments: {
        keywords: ['appointment', 'booking', 'reservation', 'schedule', 'slot'],
        suggestions: [
            'Book as early as possible for best availability',
            'Set reminders 24 hours and 1 hour before',
            'Arrive 10 minutes early',
            'Prepare questions or documents beforehand',
            'Confirm the appointment a day before',
            'Know the cancellation policy'
        ]
    },
    planning: {
        keywords: ['plan', 'organize', 'prepare', 'arrange', 'coordinate', 'schedule'],
        suggestions: [
            'Break it down into smaller actionable steps',
            'Use a checklist to track progress',
            'Set realistic deadlines with buffer time',
            'Identify potential obstacles early',
            'Delegate tasks when possible',
            'Review and adjust plans regularly'
        ]
    }
}

function getSuggestion(title) {
    const normalizedTitle = title.toLowerCase().trim();

    for (const category in suggestionRules) {

        const { keywords, suggestions } = suggestionRules[category];

        const hasMatch = keywords.some(keyword =>
            normalizedTitle.includes(keyword));

        if (hasMatch) {
            const randomIndex = Math.floor(Math.random() * suggestions.length);
            return suggestions[randomIndex];
        }
    }

    // Fallback if nothing matched
    return 'Break this down into smaller, actionable steps';
}

module.exports = { getSuggestion };