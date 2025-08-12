import os
from dotenv import load_dotenv  # Load environment variables #type:ignore
from langchain_groq import ChatGroq  # Integrate Groq API #type:ignore
from langchain.chains import ConversationChain  # Manage the conversation flow #type:ignore
from langchain.memory import ConversationBufferMemory  # Maintains convo memory #type:ignore

# Load API key from .env
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY not found... please check your .env file")

# Initialize the Groq LLM with LLaMA 3 model
llm = ChatGroq(
    groq_api_key=GROQ_API_KEY,
    model="llama3-70b-8192",
    temperature=0.3,  # Slightly creative but stable for supportive responses
)

"""
llm = ChatGroq(...) assigns a Groq-powered Large Language Model (LLaMA 3) to the `llm` variable.

- model="llama3-70b-8192": large, highly capable model for nuanced conversation
- Uses LangChain's ConversationChain + BufferMemory for session-based memory
"""

# Store memory for each session
session_memory_map = {}

# Get a response from the chatbot using session-specific memory
def get_response(session_id: str, user_query: str) -> str:
    # Initialize session memory if not already present
    if session_id not in session_memory_map:
        memory = ConversationBufferMemory()
        session_memory_map[session_id] = ConversationChain(
            llm=llm,
            memory=memory,
            verbose=True
        )

    conversation = session_memory_map[session_id]

    # Prepend instruction to enforce MindMitra's persona
    prompt = (
        "You are **MindMitra**, a compassionate and supportive mental health chatbot. "
        "Your role is to provide emotional support, empathetic listening, and gentle coping strategies. "
        "You are not a therapist but offer a safe conversational space for mental well-being.\n\n"
        f"User: {user_query}\nMindMitra:"
    )

    return conversation.predict(input=prompt)
