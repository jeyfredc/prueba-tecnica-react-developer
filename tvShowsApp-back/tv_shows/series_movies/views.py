# import json
# from django.http import JsonResponse
# import os

# import json

# def get_data(request):
# # Ruta al archivo JSO
#     file_path = os.path.join(os.path.dirname(__file__), 'datos.json')
    
#     with open(file_path) as file:
#         data = json.load(file)
    
#     return JsonResponse(data)

import json
from tv_shows.mydb import db_cursor
# from rest_framework import status
from django.http import   JsonResponse


# @csrf_exempt
def get_data(request):
    if request.method == 'GET':
            with db_cursor() as cur:
                sql ="""select * from list.tv_shows"""
                cur.execute(sql)
                resulset = cur.fetchall()
                entries = []
                for row in resulset: 
                    objeto = dict(row)
                    title = objeto['title']
                    description = objeto['description']
                    program_type = objeto['program_type']
                    images_url = objeto['images_url']
                    images_width = objeto['images_width']
                    images_height = objeto['images_height']
                    release_year = objeto['release_year']

                    entry = {
                         
                        "title": title,
                        "description": description,
                        "programType": program_type,
                        "images": {
                        "Poster Art": {
                            "url": images_url,
                            "width": images_width,
                            "height": images_height
                        }
                        },
                        "releaseYear": release_year
                    }
                    entries.append(entry)
                if resulset == [] :

                    respuesta = {   
                        "error" : True,
                        "message": "Ocurrio un error en el API"
                    }
                else : 
                    respuesta = {
                        "error": False,
                        "satisfactorio" : True,
                        "entries": entries
                    }
    return JsonResponse(respuesta, safe=False)


