FROM python:3.8.12-buster

WORKDIR /app
COPY ./admin_side/requirements.txt .

RUN pip install -r requirements.txt
COPY ./admin_side/ ./

EXPOSE 8000

ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]
