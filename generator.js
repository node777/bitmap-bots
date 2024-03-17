let bots=[]

let parts = {
    backgrounds:{
        "none":{
            default:true
        },
        "city":{
            containsRules:[
                {
                    n:"9",
                    c:2
                },
                
                {
                    n:"7",
                    c:1
                }
            ]
        },
        "dmt":{
            containsRules:[
                {
                    n:"8",
                    c:2
                },
                {
                    n:"7",
                    c:1
                }
            ]

        },
        "dungeon":{
            containsRules:[
                {
                    n:"5",
                    c:2
                },
                {
                    n:"7",
                    c:1
                }
            ]

        },
        "gold":{
            containsRules:[
                {
                    n:"4",
                    c:2
                },
                {
                    n:"7",
                    c:1
                }
            ]

        },
        "mechanic":{
            containsRules:[
                {
                    n:"3",
                    c:2
                },
                {
                    n:"7",
                    c:1
                }
            ]

        },
        "stars":{
            containsRules:[
                {
                    n:"7",
                    c:2
                },
                {
                    n:"7",
                    c:1
                }
            ]

        },
    },
    bodies:{
        "golden":{
            default:true

        },
        "blue":{
            rules:{
                5:9
            }

        },
        "cursed":{
            rules:{
                5:8
            }

        },
        "hybrid":{
            rules:{
                5:7
            }

        },
        "purple":{
            rules:{
                5:6
            }

        },
        "unbot":{
            rules:{
                5:5
            }

        },
        "vbot":{
            rules:{
                5:4
            }

        },

    },
    accessories:{
        "classic":{
            default:true
            
        },
        "chain":{

            rules:{
                4:7
            },
            notRules:{
                5:7,
                5:9
            }
        }
    },
    borg:{
        "classic":{
            default:true
            
        },
        "borg1":{
            notRules:{
            },
            rules:{
                4:6,
                2:2
            }
            
        },
        "borg2":{
            rules:{
                4:9,
                2:2
            },
            
        },
        "borg3":{
            rules:{
                5:9,
                4:7
            },
            
        },
    },
    clothing:{
        "classic":{
            default:true
            
        },
        "whiteT":{
            rules:{
                4:0
            }
            
        },
        "whiteTSimple":{
            rules:{
                4:1
            }
            
        },
        "blackT":{
            rules:{
                4:2
            }
            
        },
        "hoodie":{
            rules:{
                4:3
            }
            
        },
        "cursedJacket":{
            rules:{
                4:4
            }
            
        },
        "bladeJacket":{
            rules:{
                4:5
            }
            
        },
    },
    eyes:{
        "ordi":{
            default:true
            
        },
        "xray":{
            rules:{
                2:1,
                3:1,
                4:6
            }
        },
        "dmtVR":{
            rules:{
                2:0,
                4:6
            }
            
        },
        "eyePatch":{
            rules:{
                2:0,
                4:7
            }
            
        },
        "bitmapVR":{
            rules:{
                2:0,
                4:8
            }
            
        },
        
        "ordinalThug":{
            rules:{
                2:1,
                3:0
            }
            
        },
        "oversized":{
            rules:{
                2:1,
                3:1
            }
            
        },
        "purple":{
            
            rules:{
                2:1,
                3:2
            }
            
        },
        "redTriclops":{
            rules:{
                2:1,
                3:3
            }
            
        },
        "stoned":{
            rules:{
                2:1,
                3:4
            }
            
        },
        "triclops":{
            rules:{
                2:1,
                3:5
            }
            
        },
        "fud":{
            rules:{
                2:1,
                3:6
            }
            
        },
        "blurryBlue":{
            rules:{
                2:1,
                3:7
            }
            
        },
        "blurryOrange":{
            rules:{
                2:1,
                3:8
            }
            
        },
        "classicXVisor":{
            rules:{
                2:1,
                3:9
            }
            
        },
        "yellowShades":{
            rules:{
                2:2,
                3:0
            }
            
        },
        "bitrunner":{
            rules:{
                2:2,
                3:1
            }
            
        },
        "blueXVisor":{
            rules:{
                2:2,
                3:2
            }
            
        },
        "cursedVR":{
            rules:{
                2:2,
                3:3
            }
            
        },
        
        "XPVisor":{
            rules:{
                2:2,
                3:4
            }
            
        },
        "eliteShades":{
            rules:{
                2:2,
                3:5
            }
            
        },
        "laser":{
            rules:{
                2:2,
                3:6
            }
            
        },
        "neoTokyo":{
            rules:{
                2:2,
                3:7
            }
            
        },
        "orange":{
            rules:{
                2:2,
                3:8
            }
        },
        "ordiBlue":{
            rules:{
                2:2,
                3:9
            }
            
        },
    },
    hats:{
        "none":{
            default:true
            
        },
        "bonnie":{
            rules:{
                2:1,
                4:9
            }
            
        },
        "circuits":{
            rules:{
                2:1,
                4:8
            }
            
        },
        "cursed":{
            rules:{
                2:1,
                4:5
            },
            notRules:{
                5:4
            }
        },
        "daft":{
            rules:{
                2:1,
                3:1,
                4:6
            },
            notRules:{
                3:7,
                3:8,
                
            }
            
        },
        "pirateDjinn":{
            rules:{
                2:1,
                4:7
            }
            
        }
    },
    mouths:{
        "classic":{
            default:true
            
        },
        "blunt":{
            orRules:{

            },
            rules:{
                5:0,
                2:1
            },
            notRules:{
                4:6
            }
        },
        "bubblegum":{

            rules:{
                5:4,
                2:0
            }
        },
        "rainbow":{
            rules:{
                5:3,
                2:2
            }
            
        },
        "laugh":{
            rules:{
                5:1
            }
            
        },
        "pirate":{
            rules:{
                5:2
            }
            
        },
        "toungue":{
            rules:{
                5:3
            }
            
        }
    }
}
async function loadBots(){
    let inscriptionList= await fetch("./inscriptions.json")
    inscriptionList = await inscriptionList.json()
    let blockList= await fetch("./blocks.json")
    blockList = await blockList.json()
    for(i in inscriptionList){
        if(i<2222){
            bots[i]={
                id:inscriptionList[i],
                block:blockList[i],
                traits:generateTraits(blockList[i])
            }
        }
    }
    let botHTML=``
    for(b in bots){
        botHTML+=drawBot(b)
    }
    document.getElementById("bots").innerHTML=botHTML

}
function drawBot(num){
    let traits=bots[num].traits
    return `
        <div class="bot">
            <img style="top:${num*272}px" class="piece border" src="./parts/backgrounds/${traits.backgrounds}.png" />
            <img style="top:${num*272}px" class="piece" src="./parts/bodies/${traits.bodies}.png" />
            <img style="top:${num*272}px" class="piece" src="./parts/clothing/${traits.clothing}.png" />
            <img style="top:${num*272}px" class="piece" src="./parts/accessories/${traits.accessories}.png" />
            <img style="top:${num*272}px" class="piece" src="./parts/borg/${traits.borg}.png" />
            <img style="top:${num*272}px" class="piece" src="./parts/eyes/${traits.eyes}.png" />
            <img style="top:${num*272}px" class="piece" src="./parts/mouths/${traits.mouths}.png" />
            <img style="top:${num*272}px" class="piece" src="./parts/hats/${traits.hats}.png" />
            <div style="top:${num*272}px; left:10%" class="piece">
            
            ${JSON.stringify(bots[num], false, '\n').replace(",", `,\n`)}
            </div>
        </div>
    `
}
function ruleQualifies(data, digits){
    let r = false
    let andRules=data.rules||{}
    let orRules=data.orRules||{}
    let notRules=data.notRules||{}
    let containsRules=data.containsRules||{}
    let sumRules=data.sumRules||{}

    // console.log(digits, data)
    //check NOT rules
    if(notRules!=undefined){
        for(rule in notRules){
            if(Number(digits[rule])==notRules[rule]){
                return false
            }
        }
    }
    //check contains rules
    if(sumRules!=undefined){
        for(rule in sumRules){
            if(sumRules[rule]==sumModTen(digits)){
                return true
            }
            
        }
    }
    //check contains rules
    if(containsRules!=undefined){
        for(rule in containsRules){
            if(digits.filter(value => value === containsRules[rule].n).length == containsRules[rule].c){
                r = true
            }else{
                return false
            }
        }
    }
    //check OR rules
    if(orRules!=undefined){
        for(rule in orRules){
            if(Number(digits[rule])==orRules[rule]){
                return true
            }
        }
    }
    //check AND rules
    
    if(andRules!=undefined){
        for(rule in andRules){
            if(Number(digits[rule])==andRules[rule]){
                r=true
            }else{return false}
        }
    }
    return r
}
function getTrait(traitType, block){
    let digits = block.toString().split("")
    let trait=""
    for(part in parts[traitType]){
        let partData = parts[traitType][part]
        if(partData.default==true){
            trait=part
        }else if(ruleQualifies(partData, digits)){
            return part
        }
    }
    return trait

}
function generateTraits(block){
    let traits={}
    for(traitType in parts){
        // traits[traitType]
        traits[traitType]=getTrait(traitType, block)
    }
    return traits
}
function findObjectsWithIdenticalTraits(objects) {
    const traitGroups = {};

    objects.forEach(obj => {
        // Create a signature string from the traits object
        const traitsSignature = JSON.stringify(obj.traits);

        // If the group for this signature does not exist, create it
        if (!traitGroups[traitsSignature]) {
            traitGroups[traitsSignature] = [];
        }

        // Add the object to the corresponding group
        traitGroups[traitsSignature].push(obj);
    });

    // Now, traitGroups contains arrays of objects grouped by identical traits
    // You can process this however you need; for example, to find groups with more than one member (identical traits)
    for (const [signature, group] of Object.entries(traitGroups)) {
        if (group.length > 1) {
            console.log(`Found ${group.length} objects with identical traits: `, group.map(obj => obj.block));
        }
    }
}
loadBots()
function countTraitFrequencies(objects) {
    const traitFrequencies = {};
  
    objects.forEach(obj => {
      Object.keys(obj.traits).forEach(trait => {
        const value = obj.traits[trait];
  
        // Initialize the trait category if it doesn't exist
        if (!traitFrequencies[trait]) {
          traitFrequencies[trait] = {};
        }
  
        // Initialize the trait value counter if it doesn't exist
        if (!traitFrequencies[trait][value]) {
          traitFrequencies[trait][value] = 0;
        }
  
        // Increment the counter for this trait value
        traitFrequencies[trait][value]++;
      });
    });
  
    return traitFrequencies;
  }
  function downloadCompositeImage(num) {
    let traits = bots[num].traits;
    let canvas = document.createElement('canvas');
    canvas.width = 128; // Set to your desired width
    canvas.height = 128; // Set to your desired height
    let ctx = canvas.getContext('2d');

    // List of images to overlay, in order
    let images = [
        `./parts/backgrounds/${traits.backgrounds}.png`,
        `./parts/bodies/${traits.bodies}.png`,
        `./parts/clothing/${traits.clothing}.png`,
        `./parts/accessories/${traits.accessories}.png`,
        `./parts/borg/${traits.borg}.png`,
        `./parts/eyes/${traits.eyes}.png`,
        `./parts/mouths/${traits.mouths}.png`,
        `./parts/hats/${traits.hats}.png`
    ];

    // Function to load and draw images
    let loadAndDrawImage = (url) => {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve();
            };
            img.onerror = reject;
            img.src = url;
        });
    };

    // Chain image loading and drawing promises
    images.reduce((promiseChain, imageUrl) => {
        return promiseChain.then(() => loadAndDrawImage(imageUrl));
    }, Promise.resolve()).then(() => {
        // Once all images are drawn, create a link and download the composite image
        let link = document.createElement('a');
        link.download = `composite_bot_${num}.png`;
        link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        link.click();
    }).catch(error => {
        console.error("Failed to load an image", error);
    });
}
function downloadAllBotsAsZip() {
    let zip = new JSZip();

    // Helper function to load image
    const loadImage = (src) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous"; // Handle CORS
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    };

    // Helper function to draw image to canvas and return data URL
    const drawToCanvas = async (traits) => {
        let canvas = document.createElement('canvas');
        canvas.width = 128; // Adjust based on actual image sizes
        canvas.height = 128; // Adjust based on actual image sizes
        let ctx = canvas.getContext('2d');

        const parts = [
            `./parts/backgrounds/${traits.backgrounds}.png`,
            `./parts/bodies/${traits.bodies}.png`,
            `./parts/clothing/${traits.clothing}.png`,
            `./parts/accessories/${traits.accessories}.png`,
            `./parts/borg/${traits.borg}.png`,
            `./parts/eyes/${traits.eyes}.png`,
            `./parts/mouths/${traits.mouths}.png`,
            `./parts/hats/${traits.hats}.png`,
        ];

        for (let src of parts) {
            const img = await loadImage(src);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // console.log("processing bot ")
        }

        return canvas.toDataURL("image/png");
    };

    // Create a chain of promises to process each bot
    const allBotsProcessed = bots.reduce((chain, bot, index) => {
        return chain.then(() => {
            return drawToCanvas(bot.traits).then(dataUrl => {
                const imgData = dataUrl.replace(/^data:image\/(png|jpg);base64,/, "");
                zip.file(`bot_${index}.png`, imgData, {base64: true});
            });
        });
    }, Promise.resolve());

    // When all bots are processed, generate ZIP and trigger download
    allBotsProcessed.then(() => {
        zip.generateAsync({type:"blob"}).then(function(content) {
            saveAs(content, "bots.zip");
        });
    }).catch(error => {
        console.error("An error occurred:", error);
    });
}
function sumModTen(numbers) {
    // Sum all numbers after converting them from strings to numbers
    const sum = numbers.reduce((acc, current) => acc + Number(current), 0);
    
    // Return the sum modulo 10
    return sum % 10;
}