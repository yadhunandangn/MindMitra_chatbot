from typing import List

CRISIS_KEY_WORDS: List[str]=["suicidal","suicide","kill myself","can't go on","give up","ending it all","hopeless"
                             ,"worthless","no reason to live","wan t to die"]

SAFETY_MESSAGE=(
    "I'm really sorry you're feeling this way. You're not alone, and there are people who care about you.\n"
    "Please consider reaching out to a trusted friend, family member, or mental health professional.\n\n"
    "If you are in immediate danger or need urgent help, please contact a local crisis line or emergency services.\n"
    "📞 India: 9152987821 (iCall), 1800-599-0019 (KIRAN)\n"
    "📞 USA: 988 (Suicide & Crisis Lifeline)\n\n"
    "You matter, and your life is valuable. I'm here to support you as best as I can."
)

def contains_crisis_words(text:str)->bool:
    text_lower=text.lower()
    return any(keyword in text_lower for keyword in CRISIS_KEY_WORDS)