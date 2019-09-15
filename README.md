# hackyeah-2019

![Screenshot](https://github.com/gildia-sc/hackyeah-2019/blob/master/20190915_110711.jpg)

“Consumers not only have a right to choose, they have the right to know what they are choosing”

It’s the little choices that makes the difference. Do you really make conscious decisions about what you buy and how it affects environment? Did you know there are over 400 ecolabels over the world? I bet you don’t know even half of them. Our app keep you informed. In shop you scan product barcode and see ecological scoring for product. That’s way you can compare it to other product which satisfies the same need. And choose the more Eco one 

Ecological scoring is based on:
- company scoring (does it engage in eco-friendly actions)
- distance to the factory that produces product (less shipment means less pollution)
- percent of generated waste (what is ratio between product and its package)
- how well package biodegradate
- is package recyclable
- what eco labels was product granted and what do they mean

For some categories of product we can even give more metrics:
- what is yearly usage of energy, water and other resources of AGD
- does fish come from sustainable fisheries
- is the source material renewable
- what is Lifetime Cycle Impact


When user scan a product we can show him recommendation of better products from the same category that are in shop - based on historical scans of other users in that localization. 

#EveryDayBetter #GiveALittleMore

# How to run

Backend:
```
sdk use 11.0.2-open (Java 11)
./gradlew bootRun
```

http://localhost:8080/

Frontend
```
cd frontend
nvm use v10.15.3
npm -g install yarn
yarn install
npm start
```

http://localhost:3000/
