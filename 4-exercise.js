// Instructions/Exercises
// 1. Create a function that uses a for...in loop to examine the phoneBook Object
// below and print out the names of all the people who share the phone number
// "333-333-3333".

var phoneBook = {
    "Abe": "111-111-1111",
    "Bob": "222-222-2222",
    "Cam": "333-333-3333",
    "Dan": "444-444-4444",
    "Ern": "555-555-5555",
    "Fry": "111-111-1111",
    "Gil": "222-222-2222",
    "Hal": "333-333-3333",
    "Ike": "444-444-4444",
    "Jim": "555-555-5555",
    "Kip": "111-111-1111",
    "Liv": "222-222-2222",
    "Mia": "333-333-3333",
    "Nik": "444-444-4444",
    "Oli": "555-555-5555",
    "Pam": "111-111-1111",
    "Qiq": "222-222-2222",
    "Rob": "333-333-3333",
    "Stu": "444-444-4444",
    "Tad": "555-555-5555", 
    "Uwe": "111-111-1111",
    "Val": "222-222-2222",
    "Wil": "333-333-3333",
    "Xiu": "444-444-4444",
    "Yam": "555-555-5555",
    "Zed": "111-111-1111"
};



function sharedNumber(value) {
    console.log("These names all have the phone number " + value)
    for (const key in phoneBook) {
        if (`${phoneBook[key]}` === value) {
            console.log( `${key}`)
        }
    }
}

// sharedNumber("333-333-3333")

// 2. Google Shopping Product Exercises.For these exercises you will be parsing
//    through JSON.It will be provided to you.
// ? here is the file

var obj = {
    "kind": "shopping#products",
    "etag": "\"kSuBj73OPkN9HtEsYnzpddO-iYI/Xtf9O47gfjxyM3i-AgbqXTkcxTM\"",
    "id": "tag:google.com,2010:shopping/products",
    "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?country=US&q=digital+camera&alt=json",
    "nextLink": "https://www.googleapis.com/shopping/search/v1/public/products?country=US&q=digital+camera&startIndex=26&alt=json",
    "totalItems": 5788536,
    "startIndex": 1,
    "itemsPerPage": 25,
    "currentItemCount": 25,
    "requestId": "0CPCXpoKU8bcCFeohRAodikIAAA",
    "items": [
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/7774881/11180453840663864493",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7774881/gid/11180453840663864493",
      "product": {
       "googleId": "11180453840663864493",
       "author": {
        "name": "pictureline.com",
        "accountId": "7774881"
       },
       "creationTime": "2013-03-08T13:00:00.000Z",
       "modificationTime": "2013-06-19T12:00:00.000Z",
       "country": "US",
       "language": "en",
       "title": "Nikon D800 SLR Digital Camera Body",
       "description": "The Nikon D800 Digital SLR body is built for today's multimedia photographer including a groundbreaking 36.3MP FX-format CMOS sensor, Full HD 1080p video at 30/25/24p with stereo sound, class leading ISO range of 100-6400, expandable to 25600, 4 fps burst rate and Advanced Scene Recognition System with 91000-pixel RGB sensor.",
       "link": "http://www.pictureline.com/nikon-d800-digital-slr-body.html?utm_source=google&utm_medium=pla&utm_campaign=pla_feed",
       "brand": "Nikon",
       "condition": "new",
       "gtin": "00018208254804",
       "gtins": [
        "00018208254804"
       ],
       "mpns": [
        "25480"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 2796.95,
         "originalPrice": 2996.95,
         "saleEndDate": "2013-06-29T00:00:00.000Z",
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_main.jpg",
         "status": "available"
        },
        {
         "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_top.jpg"
        },
        {
         "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_bottom.jpg"
        },
        {
         "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_back.jpg"
        },
        {
         "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikonlaptopbagopen_2.jpeg"
        },
        {
         "link": "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikonlaptopbag_2.jpg"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/3532205/16661504721410582447",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/3532205/gid/16661504721410582447",
      "product": {
       "googleId": "16661504721410582447",
       "author": {
        "name": "Abt Electronics & Appliances",
        "accountId": "3532205"
       },
       "creationTime": "2012-07-25T01:00:08.000Z",
       "modificationTime": "2013-06-19T06:02:15.000Z",
       "country": "US",
       "language": "en",
       "title": "Sony RX100 Black CyberShot Digital Camera - DSCRX100B",
       "description": "Massive 20.2MP Exmor 1” CMOS Image Sensor/ Capture JPEG Files And RAW Files/ P/A/S/M Modes For Video And Stills/ Low-Light ISO 6400 Sensitivity/ Bright F1.8 Carl Zeiss Vario-Sonnar T Lens With 3.6x Zoom/ Full HD 1080/60p/ Black Finish",
       "link": "http://www.abt.com/product/62925/Sony-DSCRX100B.html?utm_source=scfroogle&utm_medium=sc&utm_campaign=froogle",
       "brand": "Sony",
       "condition": "new",
       "gtin": "00027242856110",
       "gtins": [
        "00027242856110"
       ],
       "mpns": [
        "DSCRX100B"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 648.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://content.abt.com/media/images/products/l_DSCRX100B.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/1057813/6067895891153887292",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/1057813/gid/6067895891153887292",
      "product": {
       "googleId": "6067895891153887292",
       "author": {
        "name": "Adorama Camera",
        "accountId": "1057813"
       },
       "creationTime": "2013-01-10T21:30:07.000Z",
       "modificationTime": "2013-06-18T23:45:26.000Z",
       "country": "US",
       "language": "en",
       "title": "Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus",
       "description": "Sony a 77 DSLR Camera, 24 . 3 MP, Translucent Mirror Technology, 12 fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19point 19 point 19 point Auto Focus Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus Step up to an incredible shooting experience with this a77 DSLR camera. Featuring Sony's top-of-the-line Translucent Mirror Technology, you can focus and shoot simultaneously for fast, precise performance and continuous shooting of up to 12 frames per second, complete with continuous auto focus. Capture amazingly-detailed images that make for gorgeous enlargements thanks to an impressive 24.3-megapixel sensor. The world's first DSLR to offer a choice of super-smooth 60p, standard 60i or richly cinematic 24p movie modes all at Full HD 1920 x 1080 resolution, you can capture incredible, high quality AVCHD or MP4 videos of all your memorable moments (records in 29-minute segments). A Tru-Finder OLED electronic viewfinder offers remarkable resolution and high contrast for outstanding depth, plus allows you to view setting adjustments in real time for the best possible picture.",
       "link": "http://www.adorama.com/ISOSLTA77V.html?refby=gbase",
       "brand": "Sony",
       "condition": "new",
       "gtin": "00027242833067",
       "gtins": [
        "00027242833067"
       ],
       "mpns": [
        "SLT-A77V"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "backorder",
         "price": 898.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://www.adorama.com/images/large/ISOSLTA77V.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/3359942/11738086986303167840",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/3359942/gid/11738086986303167840",
      "product": {
       "googleId": "11738086986303167840",
       "author": {
        "name": "Meijer",
        "accountId": "3359942"
       },
       "creationTime": "2012-10-26T11:57:46.000Z",
       "modificationTime": "2013-06-18T11:50:38.000Z",
       "country": "US",
       "language": "en",
       "title": "Canon PowerShot SX50 HS 12.1MP Digital Camera",
       "description": "Capture clear, detailed images with the Canon PowerShot SX50 HS digital camera. It features a 1/2.3\" CMOS image sensor for capturing photos in up to 4000x3000 resolution and video in up to 1080p high-definition.",
       "link": "http://www.meijer.com/s/canon-powershot-sx50-hs-12-1mp-digital-camera/_/R-232944?cmpid=goobase&CAWELAID=1623888545",
       "brand": "Canon",
       "condition": "new",
       "gtin": "00013803157192",
       "gtins": [
        "00013803157192"
       ],
       "mpns": [
        "360280"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 429.99,
         "shipping": 8.89,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://www.meijer.com/assets/product_images/styles/xlarge/1000947_013803157192_A_400.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/1032628/6306163093076466800",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/1032628/gid/6306163093076466800",
      "product": {
       "googleId": "6306163093076466800",
       "author": {
        "name": "Ritz Camera",
        "accountId": "1032628"
       },
       "creationTime": "2012-12-12T09:12:18.000Z",
       "modificationTime": "2013-06-19T08:11:08.000Z",
       "country": "US",
       "language": "en",
       "title": "PowerShot SX50 HS Compact Digital Camera",
       "description": "The World's Within Your Reach.Imagine getting right down on the field to capture sports action, zeroing in on your child's expression on a crowded stage, and recording elusive wildlife shots. All this and more is possible with the PowerShot SX50 HS offering the world's first 50x Optical Zoom lens* in a compact digital camera, which goes all the way from a wide-angle 24mm to 1200mm (35mm equivalent) to capture any shot you choose. The PowerShot SX50 HS doesn't just get you up close to the action, it delivers spectacular image quality to every shot. The Canon HS SYSTEM, a combination of a 12.1 Megapixel High-Sensitivity CMOS sensor and the DIGIC 5 Image Processor, achieves beautiful images up to ISO 6400. Record your memorable moments in incredibly lifelike 1080p Full HD video with stereo sound and High Speed AF ensures you'll capture all the action with faster focusing speed and reduced shooting lag time. The PowerShot SX50 HS also features the additional benefit of Zoom Framing Assist",
       "link": "http://www.ritzcamera.com/p/?location=GGSHOP&tmreturn=true&utm_source=Google&utm_medium=shopping&prp=641161027",
       "brand": "Canon",
       "condition": "new",
       "gtin": "00013803157192",
       "gtins": [
        "00013803157192"
       ],
       "mpns": [
        "6352B001"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 430.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://cdn.ritzcamera.com/graphics/products/6-27/641161027.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/10046/10747647294570910080",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/10046/gid/10747647294570910080",
      "product": {
       "googleId": "10747647294570910080",
       "author": {
        "name": "Target",
        "accountId": "10046"
       },
       "creationTime": "2013-06-18T12:54:59.000Z",
       "modificationTime": "2013-06-18T12:54:59.000Z",
       "country": "US",
       "language": "en",
       "title": "Lytro Light Field Camera with 8x Optical Zoom, 8GB Memory - Moxie",
       "description": "Find digital cameras at Target.com! Shoot first, focus later. the lytro camera lets you create living pictures that you can endlessly refocus after you take them. There is no autofocus and none of the shutter delay that comes with it. Just press the shutter button to instantly capture a shot before the moment is gone. be creative. discover a new kind of creativity. Refocusing lets you experience a picture differently with each click. It s like walking through the scene all over again. ready to share. share your pictures online to your favorite sites and your friends can instantly refocus them just like you do. Your pictures are about to...",
       "link": "http://www.target.com/p/lytro-light-field-camera-with-8x-optical-zoom-8gb-memory-moxie-pink-target-exclusive/-/A-14246552?ref=tgt_adv_XSG10001&AFID=Froogle_df&LNM=%7C14246552&CPNG=Electronics&ci_src=14110944&ci_sku=14246552",
       "brand": "Lytro",
       "condition": "new",
       "gtin": "00854928003168",
       "gtins": [
        "00854928003168"
       ],
       "mpns": [
        "M01-100008-US"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 399.99,
         "shipping": 4.98,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://img1.targetimg1.com/wcsstore/TargetSAS/img/p/14/24/14246552_120914023000.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/8026394/18400283058629038583",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/8026394/gid/18400283058629038583",
      "product": {
       "googleId": "18400283058629038583",
       "author": {
        "name": "eBay - Bigvalueinc",
        "accountId": "8026394"
       },
       "creationTime": "2013-05-28T16:27:33.000Z",
       "modificationTime": "2013-06-18T22:51:38.000Z",
       "country": "US",
       "language": "en",
       "title": "Nikon 1 S1 10.1 Mp Digital Camera - Red (w/ 11-27.5mm And Vr 30-110mm Lenses)",
       "description": "27629 Browse Our Store Store home Point Shoot Cameras Pro. SLR Cameras Digital Camera Lenses Camcorders Projectors GPS Navigation Home audio Blu-ray / DVD Players Nikon 1 S1 10.1 MP Digital Camera - Red (w/ 11-27.5mm and VR 30-110mm Lenses) New, Never Opened 11-27.5mm and 30-110mm Zoom Lenses 10.1MP CX High-Speed AF CMOS Sensor 3.0 460k-Dot LCD Monitor EXPEED 3A Image Processor 15fps Continuous Shooting with Autofocus Full HD 1920 x 1080/60i Video Motion Snapshot and Live Image Control Simultan",
       "link": "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=360603997858&itemid=360603997858&icep_meta_categ_id=625&icep_etrs=Y&icep_epid=140321452&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
       "brand": "Nikon",
       "condition": "new",
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 653.49,
         "tax": 0.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/PVQAAOxyY9VRLPD2/%24T2eC16ZHJHgE9n0yG+FPBRLPD1ZQ9Q%7E%7E60_1.JPG?set_id=8800005007",
         "status": "available"
        },
        {
         "link": "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/DdgAAMXQAx9RLPD4/%24T2eC16Z,%21%290E9s37Hk+6BRLPD4YObw%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/uHAAAOxyoA1RLPD7/%24T2eC16hHJF8E9nnC9dFyBRLPD6sGKg%7E%7E60_1.JPG?set_id=8800005007"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/8688882/18366881915581583933",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/8688882/gid/18366881915581583933",
      "product": {
       "googleId": "18366881915581583933",
       "author": {
        "name": "Primotronix.com",
        "accountId": "8688882"
       },
       "creationTime": "2012-09-28T14:25:18.000Z",
       "modificationTime": "2013-06-18T03:00:20.000Z",
       "country": "US",
       "language": "en",
       "title": "Sony Alpha Nex-7 Digital Camera (black, Body Only)",
       "description": "Sony Alpha NEX-7 Digital Camera (Black, Body Only) - Sony Alpha NEX-7 Digital Camera (Black, Body Only)",
       "link": "http://www.primotronix.com/tron/product_info.php?csv=gp&products_id=20666&zmam=80512835&zmas=2&zmac=1&zmap=20666",
       "brand": "Sony",
       "condition": "new",
       "gtin": "00027242833838",
       "gtins": [
        "00027242833838"
       ],
       "mpns": [
        "NEX7/B"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 899.99,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://www.primotronix.com/tron/images2/not_image_available.gif",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/123/18146176324383458652",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/123/gid/18146176324383458652",
      "product": {
       "googleId": "18146176324383458652",
       "author": {
        "name": "Abe's of Maine",
        "accountId": "123"
       },
       "creationTime": "2013-05-11T11:11:59.000Z",
       "modificationTime": "2013-06-18T22:22:03.000Z",
       "country": "US",
       "language": "en",
       "title": "Panasonic LUMIX DMC-FZ200 12.1 Megapixel Digital Camera - Black",
       "description": "Panasonic's LUMIX FZ200 12.1 Megapixel Digital Camera features Amazing F2.8 Aperture Across Its Entire Zoom Range, Advanced MOS High Sensitivity Sensor, Full HD Video Recording At 60P and much more to help accommodate all your photo needs",
       "link": "http://www.abesofmaine.com/item.do?item=PSDMCFZ200K&id=PSDMCFZ200K&l=ESEARCH_PLA",
       "brand": "Panasonic",
       "condition": "new",
       "gtin": "00885170087804",
       "gtins": [
        "00885170087804"
       ],
       "mpns": [
        "DMCFZ200K"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 529.95,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://www.abesofmaine.com/abeimg/psdmcfz200k.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/6296724/18145315413250138307",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/6296724/gid/18145315413250138307",
      "product": {
       "googleId": "18145315413250138307",
       "author": {
        "name": "eBay",
        "accountId": "6296724"
       },
       "creationTime": "2013-06-18T22:36:16.000Z",
       "modificationTime": "2013-06-18T22:36:12.000Z",
       "country": "US",
       "language": "en",
       "title": "Canon Eos M Ultra Compact Mirrorless Digital Camera Double Lens Kit Silver Japan",
       "description": "Canon Digital Camera Ultra Compact Mirrorless EOS M Double Lens Kit (Silver)EF-M18-55mm F3.5-5.6 IS STM EF-M22mm F2 STM Mount Adaptor EF-EOS M Speedlite 90EX 18 Megapixel, Digic 5, APS-C, 298g Body Size: 10.8cm x 6.6cm x 3.2cm EF-M18-55mm F3.5-5.6 IS STM EF-M22mm F2 STM Mount Adaptor EF-EOS M Speedlite 90EX Compatible with wide line of EOS accessories! Compatible with over 60 EF lens! Ultra compact size! Smaller than your palm! Touchscreen control! Choose from 4 colors! Powered by eBay Turbo Li",
       "link": "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=271064635740&itemid=271064635740&icep_meta_categ_id=625&icep_etrs=N&icep_epid=117174570&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
       "brand": "Canon",
       "condition": "new",
       "gtin": "00013803152265",
       "gtins": [
        "00013803152265"
       ],
       "mpns": [
        "6609B033"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 1599.95,
         "tax": 0.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i.ebayimg.com/00/s/NTI5WDgzOQ==/%24T2eC16Z,%21yEE9s5jGJZWBQW8+UBNfQ%7E%7E60_1.JPG?set_id=8800005007",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/7867474/18092316852173916770",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7867474/gid/18092316852173916770",
      "product": {
       "googleId": "18092316852173916770",
       "author": {
        "name": "eBay - howardtechnology",
        "accountId": "7867474"
       },
       "creationTime": "2013-06-12T21:42:08.000Z",
       "modificationTime": "2013-06-13T19:50:51.000Z",
       "country": "US",
       "language": "en",
       "title": "Canon Eos Rebel T4i - Digital Camera - Slr - 18.0 Mpix - 3 X Optical Zo 6558b003",
       "description": "Desktops Notebooks Servers Software Printers Projectors Cameras Storage Canon EOS Rebel T4i Mfg. Part: 6558B003 SKU: S10857108 Digital camera - SLR - 18.0 Mpix - 3 x optical zoom EF-S 18-55mm IS II lens Features | AF capabilities Continuous AF during HD video recording Canon's first touch-screen DSLR Improved imaging performance features Overview The EOS Rebel T4i features incredible image quality with an 18-megapixel CMOS (APS-C) sensor, DIGIC 5 image processor that helps capture all the actio",
       "link": "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=400462151781&itemid=400462151781&icep_meta_categ_id=625&icep_etrs=N&icep_epid=115330354&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
       "brand": "Canon",
       "condition": "new",
       "gtin": "08714574585796",
       "gtins": [
        "08714574585796"
       ],
       "mpns": [
        "6558B003"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 956.99,
         "tax": 0.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i.ebayimg.com/00/s/NDgwWDY0MA==/z/gIoAAOxyVX1RtnP9/%24%28KGrHqVHJFYFGWZ7FSOoBRtnP9t61%21%7E%7E60_1.JPG?set_id=880000500F",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/9189052/17912253870470323599",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/9189052/gid/17912253870470323599",
      "product": {
       "googleId": "17912253870470323599",
       "author": {
        "name": "Overstockdigital",
        "accountId": "9189052"
       },
       "creationTime": "2012-07-23T21:25:32.000Z",
       "modificationTime": "2013-05-31T19:06:14.000Z",
       "country": "US",
       "language": "en",
       "title": "Nikon D3100 SLR Digital Camera with 18-55mm VR Lens",
       "description": "Nikon D3100 SLR Digital Camera with 18-55mm VR Lens",
       "link": "http://overstockdigital.com/ovcat/product_info.php?products_id=322615",
       "brand": "Nikon",
       "condition": "new",
       "mpns": [
        "25472"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 465.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://overstockdigital.com/ovcat/images/nkd3100.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/8059/17843975811274141318",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/8059/gid/17843975811274141318",
      "product": {
       "googleId": "17843975811274141318",
       "author": {
        "name": "MacMall",
        "accountId": "8059"
       },
       "creationTime": "2013-05-30T02:55:06.000Z",
       "modificationTime": "2013-06-19T12:00:55.000Z",
       "country": "US",
       "language": "en",
       "title": "Samsung Electronics SMART Camera NX300 - digital camera",
       "description": "Samsung Electronics SMART Camera NX300 - digital camera EV-NX300ZBFUUS Samsung SMART Camera NX300 - Digital camera - mirrorless system - 20.3 Mpix - 2.5 x optical zoom NX 20-50mm lens - Wi-Fi - white",
       "link": "http://www.macmall.com/p/Samsung-Electronics-Digital-Cameras/product~DPNo~9491708~pdp.ibaiddb?source=MWBGOOGLEBASE",
       "brand": "Samsung",
       "condition": "new",
       "mpns": [
        "EV-NX300ZBFUUS"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 749.99,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i2.cc-inc.com/prod/9491000/9491708_xlg.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/6504554/17826874961104763871",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/6504554/gid/17826874961104763871",
      "product": {
       "googleId": "17826874961104763871",
       "author": {
        "name": "eBay - beststopdeals",
        "accountId": "6504554"
       },
       "creationTime": "2013-06-07T01:20:32.000Z",
       "modificationTime": "2013-06-10T05:26:34.000Z",
       "country": "US",
       "language": "en",
       "title": "Canon Eos 6d Digital Camera With Canon 24-105mm F/4.0l Is Usm Af Lens , Usa",
       "description": "brand canon color black mpn 8035b009 megapixels 20 2 mp model 6d screen size 3 type digital slr canon eos 6 d digital camera with canon 24 105 mm f 4.0 l is usm af lens new usa click an image to enlarge this item is 100 brand new 20.2 mp full frame cmos sensor includes canon ef 24 105 mm f 4.0 l lens 3.0 clear view high resolution lcd digic 5 image processor built in wi fi and gps connectivity full hd 1080 p with manual controls 11 point af with center cross type point 63 zone dual layer meterin",
       "link": "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=290858311072&itemid=290858311072&icep_meta_categ_id=625&icep_etrs=N&icep_epid=135689649&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
       "brand": "Canon",
       "condition": "new",
       "gtin": "00013803204155",
       "gtins": [
        "00013803204155"
       ],
       "mpns": [
        "8035B009"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 2373.33,
         "tax": 0.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i.ebayimg.com/00/s/NzAwWDcwMA==/z/eS8AAOxyKsZRs4Lk/%24T2eC16R,%21%290E9s37F1sJBRs4Lkfi3Q%7E%7E60_1.JPG?set_id=8800005007",
         "status": "available"
        },
        {
         "link": "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/nTMAAOxy7MtRs4Ln/%24%28KGrHqZ,%21rYFGPoc7hg%21BRs4Lm2Pz%21%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/HNkAAOxyIAZRs4Lp/%24T2eC16hHJHwE9n8ikMRbBRs4LpLPog%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/WSgAAOxy66pRs4Lr/%24T2eC16Z,%21%29%21E9s2fDPVRBRs4Lr%285H%21%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/k9AAAMXQTT9Rs4Lt/%24T2eC16J,%21%29QE9s3HEEZrBRs4LtbG%21Q%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/8xAAAOxyYYlRs4Lv/%24T2eC16J,%21wsE9suw%29yL-BRs4LvmS8%21%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/WJ4AAOxyLchRs4Ly/%24T2eC16F,%21ykE9s7tw%21,tBRs4L%29pD3%21%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/WKcAAOxyLchRs4L0/%24%28KGrHqN,%21okFGpcHnHTHBRs4Lz0Dv%21%7E%7E60_1.JPG?set_id=8800005007"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/5200551/17681056315804106263",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/5200551/gid/17681056315804106263",
      "product": {
       "googleId": "17681056315804106263",
       "author": {
        "name": "Cameta Camera",
        "accountId": "5200551"
       },
       "creationTime": "2013-04-11T14:18:00.000Z",
       "modificationTime": "2013-06-19T14:18:00.000Z",
       "country": "US",
       "language": "en",
       "title": "Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) Kit",
       "description": "This kit includes • Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) and more",
       "link": "http://www.cameta.com/Sony-Alpha-NEX-5R-Digital-Camera-Body-E-18-55mm-OSS-Lens-Black-70172.cfm?utm_source=googlebase&utm_medium=base",
       "brand": "Sony",
       "condition": "new",
       "gtin": "00689466587968",
       "gtins": [
        "00689466587968"
       ],
       "mpns": [
        "SONY-kit-70172"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 599.95,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://images.cameta.com/productimages/sony/digital/slr/nex-5r_18-55_black_kit01_70172_a.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/4257713/17666264616508775253",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/4257713/gid/17666264616508775253",
      "product": {
       "googleId": "17666264616508775253",
       "author": {
        "name": "CDW",
        "accountId": "4257713"
       },
       "creationTime": "2012-12-11T22:24:26.000Z",
       "modificationTime": "2013-06-19T08:00:00.000Z",
       "country": "US",
       "language": "en",
       "title": "Fujifilm FinePix REAL 3D W3 - digital camera",
       "description": "Digital camera - 3D - compact - 10.0 Mpix - optical zoom: 3 x - suppor",
       "link": "http://www.cdw.com/shop/products/default.aspx?edc=2214449&cm_mmc=ShoppingFeeds-_-GoogleBase-_-Digital%20Imaging-Camera/Scanner/Digital%20Cameras-_-2214449_Fujifilm%20FinePix%20REAL%203D%20W3%20-%20digital%20camera_FPC-16082969",
       "brand": "Fuji",
       "condition": "new",
       "gtin": "00074101004984",
       "gtins": [
        "00074101004984"
       ],
       "mpns": [
        "16082969"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "backorder",
         "price": 499.99,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://webobjects2.cdw.com/is/image/CDW/2214449",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/9136978/17606249969320060651",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/9136978/gid/17606249969320060651",
      "product": {
       "googleId": "17606249969320060651",
       "author": {
        "name": "Newegg.com - 17th street photo supply inc",
        "accountId": "9136978"
       },
       "creationTime": "2013-03-19T17:54:38.000Z",
       "modificationTime": "2013-06-16T18:41:14.000Z",
       "country": "US",
       "language": "en",
       "title": "Sony Alpha NEX-3N Mirrorless Digital Camera with 16-50mm Lens (Black)",
       "description": "The Alpha NEX-3N Mirrorless Digital Camera from Sony has an Exmor APS-C CMOS image sensor with a resolution of 16.1MP and a BIONZ image processor. It accepts Sony E-Mount lenses, including the supplied Power Zoom (PZ) lens, which has an effective focal length of 16-50mm (35mm equivalent: 24-75mm) and is equipped with both ED and aspherical elements. The lens is retractable and compact, measuring just 3/16\" at its shortest length.",
       "link": "http://www.newegg.com/Product/Product.aspx?Item=9SIA1J20NT0553&nm_mc=OTC-Froogle8&cm_mmc=OTC-Froogle8-_-Compact%20Mirrorless%20System%20Camera-_-Sony-_-9SIA1J20NT0553",
       "brand": "Sony",
       "condition": "new",
       "gtin": "00027242864108",
       "gtins": [
        "00027242864108"
       ],
       "mpns": [
        "027242864108"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 448.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://images10.newegg.com/ProductImage/1A9-0005-00002-05.jpg",
         "status": "available"
        },
        {
         "link": "http://images10.newegg.com/ProductImage/1A9-0005-00002-02.jpg"
        },
        {
         "link": "http://images10.newegg.com/ProductImage/1A9-0005-00002-03.jpg"
        },
        {
         "link": "http://images10.newegg.com/ProductImage/1A9-0005-00002-04.jpg"
        },
        {
         "link": "http://images10.newegg.com/ProductImage/1A9-0005-00002-01.jpg"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/7606870/17477967812343626541",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7606870/gid/17477967812343626541",
      "product": {
       "googleId": "17477967812343626541",
       "author": {
        "name": "eCost.com",
        "accountId": "7606870"
       },
       "creationTime": "2013-05-30T02:56:25.000Z",
       "modificationTime": "2013-06-18T09:02:30.000Z",
       "country": "US",
       "language": "en",
       "title": "Olympus E-PL5 - digital camera",
       "description": "Olympus E-PL5 - digital camera V205040BU000 Olympus E-PL5 - Digital camera - 3D - mirrorless system - 16.1 Mpix body only - black",
       "link": "http://www.ecost.com/p/8033704?source=EWBGOOGLEBASE",
       "brand": "Olympus",
       "condition": "new",
       "mpns": [
        "V205040BU000"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 549.99,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i2.cc-inc.com/prod/9417000/9417075_xlg.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/10009508/17254992744481035890",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/10009508/gid/17254992744481035890",
      "product": {
       "googleId": "17254992744481035890",
       "author": {
        "name": "Medical Arts Press",
        "accountId": "10009508"
       },
       "creationTime": "2013-04-06T14:11:20.000Z",
       "modificationTime": "2013-06-18T20:55:36.000Z",
       "country": "US",
       "language": "en",
       "title": "Nikon Digital Cameras; 1 S1, With 11-27.5mm NIKKOR Lens, Black",
       "description": "Digital camera with support for interchangeable 1 NIKKOR lenses; Nikon 1 mount. NIKKOR 11-27.5mm f/3.5-5.6 retractable lens lets you shoot in wide or telephoto modes for crisp, sharp images",
       "link": "http://www.medicalartspress.com/mcode/mcode.aspx?u=http:%2F%2Fwww.medicalartspress.com%2Fnikon-digital-cameras%2Fcbs%2F317932.html&cm_mmc%3DSEM_PLA_317932&ci_src=14110944&ci_sku=317932",
       "brand": "Nikon",
       "condition": "new",
       "gtin": "00018208276172",
       "gtins": [
        "00018208276172"
       ],
       "mpns": [
        "NIKON 1 S1"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 449.95,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://www.medicalartspress.com/images/products/catalog/enlarged/509824_ENL.JPG",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/6347724/17225849483606303723",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/6347724/gid/17225849483606303723",
      "product": {
       "googleId": "17225849483606303723",
       "author": {
        "name": "eBay - onecall",
        "accountId": "6347724"
       },
       "creationTime": "2013-05-13T00:21:17.000Z",
       "modificationTime": "2013-06-12T02:23:55.000Z",
       "country": "US",
       "language": "en",
       "title": "Nikon  D7100 Body 24.1-megapixel Digital Camera",
       "description": "brand nikon color black mpn 1513 megapixels 24 1 mp model d7100 digital cameras sensor resolution display 24.1 mp mpn single 1513 reserved product title nikon d series d 7100 24.1 mp black body only cnet jd ext general enclosure color black cnet jd search header manufacturer nikon cnet jd search header model d 7100 cnet jd search lens system lens for sd body only",
       "link": "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=171022734900&itemid=171022734900&icep_meta_categ_id=625&icep_etrs=Y&icep_epid=144193756&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
       "brand": "Nikon",
       "condition": "new",
       "gtin": "00018208015139",
       "gtins": [
        "00018208015139"
       ],
       "mpns": [
        "1513"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 1196.95,
         "tax": 0.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i.ebayimg.com/00/s/OTQzWDEwMDA=/z/zaYAAOxyA4ZRQ249/%24T2eC16d,%21y0E9s2S7%29tsBRQ249qEB%21%7E%7E60_1.JPG?set_id=8800005007",
         "status": "available"
        },
        {
         "link": "http://i.ebayimg.com/00/s/OTQzWDEwMDA=/z/27UAAOxyQj9RQ25B/%24T2eC16RHJG%21E9nm3q%283%29BRQ25BhUi%21%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/OTQzWDEwMDA=/z/494AAMXQvJVRQ25A/%24T2eC16R,%21%29UE9s3wCLukBRQ24+peF%21%7E%7E60_1.JPG?set_id=8800005007"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/7937/17171615172013541991",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7937/gid/17171615172013541991",
      "product": {
       "googleId": "17171615172013541991",
       "author": {
        "name": "Crutchfield",
        "accountId": "7937"
       },
       "creationTime": "2013-02-19T16:24:15.000Z",
       "modificationTime": "2013-06-19T07:20:21.000Z",
       "country": "US",
       "language": "en",
       "title": "Pentax MX-1 12-megapixel digital camera with 4X optical zoom (Silver)",
       "description": "Pentax MX-1 12-megapixel digital camera with 4X optical zoom",
       "link": "http://www.crutchfield.com/I-rgpscQUA/App/Product/Item/Default.aspx?I=815MX1S",
       "brand": "Pentax",
       "condition": "new",
       "gtin": "00027075225299",
       "gtins": [
        "00027075225299"
       ],
       "mpns": [
        "12633"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 449.99,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://a248.e.akamai.net/pix.crutchfield.com/products/2013/6/815/h815MX1S-F.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/9216392/16960148472439603410",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/9216392/gid/16960148472439603410",
      "product": {
       "googleId": "16960148472439603410",
       "author": {
        "name": "Rakuten.com Shopping - Sunset Electronics",
        "accountId": "9216392"
       },
       "creationTime": "2012-08-16T08:38:15.000Z",
       "modificationTime": "2013-06-01T18:54:56.000Z",
       "country": "US",
       "language": "en",
       "title": "Canon EOS Rebel T1i (500d) SLR Digital Camera Kit with Canon 18-5 ...",
       "description": "This Kit Includes:1- Canon EOS Rebel T1i SLR Digital Camera Kit (Includes manufacturer's supplied accessories)1- Canon EF-S 18-55mm f/3.5-5.6 Lens1- Canon 55-250mm IS Autofocus Lens2- Rechargeable Lithium Ion Replacement Extended Life Batteries1- Wide Angle Macro Lens w/Pouch and Caps1- 2x Telephoto Zoom Lens w/Pouch and Caps1- 3 Piece Filter Kit Includes: UV, Circular Polarizer and Flourescent Filter1- 32GB SDHC Memory Card1- USB SD/HC Memory Card Reader1- Flash1- Soft carrying case1- HDMI Cable1- Full Size Tripod w/Carry Bag1- Pack of LCD Screen Protectors1- Lens/LCD Cleaning Kit1- Mini Table Top Tripod",
       "link": "http://clickfrom.rakuten.com/default.asp?adid=17902&sURL=http%3A%2F%2Fsunset-electronics.store.rakuten.com/p/canon-eos-rebel-t1i-500d-slr-digital-camera-kit-with-canon-18-55mm/230027432.html%3FlistingId%3D210817476",
       "brand": "Canon",
       "condition": "new",
       "gtin": "00017223423233",
       "gtins": [
        "00017223423233"
       ],
       "mpns": [
        "t1ik2"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 899.95,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://images.rakuten.com/PI/0/500/230027432.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/7827/16569108489747966237",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7827/gid/16569108489747966237",
      "product": {
       "googleId": "16569108489747966237",
       "author": {
        "name": "Dell",
        "accountId": "7827"
       },
       "creationTime": "2013-05-18T15:06:25.000Z",
       "modificationTime": "2013-06-18T15:04:59.000Z",
       "country": "US",
       "language": "en",
       "title": "Samsung NX300 20.3MP Digital Camera Bundle with NX 20-50mm Lens – Black",
       "description": "Samsung NX300 20.3MP Digital Camera – Black Sometimes a split second makes all the difference. The Samsung NX300 lets you quickly and perfectly captures every magical moment. With the advanced hybrid autofocus system, you can shoot sharp and detailed images more spontaneously than ever. You can also take continuous shots at a rate of 8.6 frames per second, so amazing action photos are now even calmer. Enjoy it all with stunning high-quality and vividly realistic color thanks to the 20.3-megapixel sensor, and even share memories quickly and easily with wireless connectivity. It included NX 20-50mm Lens. NX 20-50mm Lens It may be ultra-compact, but the 20 - 50mm retractable zoom lens delivers big results. Ranging from the 20mm wide-angle to the standard-angle 50mm, it's impeccable for everything from portraits to landscapes to sunsets. The range has also been optimised for a more compact lens design. If you're a traveler, you'll appreciatethe fact that the 20 - 50mm zoom lens is much",
       "link": "http://lt.dell.com/lt/lt.aspx?CID=27530&LID=627063&DGC=SS&DGSeg=DHS&DURL=http://accessories.us.dell.com/sna/productdetail.aspx?c=us%26l=en%26s=dhs%26cs=19%26sku=A6805396&CAWELAID=1925445720",
       "brand": "Samsung",
       "condition": "new",
       "mpns": [
        "EV-NX300ZBATUS"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 749.99,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://accessories.us.dell.com/sna/images/products/large/A6805396.jpg",
         "status": "available"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/8508634/16261575049293546089",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/8508634/gid/16261575049293546089",
      "product": {
       "googleId": "16261575049293546089",
       "author": {
        "name": "eBay - thecamerabox",
        "accountId": "8508634"
       },
       "creationTime": "2013-05-31T20:19:12.000Z",
       "modificationTime": "2013-06-10T06:13:55.000Z",
       "country": "US",
       "language": "en",
       "title": "Canon Eos Rebel T3i Digital Camera With Ef-s 18-55mm Is Ii Lens Kit Usa",
       "description": "Canon EOS Rebel T3i Digital Camera with EF-S 18-55mm IS II Lens Kit Brand New in its Original Retail Box USA Model The Camera Box EFS 18-55mm f/3.5-5.6 IS II AF Lens LP-E8 Rechargeable Lithium-Ion Battery (1120mAh) LC-E8E Battery Charger Wide Strap USB In",
       "link": "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=330851785173&itemid=330851785173&icep_meta_categ_id=625&icep_etrs=Y&icep_epid=100113265&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
       "brand": "Canon",
       "condition": "new",
       "gtin": "08714574569505",
       "gtins": [
        "08714574569505"
       ],
       "mpns": [
        "5169B003"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 589.99,
         "tax": 0.0,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24T2eC16Z,%21ysE9sy0i3R0BQ4c%21mQmKw%7E%7E60_1.JPG?set_id=8800005007",
         "status": "available"
        },
        {
         "link": "http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24T2eC16F,%21%29%21E9s2f%21G%29zBQ4c%21nkMH%21%7E%7E60_1.JPG?set_id=8800005007"
        },
        {
         "link": "http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24%28KGrHqJ,%21qQFC,wmDwklBQ4c%21oWV2Q%7E%7E60_1.JPG?set_id=8800005007"
        }
       ]
      }
     },
     {
      "kind": "shopping#product",
      "id": "tag:google.com,2010:shopping/products/15953/16174816936822603351",
      "selfLink": "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/15953/gid/16174816936822603351",
      "product": {
       "googleId": "16174816936822603351",
       "author": {
        "name": "BuyDig.com",
        "accountId": "15953"
       },
       "creationTime": "2013-06-11T10:04:47.000Z",
       "modificationTime": "2013-06-18T10:04:50.000Z",
       "country": "US",
       "language": "en",
       "title": "Samsung NX300 20.3 MP Digital Camera White 8GB Kit",
       "description": "Samsung NX300 20.3 MP Digital Camera White 8GB Kit. Fast and powerful, the Samsung SMART CAMERA NX300 allows you to quickly and perfectly capture spontaneous, even magical moments throughout your day. High performance made portable - the on-the-go photographer never had it this good. The NX300 features a new, ultra-sensitive 20.3MP APS-C CMOS sensor and an advanced hybrid autofocus system for delivering detailed images that obliterate the line between professional and enthusiast. And thanks to its 1/6000 shutter speed, you can keep up with the action - any action - and precisely capture a fast-paced moment you would otherwise miss. Advanced 20.3M APS-C CMOS Sensor Worthy of professional photographers, but made for the enthusiast, the 20.3MP APS-C CMOS sensor - now with Phase detection AF - delivers high-quality images and lifelike colors with the highest resolution in its class. It's also ideal for out-focusing photography, thanks to a sensor that's the largest used in a mirrorless",
       "link": "http://www.buydig.com/shop/product.aspx?sku=E1SAMNX300W&ref=froogle&omid=103&CAWELAID=230005120000015639",
       "brand": "Samsung",
       "condition": "new",
       "gtin": "00845251051582",
       "gtins": [
        "00845251051582"
       ],
       "mpns": [
        "E1SAMNX300W"
       ],
       "inventories": [
        {
         "channel": "online",
         "availability": "inStock",
         "price": 697.99,
         "shipping": 0.0,
         "currency": "USD"
        }
       ],
       "images": [
        {
         "link": "http://www.buydig.com/assets/product/imagesnw250/BB1FC769518B4C75B3CED99F74F123CC.jpg",
         "status": "available"
        }
       ]
      }
     }
    ]
   }
//    a.Go through the items and find all results that have kind of
//      shopping#product. Print the count of these results.Where else is this
//      count information stored in the search results ?
var data = obj.items


// let count= 0
// for (var i = 0; i < data.length; i++) {
//     if (data[i].kind === "shopping#product") { count++ }
// }
// console.log(count);


//    b.Print the title of all items with a backorder availability in inventories.

console.log("Backordered products:\n")
for (var i = 0; i < data.length; i++) {
    // console.log(data[i].product.inventories[0].availability)
    if (data[i].product.inventories[0].availability === "backorder" ) {
        console.log(`${i+1}. ` + data[i].product.title)
    }
}
console.log("\n\n")


//    c.Print the title of all items with more than one image link.

console.log("Products with multiple images:\n")
for (var i = 0; i < data.length; i++) {
    if (data[i].product.images.length > 0) {
        console.log(`${i+1}. ` + data[i].product.title)
    }
}
console.log("\n\n")


//    d. Print all “Canon” products in the items(careful with case sensitivity).
    
console.log("Canon products:\n")
for (var i = 0; i < data.length; i++) {
    if (data[i].product.title.search("Canon")  != -1) {
        console.log(`${i+1}. ` + data[i].product.title)
    }
}


//    e.Print all of the items that have an author name of “eBay” and are brand
//      “Canon”.

   console.log("Canon from eBay:\n")

   for (var i = 0; i<data.length; i++) {
       if (data[i].product.brand === "Canon" && data[i].product.author.name === 'eBay') {
           console.log(`${i+1}. ` + data[i].product.title)
       }
   } 

   
//    f.Print all products with their brand, price, and an image link.

console.log("All products with brand, price and an image link:\n")

for (var i = 0; i<data.length; i++) {
    console.log(`${i+1}. ` + "\tTitle: " + data[i].product.title)
    console.log("\tBrand: " + data[i].product.brand)
    console.log("\tPrice: $" + data[i].product.inventories[0].price)
    console.log("\tImage: " + data[i].product.images[0].link)
}

// Hints
   
//  ●   We'll be dealing with large JSON objects quite frequently throughout the course.
//      Use a Chrome extension such as JSONView in order to easily collapse arrays
//      and objects during this assignment.Once the extension is installed, access the
//      JSON file via Github by going to products.json, then clicking Raw right above the
//      file.
//  ● When in doubt, think about the different functions available for strings, objects,
//      and arrays.
//  ● Double - check your results, especially with #5
// ● Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



