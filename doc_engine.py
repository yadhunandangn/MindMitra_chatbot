import os 
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader  #type: ignore 
                                                                      # VectorStoreIndex -> creates a searchable vector store
                                                                      # from the documents we upload
                                                                      # SimpleDirectoryReader -> loads and reads documents 
                                                                      # from the 'data' directory

from llama_index.embeddings.huggingface.base import HuggingFaceEmbedding
  #type: ignore
  
                                                                      # for generating local embeddings using sentence transformers

from langchain_groq import ChatGroq                                   #type: ignore 
                                                                      # Connect to Groq API (LLaMA3)

'''
    wrapper around Groq API for querying the indexed data using a powerful language model (LLaMA3)
'''

# initialize LLM from Groq
llama_llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model="llama3-8b-8192"
)

# Use HuggingFace Embedding model locally (no OpenAI needed)
embed_model = HuggingFaceEmbedding(model_name="all-MiniLM-L6-v2")

# load all documents from "data" folder
documents = SimpleDirectoryReader("data").load_data()

# convert documents into vector embeddings using embed_model
# store embeddings in index for semantic search
index = VectorStoreIndex.from_documents(documents, embed_model=embed_model)

# convert index into a query engine that uses our Groq LLM for generating responses
query_engine = index.as_query_engine(llm=llama_llm)

''' 
    transforms vector index into a query engine / allows querying documents semantically
'''

# function that takes a user query and returns AI-generated response from documents
def query_documents(user_query: str) -> str:
    return str(query_engine.query(user_query))  # returns AI-generated response based on document context
