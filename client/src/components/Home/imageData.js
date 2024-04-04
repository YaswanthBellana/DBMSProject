const Images = {
    "Taj Mahal" : "https://www.gettyimages.in/detail/photo/gardens-of-the-tajmahal-agra-india-royalty-free-image/519770038", 
    "Jaipur City Palace" :"https://www.gettyimages.in/detail/photo/hawa-mahal-or-palace-of-the-winds-in-jaipur-royaltyfree-image/1175751104", 
    "Goa Beaches" : "https://www.gettyimages.in/detail/photo/palolembeach-royalty-free-image/148896338", 
    "Mysore Palace" : "https://www.gettyimages.in/detail/photo/mysore-palace-at-dusk-royalty-free-image/172124032",
    "Kerala Backwaters" : "https://www.gettyimages.in/detail/photo/houseboat-backwatersalappuzha-kerala-india-royalty-free-image/684136950",
    "Darjeeling" : "https://www.gettyimages.in/detail/photo/high-angle-view-of-trees-and-buildings-against-skyroyalty-free-image/1325260831", 
    "Varanasi Ghats" : "https://www.gettyimages.in/detail/photo/holy-town-varanasi-and-the-river-ganges-royalty-freeimage/827065008", 
    "Rann of Kutch" : "https://shorturl.at/pwxPX", 
    "Hampi" : "https://www.gettyimages.in/detail/photo/stone-chariot-and-gopuram-royalty-freeimage/695445398", 
    "Khajuraho Temples" : "https://www.gettyimages.in/detail/photo/indiamadhya-pradesh-state-khajuraho-temple-royalty-free-image/1223353674", 
    "Sundarbans" : "https://www.gettyimages.in/detail/photo/sundarban-the-largest-mangrove-forest-in-the-worldroyalty-free-image/1226819443", 
    "Victoria Memorial" : "https://www.gettyimages.in/detail/photo/victoria-memorial-chowringhee-kolkata-west-bengalroyalty-free-image/91995999", 
    "Howrah Bridge" : "https://www.gettyimages.in/detail/photo/howrah-bridge-in-kolkata-royalty-freeimage/536118936", 
    "Bishnupur Temples" : "https://www.gettyimages.in/detail/photo/terracottatemple-bishnupur-royalty-free-image/151660134", 
    "Dakshineswar Kali Temple" : "https://www.tripadvisor.in/Attraction_Review-g304558-d3952876-ReviewsDakshineswar_Kali_Temple-Kolkata_Calcutta_Kolkata_District_West_Bengal.html"
    "Moti Masjid" : "https://www.gettyimages.in/detail/photo/agra-fort-moti-masjid-pearl-mosque-royalty-free-image/522009566",
    "Fatehpur Sikri" : "https://www.gettyimages.in/detail/photo/fatehpur-sikri-in-india-royalty-free-image/577575641",
    "Mehtab Garden" : "https://agratourism.in/images//tourist-places/mehtab-bagh-agra/mehtab-bagh-agra-tourism-holidays-closed-on-timings.jpg",
    "Jantar Mantar" : "https://delhitourism.gov.in/delhitourism/images/jantarmantar_banner.jpg",
    "Sheesh Mahal" : "https://jaipurtourism.co.in/images/places-to-visit/header/sheesh-mahal-jaipur-entry-fee-timings-holidays-reviews-header.jpg",
    "Elephantastic" : "https://elefantastic.in/wp-content/uploads/2022/05/Sanctuary-14-400x284",
    "Fort Aguda" : "https://goa-tourism.org.in/images/places-to-visit/headers/fort-aguada-goa-entry-fee-timings-holidays-reviews-header.jpg",
    "Basilica of Bom Jesus" : "https://www.goa.gov.in/wp-content/uploads/2016/11/basilica-image.jpg",
    "Cabo De Rama Fort" : "https://goa-tourism.org.in/images//tourist-places/cabo-de-rama-fort-goa/cabo-de-rama-fort-goa-india-tourism-history.jpg",
    "Somnathpur Temple" : "https://karnataka.b-cdn.net/wp-content/uploads/2011/07/Keshava-Temple-Somanathapura.jpg",
    "Sri Chamundeswari Temple" : "https://chamundeshwaritemple.in/images/banner.jpg",
    "Mysore Sand Sculpural Museum" : "https://www.trawell.in/admin/images/upload/211116122sand-museum.jpg",
    "Padmanabhaswamy Temple" : "https://spst.in/wp-content/uploads/2023/05/spst-image-1.jpg",
    "Kovalam Beach" : "https://www.keralatourism.org/images/destination/large/kovalam20131031105847_236_1.jpg",
    "Priyadarshini Planetorium" : "https://www.keralatourism.org/images/enchanting_kerala/large/priyadarshini_planetarium_thiruvananthapuram20220207095542_1159_1.jpg",
    "Kanchenjunga Mountain" : "https://cimages1.touristlink.com/data/cache/T/H/E/M/A/J/E/S/the-majestic-kanchenjunga-range_640_480.j",
    "Lamahatta" : "https://imgmedia.lbb.in/media/2021/02/602ba30f7471b14a06ac6dc9_1613472527496.jpeg",
    "Japanese Peace Pagoda" : "https://cdn.s3waas.gov.in/s322fb0cee7e1f3bde58293de743871417/uploads/bfi_thumb/2020091554-ovhnqrd60waf029brz0i41729pvektwppzhvrsmgsq.jpg",
    "Barbotey Rock Garden" : "https://cdn.s3waas.gov.in/s322fb0cee7e1f3bde58293de743871417/uploads/bfi_thumb/2020092191-ovsgr5y42x9ia62uvyc1qkj8a5xxd3fc5cskx65ife.jpg",
    "Dasawmedh Ghat" : "https://varanasi.tourismindia.co.in/images/places-to-visit/headers/dashashwamedh-ghat-varanasi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "Manikarnika Ghat" : "https://kashibanaras.com/wp-content/uploads/2021/10/Manikarnika.jpg",
    "Kashi Viswanath Temple" : "https://shrikashivishwanath.org/frontend/images/about-temple.jpg",
    "Sarnath" : "https://cdn.s3waas.gov.in/s36da37dd3139aa4d9aa55b8d237ec5d4a/uploads/bfi_thumb/2018080846-olw9kk9px4amsm3fqcuxyycqey4y3f1yy7rwymdnka.gif",
    "Batuk Bhairav Temple" : "https://lh3.googleusercontent.com/p/AF1QipMqiSN4knN2wbogrIwsPg4SbvtCYNMlBt5BWBRR=s1360-w1360-h10",
    "Kala Dungar" : "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/kalo-dungar/Kalo-Dungar-Banner.jpg",
    "Little Rann of Kutch" : "https://en.wikipedia.org/wiki/Little_Rann_of_Kutch#/media/File:IndianWildAss1.jpg",
    "Topansar Lake" : "https://www.trodly.com/pictures/attraction/4795.jpg",
    "Virupaksha Temple" : "https://www.karnatakatourism.org/tour-item/virupaksha-temple-hampi",
    "Matanga Hill" : "https://hampi.in/matunga-hill",
    "Hazara Rama Temple" : "https://karnatakatourism.org/tour-item/hazara-rama-temple/",
    "Kandariya Mahadev Temple" : "https://www.gettyimages.in/detail/news-photo/architectural-details-of-a-temple-kandariya-mahadeva-temple-news-photo/481685709",
    "Tribal and Folk Art" : "https://en.wikipedia.org/wiki/Tribal_Museum_Bhopal#/media/File:Tribal_Museum_Bhopal_",
    "Panna Tiger Reserve" : "https://www.pannatigerreserve.in/",
    "Rushikonda Beach" : "https://www.tripadvisor.in/Attraction_Review-g297588-d2324384-Reviews-Rishikonda_Beach-Visakhapatnam_Visakhapatnam_District_Andhra_Pradesh.html",
    "Simhachalam Temple" : "https://aptourism.gov.in/destinations/6/simhachalam",
    "Vizag National Park" : "https://vizagzoo.in/",
    "Araku Burra Caves" : "https://www.tripadvisor.in/Attraction_Review-g297588-d1204479-Reviews-Borra_Caves-Visakhapatnam_Visakhapatnam_District_Andhra_Pradesh.html",
    "Ramakrishna Beach" : "https://www.tripadvisor.in/Attraction_Review-g297588-d1771431-Reviews-Rama_Krishna_Beach-Visakhapatnam_Visakhapatnam_District_Andhra_Pradesh.html",
    "Vizag Steel Plant" : "https://en.wikipedia.org/wiki/Visakhapatnam_Steel_Plant#/media/File:Vizag_Steel.jpg"
}

export default Images
