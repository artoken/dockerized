FROM python:3.8.12-buster

WORKDIR /app
COPY ./Client_side_all_tokens_django/requirements.txt .

RUN pip install -r requirements.txt
COPY ./Client_side_all_tokens_django/ ./

EXPOSE 8001

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8001"]
