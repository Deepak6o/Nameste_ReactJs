import React from "react";
import ReactDOM from "react-dom";

const Title = () => {
  return (
    <img
      className="logo"
      alt="Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFXrbnGiuPRQlFrnA7S7BWlcxiWR3kJSPqg&usqp=CAU"
    />
  );
};
// How we use inline css in jsx
const css = {
  backgroundColor: "#FFF380",
};
const Header = () => {
  return (
    <div className="header" style={css}>
      <Title />
      {
        //This is comment
      }
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Config Driven UI

// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off",
//       },
//       {
//         offerName: "No Delivery Charge",
//       },
//     ],
//   },
//   {
//     type: "restaurant",
//     cards: [
//       {
//         name: "Food Tok",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zwjgq3ar4yle1ng5pirh",
//         cusins: ["NorthIndian", "Chinease"],
//         rating: "4.2",
//       },
//       {
//         name: "KFC",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zwjgq3ar4yle1ng5pirh",
//         cusins: ["NorthIndian", "Chinease"],
//         rating: "4.2",
//       },
//     ],
//   },
// ];

const restrauList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "670337",
      "name": "Lucifer",
      "uuid": "6e4dab6e-b635-460f-b4a6-79d26ffcb608",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "8006da15f56be6c061c258a85c617b45",
      "cuisines": [
        "Snacks",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 48,
      "minDeliveryTime": 48,
      "maxDeliveryTime": 48,
      "slaString": "48 MINS",
      "lastMileTravel": 6.300000190734863,
      "slugs": {
        "restaurant": "lucifer-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "QJ27+7QG, Kharar, Punjab 140301, India",
      "locality": "Kharar",
      "parentId": 323118,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "NEW"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "670337",
        "deliveryTime": 48,
        "minDeliveryTime": 48,
        "maxDeliveryTime": 48,
        "lastMileTravel": 6.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "489071",
      "name": "Food Tok",
      "uuid": "c240a045-6e74-425d-9012-7458ddc0f64d",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "zwjgq3ar4yle1ng5pirh",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Fast Food",
        "Italian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 7,
      "slugs": {
        "restaurant": "food-tok-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "SHOP NO 7, OMEGA CITY MARKET, Teshil Kharar Except Sub Tehsil Majri, SAS Nagar Mohali-3(Teshil Kharar, Nayagaon Municipal, Council, Except Sub Tehsil Majri), Mohali, Punjab - 140301",
      "locality": "Omega City Market",
      "parentId": 82071,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "489071",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 7,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "673186",
      "name": "Food Slice",
      "uuid": "1290afea-047a-458f-8be2-3b04465e3b37",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "906c0affa7d8ff78a3e4db88b4433cde",
      "cuisines": [
        "Pizzas",
        "Burgers",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 41,
      "minDeliveryTime": 41,
      "maxDeliveryTime": 41,
      "slaString": "41 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "food-slice-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "darpan greens, shop no.11, khanpur, tehsil kharar, mohali, punjab 140301",
      "locality": "Darpan greens",
      "parentId": 403147,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "NEW"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "673186",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "624624",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "uuid": "ee310d3b-e103-4526-bad5-7cf0fa06b407",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "ccoquylcdr3cdeue5q5o",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 7.800000190734863,
      "slugs": {
        "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-greater-mohali-greater-mohali-6",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "G SQUARE & COMPANY: Shop 6- B,First Floor, Comfort Green Homes, Khanpur, Kharar, Police Station Kharar, SAS Nagar Mohali Punjab - 140301 (HUL-I331076P1302)",
      "locality": "Police Station Kharar",
      "parentId": 582,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "624624",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 7.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "592572",
      "name": "THE URBAN TURBAN",
      "uuid": "d8c6faa2-4be6-40cd-92b9-89b124612a38",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "ux5noz0i0wvogitjhpx1",
      "cuisines": [
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 44,
      "maxDeliveryTime": 44,
      "slaString": "44 MINS",
      "lastMileTravel": 7.800000190734863,
      "slugs": {
        "restaurant": "the-urban-turban-greater-mohali-greater-mohali-2",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "#91sec12 kharar, Ranjit Nagar, Garden Colony, Sahibzada Ajit Singh Nagar, Punjab 140301, India",
      "locality": "Ranjit Nagar",
      "parentId": 215042,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "592572",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "lastMileTravel": 7.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "669972",
      "name": "Indo Western Dhaba",
      "uuid": "890da7a0-0d79-4db8-919d-1a18df9d00a3",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "697f82a44ce19e4ef51c9c93dd38bdf3",
      "cuisines": [
        "North Indian",
        "Italian-American",
        "Chinese",
        "South Indian",
        "Fast Food",
        "Biryani",
        "Snacks",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 8.199999809265137,
      "slugs": {
        "restaurant": "indo-western-dhaba-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "sco 2 cCivil Hospital Road near bus standGuru Teg Bahadur Nagar, Kharar,, Teshil Kharar Except Sub Tehsil Majri, SAS Nagar Mohali-3(Teshil Kharar, Nayagaon Municipal, Council, Except Sub Tehsil Majri)",
      "locality": "Sas nagar",
      "parentId": 401619,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "NEW"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "669972",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 8.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "318084",
      "name": "TASTY BITE PIZZA",
      "uuid": "b41c2569-3dfe-4fe6-81b8-96d66c514a99",
      "city": "11",
      "area": "Guru Teg Bahadur Nagar",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "bdxma2dhdvepwlx9ayzx",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 8.100000381469727,
      "slugs": {
        "restaurant": "tasty-bite-pizza-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "HOUSE  NO.1256,KHANPUR,KHARAR,AJITGARH,MOHALI ,PUNJAB-140301",
      "locality": "Greater Mohali",
      "parentId": 14765,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "318084",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 8.100000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "372918",
      "name": "CHAISHQ CAFE",
      "uuid": "b757e323-d8f8-422f-b17b-1f14d00f8178",
      "city": "11",
      "area": "Garden Colony",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "ck2sfsmc1pzdh6fzdghg",
      "cuisines": [
        "Beverages",
        "Chinese",
        "Pastas"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 8.100000381469727,
      "slugs": {
        "restaurant": "chaish-tea-bar-&-cafe-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "Chaish Tea Bar & Cafe, Civil Hospital Road, Garden Colony, Kharar, Punjab, India",
      "locality": "Greater Mohali",
      "parentId": 57289,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "372918",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 8.100000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "673108",
      "name": "Restro Cafe Florida",
      "uuid": "cf6e1209-89ea-4542-ab07-94080ecc4307",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "c6c6d272286886736a81585161342f45",
      "cuisines": [
        "Cafe",
        "North Indian",
        "Fast Food",
        "Beverages",
        "Snacks",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 8.100000381469727,
      "slugs": {
        "restaurant": "restro-cafe-florida-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "Showroom No 25-26 , Modern Citi Centre NH5 , Chandigarh-Ludhiana Road , Khanpur Kharar, Sahibzada Ajit Singh Nagar, Punjab 140301, India",
      "locality": "Chandigarh-Ludhiana Road",
      "parentId": 403004,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "NEW"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "673108",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 8.100000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "192106",
      "name": "Italians Pizzeria",
      "uuid": "d6355ac7-e4cf-4114-83e3-eafc66e1b187",
      "city": "11",
      "area": "Khanpur",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "ix53cdwsqhtoacfucwul",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 42,
      "minDeliveryTime": 42,
      "maxDeliveryTime": 42,
      "slaString": "42 MINS",
      "lastMileTravel": 8.100000381469727,
      "slugs": {
        "restaurant": "italians-pizzeria-south-mohali-south-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "Khanpur Village, Kharar road.",
      "locality": "Kharar",
      "parentId": 107623,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "192106",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "lastMileTravel": 8.100000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.0",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "406004",
      "name": "RDX FAST FOOD",
      "uuid": "2fabf3b0-7a86-4a22-b3f5-df619b9d095e",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "vv8ylpfr3dlkfu8qcfou",
      "cuisines": [
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 8.600000381469727,
      "slugs": {
        "restaurant": "rdx-fast-food-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "Khanpur Phirni, Kharar, Punjab 140301, India",
      "locality": "Khanpur Phirni",
      "parentId": 253568,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "406004",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 8.600000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "389296",
      "name": "Muskurata Dhaba",
      "uuid": "40447cd0-89ee-49fa-961f-7e20213fc3f2",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "m2yhwoe9rnmnmudn0crm",
      "cuisines": [
        "North Indian",
        "Thalis"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 8.5,
      "slugs": {
        "restaurant": "muskurata-dhaba-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "Shop in house 366, sector 14, Civil Hospital Road, Kharar Road, Mohali",
      "locality": "Kharar Road",
      "parentId": 251240,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "389296",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 8.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "524378",
      "name": "Maharajas Baithak",
      "uuid": "80ea7b5d-7780-482a-aa82-278ccda4c593",
      "city": "11",
      "area": "Opp.Henderson",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "gybzjlqnbnyep7b7m38t",
      "cuisines": [
        "Indian",
        "North Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 8.5,
      "slugs": {
        "restaurant": "maharaja’s-baithak-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": ", Opp.Henderson Jubilee Sen. Sec. School, Hospital Road, Kharar, ., Sector 14, Guru Teg Bahadur Nagar, Kharar, Punjab 140301, India",
      "locality": "Greater Mohali",
      "parentId": 312721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "524378",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 8.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.4",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "589364",
      "name": "Muskan Dhaba",
      "uuid": "7af881f4-92cf-425a-967f-c046e78c9b32",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "mcxiinwac9kqris069yl",
      "cuisines": [
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 8.5,
      "slugs": {
        "restaurant": "muskan-dhaba-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "CIVIL HOSPITAL ROAD ,NEAR MASZID ,KHARAR,AJITGARHMohali, Punjab-140301",
      "locality": "Near Maszid",
      "parentId": 352575,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "589364",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 8.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "617732",
      "name": "Madrasi Dosa",
      "uuid": "34c3e808-0c97-4056-95ec-90fb682bbcb6",
      "city": "11",
      "area": "Greater Mohali",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "y5ry1f6izl3949vszeuy",
      "cuisines": [
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 19900,
      "costForTwoString": "₹199 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 8.600000381469727,
      "slugs": {
        "restaurant": "madrasi-dosa-greater-mohali-greater-mohali",
        "city": "chandigarh"
      },
      "cityState": "11",
      "address": "Shop No. 5, Near Kharar Bus Stand, Civil Hospital Road ,Police Station Kharar,SAS Nagar Mohali-3(Teshil Kharar, Nayagaon Municipal, Council, Except Sub Tehsil Majri),Mohali,Punjab-140301",
      "locality": "Kharar",
      "parentId": 4884,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹90 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "617732",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 8.600000381469727,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  }
];

//probs-parameter used in a function
// or some cool developer used {restaurant} instead of probs and we no need to write probs anywhere
const RestrurantCard = ({name,cuisines, cloudinaryImageId, lastMileTravelString}) => { 
  // const {name,cuisines, cloudinaryImageId, lastMileTravelString}=restaurant.data;
  return (
    <div className="card">
      <img alt="card" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {/* spread operator
      <RestrurantCard {...restrauList[0].data} />
      <RestrurantCard {...restrauList[1].data} />
      <RestrurantCard {...restrauList[2].data} />
      <RestrurantCard {...restrauList[3].data}/>
      <RestrurantCard {...restrauList[4].data}/>
      <RestrurantCard {...restrauList[5].data}/>
      <RestrurantCard {...restrauList[6].data}/>
      <RestrurantCard {...restrauList[7].data}/> */}

      {
        restrauList.map(restaurant =>{
          return <RestrurantCard {...restaurant.data}/>
        })
      }
 
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
