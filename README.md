# Providersmartapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Generating updated models

$ openapi -i https://mcc-niddk-backend.wl.r.appspot.com/api-docs

## Browse API
    https://mcc-niddk-backend.wl.r.appspot.com/swagger-ui/index.html?configUrl=/api-docs/swagger-config

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Running locally without docker
### Updating client id and API

#### Set environment variable
     export API_SERVER="https://new-api.myapp.com";
     export CLIENT_ID="123456789abcdef"
     
#### Replace variables in env.js
envsubst < assets/env.template.js > assets/env.js

#### Server the instance

ng serve

## Open Public FHIR Instance
https://api.logicahealth.org/MCCeCarePlanTest/open

# Docker
The included file 'Dockerfle-prod' is a basic production build docker file. It will build the app and containerize it in a node nginx server. 

## Building a production docker image

### Updating client id and API

### Via Docker 
$ docker run -it -e CLIENT_ID='xxxyyzzz123123" -e API_SERVER='http://localhost:8080' -p 80:80 --rm mcccareplan/mccproviderapp 

### Example of connecting to a local development docker instance and exposing the app on port 4200
$ docker run -it -e CLIENT_ID='xxxyyzzz123123' -e API_SERVER='http://localhost:8080' -p 4200:80 --rm mcccareplan/mccproviderapp  


### Eaxmple of running locally against a local production MCC API from Logical 
$ docker run -it -e CLIENT_ID='1491aa24-3b5b-42e8-b532-63707c359493' -e API_SERVER='http://localhost:8080' -p 4200:80 --rm mcccareplan/mccproviderapp

### Building the image
$  docker build -t mcccareplan/mccproviderapp -f Dockerfile-prod .

### Pushing the image
$ docker push mcccareplan/mccproviderapp


### Runtime Environment variabls
| Variable name | Sample Value |
| ------------- | ------------- | 
| API_SERVER | http://localhost:8080 |
| CLIENT_ID | 123456789abcdef |

### Running the image


$ docker run -it -e CLIENT_ID='xxxyyzzz123123' -e API_SERVER='http://localhost:8080' -p 80:80 --rm mcccareplan/mccproviderapp 

### Public build 

The latest images are available at docker hub under mcccareplan/*. 

## Future work relating to docker

1) Testing on containers
1) Assemble a production docker-compose that links the api and the client.
1) Development containerization


 ## Development URL Parameters 
 
 | Parameter | Description | Sample |
|--------- | ------------- | --------|
| devmode | enable development mode | true |
| subject | FHIR Id of the launch subject | cc-pat-pnoelle |


#Changelog

2021-01-05
- Update to deal with observations of status 'notfound'

2021-01-04
- Updated to fix issues with education, counseling, referrals passing the right header info.

2021-12-30
- Wired in education, counseling, and referrals.
