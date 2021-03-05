import requests
import time
import os

TOKEN = os.environ['KOOZZI_TOKEN']

def test_get_user_detail_by_id(user_id):
    start_time = time.time()
    print("=============================================")
    print("User Detail Test by Id [User Id : {0}]".format(user_id), end=" ")
    endpoint = "http://52.78.31.87:8000/user/?id={0}".format(user_id)
    headers = {"Authorization": "Bearer {0}".format(TOKEN)}
    response = requests.get(endpoint, headers=headers)
    
    if response.status_code != 200:
        print("..... Error")
        print(response.text)
        exit(1)
    print("..... Good")
    print("Test execution time : ", time.time() - start_time)


def test_get_user_detail_by_token():
    start_time = time.time()
    print("=============================================")
    print("User Detail Test by Token", end=" ")
    endpoint = "http://52.78.31.87:8000/profile"
    headers = {"Authorization": "Bearer {0}".format(TOKEN)}
    response = requests.get(endpoint, headers=headers)
    
    if response.status_code != 200:
        print("..... Error")
        print(response.text)
        exit(1)
    print("..... Good")
    print("Test execution time : ", time.time() - start_time)

test_get_user_detail_by_id(2)
test_get_user_detail_by_token()