const quotes = [
    "“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein",
"“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi",
"“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain",
"“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” —Eleanor Roosevelt",
"“When you change your thoughts, remember to also change your world.” —Norman Vincent Peale",
"“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.” —Walter Anderson",
"“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren",
"“Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill",
"“It is better to fail in originality than to succeed in imitation.” —Herman Melville",
"“The road to success and the road to failure are almost exactly the same.” —Colin R. Davis",
"“Success usually comes to those who are too busy to be looking for it.” —Henry David Thoreau",
"“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie",
"“Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan ‘Press On’ has solved and always will solve the problems of the human race.” —Calvin Coolidge",
"“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers",
"“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden",
"“I never dreamed about success. I worked for it.” —Estée Lauder",
"“Success is getting what you want; happiness is wanting what you get.”―W. P. Kinsella"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear(); // If all quotes have been displayed, clear the usedIndexes set
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length); // Generate a random index
        if (usedIndexes.has(randomIdx)) continue; // If index has already been used, skip to next iteration

        const quote = quotes[randomIdx]; // Get the quote at the random index
        quoteElement.innerHTML = quote; // Display the quote in the HTML element
        usedIndexes.add(randomIdx); // Add the index to the usedIndexes set
        break; // Exit the loop
    }
}
