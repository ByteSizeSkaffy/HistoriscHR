/*How to import New images: 
- put an image in the images/Pictures folder
- copy "{"path":require("./FILENAME.jpg"),"year":"YEAR"}"
- Replace FILENAME with the name of the image
- replace YEAR with the year the image came from (so if the photo was taken in 1995, replace YEAR with "1995")
*/
export const data = {
    "Wittehuis_Rotterdam":[
    {"path":require("./WTH_4100_1899.jpg"),"year":"1899"},
    {"path":require("./WTH_4029.jpg"),"year":"1912"},
    {"path":require("./WTH_4100_1940.jpg"),"year":"1940"},
    {"path":require("./WTH_now.jpg"),"year":"2023"}
],"Maps":[
    {"path":require("./1903.jpg"),"year":"1903"},
    {"path":require("./1920.jpg"),"year":"1920"},
    {"path":require("./1936.jpg"),"year":"1936"}
],"3DData":{
    "WitteHuis_ifps":"https://ipfs.io/ipfs/QmTC9R2ve42ArDMgKpcJQKiSXicNzqkFWouumz7rsfuWgZ?filename=project_huis.glb",
    "Flamingo":"https://ipfs.io/ipfs/QmYqwNYxqmu4z39emTo7h9D62rbwm1esAmbAf2PctAyUvu?filename=Flamingo.glb",
    "Huis_fab":"https://sketchfab.com/3d-models/project-huis-d470c46297c44f0e9f7d304f2c00663f",
    "test":"https://drive.google.com/uc?export=download&id=https://onedrive.live.com/embed?cid=37E36B004E7EE1B0&resid=37E36B004E7EE1B0%2173021&authkey=AAgcwkyVD1haeuo"
}
}