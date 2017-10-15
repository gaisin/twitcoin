# twitCoin
Twitter as a tool to predict Bitcoin rates fluctuations

# Inspiration
Inspiration was to find subtle factors which can influence Bitcoin rate - twitter post, for example. After the analysis of data and finding correlations, we were aiming to predict how a specific twitter post may affect Bitcoin.

# What it does
The analytical tool we created is capable of making prediction based on past data from twitter. It can predict rise or fall in Bitcoin rate based on sentiment analysis of a new twitter post.

# How we built it
In first stage, we scraped twitter posts related to Bitcoin/cryptocurrency/blockchain from influential organizations and people for the last year. Then we did sentiment analysis of data by implementing our own classifier and scoring all tweets by their attitude toward Bitcoin (positive, negative, neutral). For front-end, we created SPA and implemented visual representation of data using Recharts, which used API built on Flask framework.

# Challenges we ran into
It was hard to sort out real data from fake on twitter. Also, we had to use third-party tool in order to scrap twitter posts because twitter API limited us to only a week of posts' history.

# Accomplishments that we're proud of
We managed to finish both back-end and front-end on time, despite the fact that we used highly advanced and complicated machine learning techniques which were relatively new to all of us.

# What we learned
To work as an agile team, dividing small tasks and helping each other. We became more comfortable with machine learning and with data analysis tools.

# What's next for TwitCoin
To apply the same principles on other currencies (not necessary cryptocurrencies). Also, to unbiasedly rate reliability of data sources.

# Team
[Anatoly Bardukov](https://github.com/sindbag)  
[Jevgenij Chomutovskij](https://github.com/wins2on)  
[Ruslan Gaisin](https://github.com/gaisin)  