# -*- coding: utf-8 -*-
import sys, os
sys.path.append('/home/r/rousla4r/twitcoin.gr02.ru/TwitCoin/') # указываем директорию с проектом
sys.path.append('/home/r/rousla4r/.local/lib/python3.5/site-packages') # указываем директорию с библиотеками, куда поставили Flask
from TwitCoin import app as application # когда Flask стартует, он ищет application. Если не указать 'as application', сайт не заработает
from werkzeug.debug import DebuggedApplication # Опционально: подключение модуля отладки
application.wsgi_app = DebuggedApplication(application.wsgi_app, True) # Опционально: включение модуля отадки
application.debug = False  # Опционально: True/False устанавливается по необходимости в отладке