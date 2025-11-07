# MoWie
![alt text](https://github.com/Jakebobs/MoWie/blob/main/assets/MoWieIcon.png?raw=true)

Traditional streaming platforms struggle with movie discovery, forcing users to spend excessive time browsing or settle for mediocre choices. MoWie addresses this by allowing users to search by mood, vibe, energy level, and attention requirements, not just genre or keywords.

### Getting started

If you want to run this project locally you need to:

1. Clone the repository

2. Install dependencies - `npm install`

3. While in the project directory, write

 `pip install -r ml/requirements.txt`

4. put the .env file into the ml/src directory

5. Start up the backend

 `python3 ml/src/server.py` 

 (or just run the file server.py in vs code)

6. And finally start up a development server - `npm run dev`

The project should now be available locally! It should be served on port 8080.  

You can also access it at https://mowie-0.web.app/

## Project Structure
```
mowie/
├── assets/                  #images and gifs 
├── ml/
│   ├── data/moviesum/      #Embeddings for first draft of search function 
│   ├── src/                #All files for the ml-backend
│   │   └── requirements.txt  # Required installations for backend
│   │   └── server.py         # backend start script
├── src/
│   ├── components/         # Reusable UI components (modals)
│   ├── views/             # Presentational components (pages)
│   ├── presenters/        # Business logic layer
│   ├── JS/
│   │   └── movieModel.js  # MobX state model
│   ├── style/             # Modular CSS files
│   ├── App.jsx            # Root component with routing
│   └── index.jsx          # Application entry point
└── README.md
└── index.html
```


### Contact
Jakob Ström - jakstrom@kth.se
Joel Uddin - juddin@kth.se
Nils Wiebe Werner - nilsww@kth.se
Fanny Westin - fawe@kth.se
Stella Huynh - stehuy@kth.se

**Note**: This is a prototype developed for educational purposes. The current version demonstrates core functionality but requires additional development (authentication, persistence, commercial API licenses) before commercial deployment.
