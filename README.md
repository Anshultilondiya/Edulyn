SpeEdlabs Project : Edu-CMS

## Edulyn

### Folder Structure
```
Edulyn
├── public
|  └── assets
└── src
   ├── apis
   ├── components
   ├── contextProviders
   ├── data
   ├── helper
   ├── pages
   └── stores
```
1. public folder contains all the static assets and should not be modified.
2. src folder contains all the js files
 ```
 apis
   └── api.js
```
  - apis folder contains api.js where all the required api calling functions are written and whenever we need to make a call we will just import these functions in our files call them with appropriate arugments, most of the api functions just require hash id of the institutes. 
