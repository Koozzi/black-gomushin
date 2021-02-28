FROM python:3.8

WORKDIR /gomushin

COPY . . 

RUN python3 -m pip install -r requirements.txt

CMD ["python3", "manage.py", "runserver", "0:8000"]

EXPOSE 8000