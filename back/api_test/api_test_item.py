import requests
import time
import os

TOKEN = os.environ['KOOZZI_TOKEN']

def test_get_search_item_by_keyword(keyword):
    start_time = time.time()
    print("=============================================")
    print("Search API Test by Keyword [Keyword : {0}]".format(keyword), end=" ")
    endpoint = "http://52.78.31.87:8000/search/?offset=0&limit=5&size=260&keyword={0}".format(keyword)
    headers = {"Authorization": "Bearer {0}".format(TOKEN)}

    response = None
    while response:
        try:
            response = requests.get(endpoint, headers=headers)
            if response.status_code != 200:
                print("..... Error")
                print(response.text)
                exit(1)
        except:
            print("Connection refused by the server .. ")
            print("Sleep 5 seconds")
            time.sleep(5)
            continue

    print("..... Good")
    print("Test execution time : ", time.time() - start_time)


def test_get_item_detail_by_id(item_id):
    start_time = time.time()
    print("=============================================")
    print("Item Detail Test by Id [Item Id : {0}]".format(item_id), end=" ")
    endpoint = "http://52.78.31.87:8000/item/{0}".format(item_id)
    headers = {"Authorization": "Bearer {0}".format(TOKEN)}

    response = None
    while response:
        try:
            response = requests.get(endpoint, headers=headers)
            if response.status_code != 200:
                print("..... Error")
                print(response.text)
                exit(1)
        except:
            print("Connection refused by the server .. ")
            print("Sleep 5 seconds")
            time.sleep(5)
            continue
        
    print("..... Good")
    print("Test execution time : ", time.time() - start_time)

test_get_search_item_by_keyword('jordan')
test_get_item_detail_by_id(3855)