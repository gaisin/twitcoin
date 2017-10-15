from flask import Flask, request, jsonify
from flask_cors import CORS
# import flask_cors
import json
import requests
import datetime

app = Flask(__name__)
CORS(app)


@app.route('/get_rates', methods=['POST'])
def get_rates_and_tweets():
    try:
        dates = request.json

        start_date = dates['start_date']
        end_date = dates['end_date']

        with open('exception.log', 'a') as f:
            f.write(str(start_date)+'\n')
            f.write(str(end_date)+'\n')
            
        url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start={start_date}&end={end_date}'\
                                        .format(start_date=start_date, end_date=end_date)
        rates = requests.get(url)
        rates_dict = rates.json()
        
        with open('exception.log', 'a') as f:
            f.write(str(rates_dict)+'\n')

        tweets_in_dates = []
        start_date_obj = datetime.datetime.strptime(start_date, '%Y-%m-%d')
        end_date_obj = datetime.datetime.strptime(end_date, '%Y-%m-%d')

        with open('tweets.json', 'r') as f:
            tweets_raw = f.read()
            tweets_list = json.loads(tweets_raw)
            for tweet in tweets_list:
                tweet_time_obj = datetime.datetime.strptime(tweet["timestamp"][:10], '%Y-%m-%d')
                if start_date_obj <= tweet_time_obj <= end_date_obj:
                    tweets_in_dates.append(tweet)

        return jsonify({'rates': rates_dict['bpi'], 'tweets': tweets_in_dates})
    except Exception as e:
        with open('exception.log', 'a') as f:
            f.write(str(e)+'\n')
        return 'some error happened'


@app.route('/get_json', methods=['GET'])
def get_json():
    d = [
            {"fullname": "Generaci\u00f3 Digital", "id": "778994871914815492", "likes": "8", "replies": "0", "retweets": "6", \
              "text": "Dissabte a les 00:00h parlarem d'Apple Watch, el nou Zelda per WiiU, la HackUPC 2016 i moltes coses m\u00e9s. Us hi esperem!!! pic.twitter.com/fCJpznV4Gj", \
              "timestamp": "2016-09-22T16:30:25", "user": "gendigital"}, 
            {"fullname": "HackUPC", "id": "779009947770032128", "likes": "2", "replies": "1", "retweets": "0",\
              "text": "We have released another wave of acceptances. Have you checked your mail?",\
              "timestamp": "2016-09-22T17:30:19", "user": "hackupc"}
        ]
    return jsonify(d)


@app.route('/')
# @flask_cors.cross_origin()
def start():
    return "HackUPC! Check out!"


if __name__ == '__main__':
    app.run(debug = True)



# входные данные: дата начала, дата конца, за эту дату твиты, по ним строить предикт, выдавать изменения на следующий день 
# поднять сервак ec2 на aws