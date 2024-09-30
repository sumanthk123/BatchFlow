import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def get_relevant_header(file, query="prompt"):
    data = pd.read_csv(file)
    header = data.columns.tolist()
    text = [query] + header
    vectorizer = TfidfVectorizer()
    matrix = vectorizer.fit_transform(text)
    query_vector = matrix[0:1]
    header_vectors = matrix[1:]
    similarity = cosine_similarity(query_vector, header_vectors)
    most_similar_index = similarity.argmax()
    return header[most_similar_index]



df = pd.read_json("hf://datasets/shahules786/orca-chat/orca-chat-gpt4-8k.json")



