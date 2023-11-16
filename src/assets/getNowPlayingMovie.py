#This file is used in the early stage of the website development 
#to get the json file of each movie in now playing section
import requests
import json
import os
from PIL import Image
from io import BytesIO

target_folder = "/src/assets/NowPlayingMovieData"
absolute_folder_path =os.getcwd() + target_folder


base_url = "https://api.themoviedb.org/3/movie/"
base_url_image = "https://image.tmdb.org/t/p/"


bearer_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTY3OTRlMDU1ZjRiMDA0OWVkYjAwNzYwNmU3YTJiMCIsInN1YiI6IjY1NGE1MDM3MWFjMjkyN2IyZjI3MjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5RQtn5g1oHuAfOyZmiNqBgPdAp5MWxY3jYPoJdjqM"  

#get now playing movie json file
url = f"{base_url}now_playing"
headers = {
    "Authorization": f"Bearer {bearer_token}",
}
response = requests.get(url, headers=headers)
movie_data =  response.json()

#get the json file of images details of one specific movie
def get_movie_images_details(movie_id):
    url = f"{base_url}{movie_id}/images?language=fr"
    headers = {
        "Authorization": f"Bearer {bearer_token}",
    }
    response = requests.get(url, headers=headers)
    return response.json()


#get the json file of details of one specific movie 
def get_movie_details(movie_id):
    url = f"{base_url}{movie_id}"
    headers = {
        "Authorization": f"Bearer {bearer_token}",
    }
    response = requests.get(url, headers=headers)
    return response.json()

"""def get_movie_images(path, file_size, file_name):
    url = f"{base_url_image}original{file_name}"
    print(url)
    response = requests.get(url)
    if response.status_code == 200:
        image = Image.open(BytesIO(response.content))
        save_path = path + file_name
        image.save(save_path)
        print("Image saved to", save_path)
    else:    
        print("Image not found")"""


for movie in movie_data["results"]:
    movie_id = movie["id"]
    folder_path = os.path.join(absolute_folder_path, str(movie_id))
    os.makedirs(folder_path)

    movie_details = get_movie_details(movie_id)
    movie_images_details = get_movie_images_details(movie_id)
    
    with open(f"{folder_path}/movie_{movie_id}_details.json", "w") as f:
        json.dump(movie_details, f, indent=2)
    with open(f"{folder_path}/movie_{movie_id}_images_details.json", "w") as f:
        json.dump(movie_images_details, f, indent=2)

    print("--------------------------------------------------------")
    print(f"Details for movie {movie_id} saved to movie_{movie_id}_details.json")
    print(f"Images details for movie {movie_id} saved to movie_{movie_id}_images_details.json")

    """for image_type, images in movie_images_details.items():
        if isinstance(images, list):
            for image in images:
                file_path = image.get('file_path')
                width = image.get('width')
                if file_path and width:
                    get_movie_images(folder_path, width, file_path)"""
    