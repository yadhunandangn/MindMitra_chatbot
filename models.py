from pydantic import BaseModel

class ChatRequest(BaseModel):# inherits all properties from the baseclass -> startard JSON req 
    session_id:str 
    query:str 

'''defines pydadtic model- used to structure and validate incoming request data fro your FastAPI end points
->  generally user for python validadtion
-> serialization 
-> parsing 
 '''