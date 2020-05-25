# Water Monitoring API

## Installation

`npm install`

## Setting up

- Create a config folder in api/
- Create dev.json or test.json file based on your usecase
- Add the following code to dev/test.json

`{"dbURI":"YOUR DATABASE URI"}`

## Running

`npm start`

## Testing

`npm test`

## Running the node api in docker

 - To build and create the image: `docker build -t <your dockerimagename> .`
 - To create and run container from this image: `docker run -p 49160:8080 -d <your dockerimagename>`
 - For further details on container naming, volume mapping etc, refer official docs [here](https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/)