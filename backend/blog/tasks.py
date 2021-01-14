from time import sleep
from celery import shared_task

@shared_task()
def sleepy():
    sleep(10)
    return None