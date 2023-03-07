# Sentiment Analysis of Cocial Media Comments on Covid-19 Post-Vaccination in Bangladesh

![Version release](https://img.shields.io/badge/Version-v1.00-green)
<img alt="GitHub watchers" src="https://img.shields.io/github/watchers/shimanto-rehman/Sentiment-Analysis-of-Social-Media-Comments-on-Covid-19-Post-Vaccination-in-Bangladesh?style=social">
![GitHub all releases](https://img.shields.io/github/downloads/shimanto-rehman/Sentiment-Analysis-of-Social-Media-Comments-on-Covid-19-Post-Vaccination-in-Bangladesh/total)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/shimanto-rehman/Sentiment-Analysis-of-Social-Media-Comments-on-Covid-19-Post-Vaccination-in-Bangladesh?style=social)
![GitHub repo file count](https://img.shields.io/github/directory-file-count/shimanto-rehman/Sentiment-Analysis-of-Social-Media-Comments-on-Covid-19-Post-Vaccination-in-Bangladesh?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/shimanto-rehman/Sentiment-Analysis-of-Social-Media-Comments-on-Covid-19-Post-Vaccination-in-Bangladesh?style=social)

**Languages and Tools:**

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>
<code><img height="20" color="white" src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/nextjs/nextjs-line.svg"></code>
<code><img height="20" src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg"></code>
<code><img height="20" src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm"></code>
<code><img height="20" src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="Visual Studio Code"></code>
<code><img height="20" src="https://github.com/get-icon/geticon/raw/master/icons/flask.svg"></code>

This Initiative will expand Bangladeshi public understanding about COVID-19 vaccine. The project's findings may help Bangladesh's immunization program. The project's methods may be used in other nations to gauge public opinion on COVID-19 immunization, aiding the worldwide battle against the virus. This project will help to find the sentiment polarity. This project is a simple and user interactive website showing the output type and algorithm's performance

## For API Part:
- Used Python Based Framework Flask. 

Note: We used Python version: 3.10
### Environmental SetUp:
- Install Anaconda
- To install Virtual Environment, naming sentiment :
```bash
$ conda create -n sentiment python=3.10
```
- To activate the Virtual Environment: 
```bash
$ conda activate sentiment
```
#### All set then !!!!!!!!!!!!!!
- To install all libraries and packages used in our code to for model building, saving, training, and data preprocessing part:
```bash
$ pip install -r requirements.txt
```

- Open app.py file, for understanding the api routing and model loading using pickle library for machine learning part and keras.models for deep learning part, also for the http get request response structure.
- Again activate the environment again: conda activate sentiment
- For serving Flask App (app.py file) on development server : 
```
python app.py
````
- Which will return a localhost address with a specific port number like:  http://127.0.0.1:5000

- You can also find it on browser by: localhost:5000

Note: Install a <code><img height="20" src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="Visual Studio Code"></code> VS Code extension "Rest Client" / "Thunder Client" to see the api responses:
 - Go to the activity part and Select your localhost port
 - Select method type (GET/POST) and put the routing address for getting prediction which is (localhost:5000/predict)
 - Then, in the Query Section, put the Query Parameter (data) and put the sentence you want to predict as the value of query pararmeter
 - Hit send !!!!
 - Boom !!!
 - See the Api Response <3
 - Or, route to: ( To see the prediction response )
 ```
 localhost:5000/predict?data=your_sentence
 ```
## FrontEnd Part 
### (With Nodejs):
 - Install Node.js, Because Used React Framework
 - Check ```node -v``` if installed
 - Got to sentiment-web directory and run this command under the subfolder: 
 ```npm i```
 - To run the frontend development server: 
 ```
 npm run dev
 ```
 - Then go to tbe localhost address it provides: 
  ```
  http://localhost:5173/
  ```
 - Thats it !!!!!

### (With Nextjs):
 - Install Nextjs, Because Used React Framework
 - In the directory run cmd and 
 ```bash
 npx create-next-app@latest --typescript
 ```
 - Install Packages: 
 ```bash
 npm i @emotion/react @emotion/styled @mui/icons-material @mui/material
 ```
 
 ## Here are some images for better view of the website
 <img height="490" width="810" src="../screenshots/Intro.png"/>
