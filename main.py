import os
from fastapi import FastAPI #type:ignore
from dotenv import load_dotenv #type:ignore
from models import ChatRequest
from Chat_engine import get_response
from crisis import contains_crisis_words, SAFETY_MESSAGE
from logger import log_chat
from doc_engine import query_documents
from fastapi.middleware.cors import CORSMiddleware #type:ignore

# Load environment variables
load_dotenv()

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI-powered MentalHealth chatbot!"}

@app.post("/chat")
def chat_with_memory(request: ChatRequest):
    session_id = request.session_id
    user_query = request.query

    if contains_crisis_words(user_query):
        log_chat(session_id, user_query, SAFETY_MESSAGE, is_crisis=True)
        return {"response": SAFETY_MESSAGE}

    response = get_response(session_id, user_query)
    log_chat(session_id, user_query, response, is_crisis=False)
    return {"response": response}

@app.post("/doc-chat")
def chat_with_documents(request: ChatRequest):
    response = query_documents(request.query)
    return {"response": response}
