// Define product data (in a real app, this could come from an API or a database)
const products = {
    1: {
        name: "Jordan Air 3",
        brand: "Nike",
        price: 99.99,
        description: "Unseen since 2018, Tinker Hatfield’s Air Jordan 3 Retro OG ‘Black Cement’ is one of four original colourways from the credited lineage. This rendition is the spit image of the original 1988 silhouette, and is constructed from a padded, tumbled leather upper that houses a perforated vamp as well as elephant print overlay embellishments. Encapsulated Nike Air Units visibly signal innovative cushioning from the midsole, while gritty rubber outsoles offer up gameday conditioned grip from the base. Cementing the comeback, ‘Fire Red’ Jumpman embroidery etches across the tongue; a nod to MJ’s time spent with the Chicago Bulls. | DN3707-010.",
        images: ["img/Sneaker1/Sneaker1.1.webp", "img/Sneaker1/Sneaker1.2.webp", "img/Sneaker1/Sneaker1.3.webp","img/Sneaker1/Sneaker1.4.webp" ],
        soldOut: false  // This product is in stock
    },
    2: {
        name: "Jordan Air 1 low",
        brand: "Nike",
        price: 130.00,
        description: "Nike's Air Jordan 1 'Game Royal' is a like-for-like colour block with the OG model from the '80s. The upper is constructed from a crisp white leather underlay and 'Blue Royal' panelling. Underfoot, a Nike Air-infused midsole offers up pillowy bounce and sits atop a hoops pivot circled rubber outsole, while embossed Wings etch off across the heel caps to call it a day. | CZ0790-140.",
        images: ["img/Sneaker2/Sneaker2.1.webp", "img/Sneaker2/Sneaker2.2.webp", "img/Sneaker2/Sneaker2.3.webp", "img/Sneaker2/Sneaker2.4.webp"],
        soldOut: false  // This product is in stock
    },
    3: {
        name: "Adidas Originals Handball Spezial Women's",
        brand: "Adidas",
        price: 79.99,
        description: "First released in 1979, the Handball Spezial was one of the best lightweight shoes of its time for indoor sport. This iteration is presented in a navy colourway, dressing the silhouette's supple suede uppers. Sky blue leather constructs the signature three-stripe branding on the sidewall, while a gum rubber cupsole sits underneath for premium cushioning. Finishing the model, woven Spezial branding decorates the thinly padded tongue, completed with a set of rounded laces | BD7633.",
        images: ["img/Sneaker3/Sneaker3.1.webp", "img/Sneaker3/Sneaker3.2.webp", "img/Sneaker3/Sneaker3.3.webp", "img/Sneaker3/Sneaker3.4.webp"],
        soldOut: false  // This product is in stock
    },
    4: {
        name: "Nike Air Force 1 low",
        brand: "Nike",
        price: 99.99,
        description: "Reminiscent of Bruce Kilgore's original 1982 'Presidential' design, this iteration of the Air Force 1 Low arrives in a colour code accepted by uniform regulations of eras gone by. White leather uppers set the scene for contrasting accents in 'Light Smoke Grey' on the sidewall Swooshing and heel tabs. The Air cushioned midsole opts for a 'Colorless' finished, while the grippy rubber outsole mirrors the grey seen above. The design is signed off by metal lace dubraes and Nike Air branding on the tongue. | FJ4146-100.",
        images: ["img/Sneaker4/Sneaker4.1.webp", "img/Sneaker4/Sneaker4.2.webp", "img/Sneaker4/Sneaker4.3.webp", "img/Sneaker4/Sneaker4.4.webp"],
        soldOut: false  // This product is in stock
    },
    5: {
        name: "Nike Air Max TL 2.5",
        brand: "Nike",
        price: 89.99,
        description: "As promised, Nike revive the Air Max TL 2.5 out from its archive. This 'Metallic Silver' iteration returns for the modern day pundit in a mesh upper that's layered with wavy synthetic panelling. Underfoot, full-length Air cushioning provides optimal comfort where it matters most, while reflective accents add the finishing touches. | FZ4110-002.",
        images: ["img/Sneaker5/Sneaker5.1.webp", "img/Sneaker5/Sneaker5.2.webp", "img/Sneaker5/Sneaker5.3.webp", "img/Sneaker5/Sneaker5.4.webp"],
        soldOut: true  // This product is sold out 
    },
    6: {
        name: "New Balance 740 - size? exclusive Women's",
        brand: "New Balance",
        price: 120.99,
        description: "The New Balance 740 – size? exclusive combines retro sensibilities with a touch of the Boston brand’s unmistakeable heritage. Knit mesh uppers are robed in angular metallic overlays, while segmented midsoles with AZBORB cushioning offer up city-friendly conditioning and compression resistance. This one’s your new everyday beater. | U740PB2.",
        images: ["img/Sneaker6/Sneaker6.1.webp", "img/Sneaker6/Sneaker6.2.webp", "img/Sneaker6/Sneaker6.3.webp", "img/Sneaker6/Sneaker6.4.webp"],
        soldOut: false  // This product is in stock
    },
    7: {
        name: "Adidas Originals x Korn Superstar",
        brand: "Adidas",
        price: 130.99,
        description: "The brand with the 3-Stripes inject '90s charm and aesthetics reminiscent of nu-metal band Korn's eponymous debut album onto its beloved adidas Originals Superstar. Nice and nostalgic, this rendition sees a full-grain leather upper with co-branded 3-Stripes and custom heel panelling. It wouldn't be official without the rubberised toe cap signalling heritage style at the front, while cushioned collars retain the lineage's trademark comfortable genetics round the back. Underfoot, gum outsoles ensure gluey traction, while graffiti-esque typography adorns the lateral walls to close shop. | IH1313.",
        images: ["img/Sneaker7/Sneaker7.1.webp", "img/Sneaker7/Sneaker7.2.webp", "img/Sneaker7/Sneaker7.3.webp", "img/Sneaker7/Sneaker7.4.webp"],
        soldOut: false  // This product is in stock
    },
    8: {
        name: "Nike Air Force 1 '07 'fresh",
        brand: "Nike '",
        price: 125.99,
        description: "Arriving in a white guise, the Nike Air Force 1 '07 'Fresh' updates the classic silhouette with a soft leather construction, which makes it less prone to creasing. Not only that, it's also easier to keep your newest pair in prime condition thanks to debossed branding which takes the place of the usual tongue labels. Keeping it monochromatic with a crisp white hue from Swooshes to the laces, the pair comes with perforations in both the sock-liner and toe for breeziness, while a well-cushioned Air midsole adds support via the midsole. Finishing off, grippy rubber signs off with sticky traction through the outsole. | DM0211-100.",
        images: ["img/Sneaker8/Sneaker8.1.webp", "img/Sneaker8/Sneaker8.2.webp", "img/Sneaker8/Sneaker8.3.webp", "img/Sneaker8/Sneaker8.4.webp"],
        soldOut: false  // This product is in stock
    },
    9: {
        name: "Nike Air Max Waffle",
        brand: "Nike",
        price: 111.99,
        description: "Following the bright 'Action Green' release, Nike's Air Max Waffle hybrid arrives in a 'Triple Black' matte paint-up with suede overlays. The silhouette rests atop a Tn-inspired midfoot shank and Air units combining elements from the Waffle Racer and Air Max Plus while the Waffle sole delivers glue-like grip. Branded touches add the final flourish. | FV6946-001.",
        images: ["img/Sneaker9/Sneaker9.1.webp", "img/Sneaker9/Sneaker9.2.webp", "img/Sneaker9/Sneaker9.3.webp", "img/Sneaker9/Sneaker9.4.webp"],
        soldOut: false  // This product is sold out
    },
    10: {
        name: "Nike Air Max SNDR Women's",
        brand: "Nike",
        price: 100.99,
        description: "First hitting the scene in 1999, the futuristic Air Max SNDR was an innovation that leapt ahead of the curve. Now, it returns with a 'Burgundy Crush' and Baltic Blue' gradient applied to the outer zip-up shroud - when unzipped '6452' is revealed, aka the last digits of Nike's office numbers across the globe, which spells 'N-I-K-E' on a keypad. Below, Air Max cushioning in the heel and Nike Air in the forefoot for pure comfort with every stride, while 'Burgundy Crush' reflective panels illuminate the mudguard. | HQ4189-600.",
        images: ["img/Sneaker10/Sneaker10.1.webp", "img/Sneaker10/Sneaker10.2.webp", "img/Sneaker10/Sneaker10.3.webp", "img/Sneaker10/Sneaker10.4.webp"],
        soldOut: false  // This product is in stock
    },
    11: {
        name: "Jordan Air 4 Net Women's",
        brand: "Nike",
        price: 120.99,
        description: "Air Jordan’s 4 Net ‘Triple White’ iteration is a frosty addition to the grail basketball lineage. The upper is crafted from supple, premium leather, while a reconstructed vamp offers up a well-ventilated, ambitious look. Underfoot, visible Nike Air Units are encapsulated within the midsole, while star-studded herringbone rubber outsoles intended for the hardwoods keep it grippy from the base, and detachable charms add the final details; a luxurious touch. | FN7251-107.",
        images: ["img/Sneaker11/Sneaker11.1.webp", "img/Sneaker11/Sneaker11.2.webp", "img/Sneaker11/Sneaker11.3.webp", "img/Sneaker11/Sneaker11.4.webp"],
        soldOut: false  // This product is in stock
    },
    12: {
        name: "Jordan Air 1 Low",
        brand: "Nike",
        price: 89.99,
        description: "Nike's Air Jordan 1 'Game Royal' is a like-for-like colour block with the OG model from the '80s. The upper is constructed from a crisp white leather underlay and 'Blue Royal' panelling. Underfoot, a Nike Air-infused midsole offers up pillowy bounce and sits atop a hoops pivot circled rubber outsole, while embossed Wings etch off across the heel caps to call it a day. | CZ0790-140.",
        images: ["img/Sneaker12/Sneaker12.1.webp", "img/Sneaker12/Sneaker12.2.webp", "img/Sneaker12/Sneaker12.3.webp", "img/Sneaker12/Sneaker12.4.webp"],
        soldOut: false  // This product is sold out
    },
    13: {
        name: "Jordan Air 3",
        brand: "Nike",
        price: 129.99,
        description: "Unseen since 2018, Tinker Hatfield’s Air Jordan 3 Retro OG ‘Black Cement’ is one of four original colourways from the credited lineage. This rendition is the spit image of the original 1988 silhouette, and is constructed from a padded, tumbled leather upper that houses a perforated vamp as well as elephant print overlay embellishments. Encapsulated Nike Air Units visibly signal innovative cushioning from the midsole, while gritty rubber outsoles offer up gameday conditioned grip from the base. Cementing the comeback, ‘Fire Red’ Jumpman embroidery etches across the tongue; a nod to MJ’s time spent with the Chicago Bulls. | DN3707-010.",
        images: ["img/Sneaker13/Sneaker13.1.webp", "img/Sneaker13/Sneaker13.2.webp", "img/Sneaker13/Sneaker13.3.webp", "img/Sneaker13/Sneaker13.4.webp"],
        soldOut: false  // This product is in stock
    },
    14: {
        name: "Jordan Air 9 OG",
        brand: "Nike",
        price: 125.99,
        description: "Originally launched in 1993, the Air Jordan 9 'Olive' - an original colourway - returns in 2024 for the fourth time, staying true to the blueprint. Premium black leather is bordered by buttery 'Light Olive' suede, leaning into a hiking boot aesthetic, while striking red detailing graces the tongue, heel and sole unit Jumpman branding. A jagged black rubber outsole anchors the design, while an embroidered olive-toned '23' on the heel signs it off. | HV4794-030.",
        images: ["img/Sneaker14/Sneaker14.1.webp", "img/Sneaker14/Sneaker14.2.webp", "img/Sneaker14/Sneaker14.3.webp", "img/Sneaker14/Sneaker14.4.webp"],
        soldOut: false  // This product is in stock
    },
    15: {
        name: "Jordan Air 13",
        brand: "Nike",
        price: 100.99,
        description: "The thirteenth signature shoe in the Air Jordan series sees a 'Midnight Navy' colourway. Dimpled white leather uppers offer up a textured feel, while neutral suede overlays add further materialisation to the famed basketball sneaker. The Jumpman logo finds itself embroidered on the tongue and cat-eye holograms sit at the back of each heel; inspired by its visionary Panther concept - the brainchild of legendary designer Tinker Hatfield. | 414571-140.",
        images: ["img/Sneaker15/Sneaker15.1.webp", "img/Sneaker15/Sneaker15.2.webp", "img/Sneaker15/Sneaker15.3.webp", "img/Sneaker15/Sneaker15.4.webp"],
        soldOut: false  // This product is in stock
    },
    16: {
        name: "Air Jordan 1 High OG Women's",
        brand: "Nike",
        price: 105.99,
        description: "Metallised for AW24, this Air Jordan 1 High OG receives the 'Satin Shadow' treatment. The uppers opt for a sheeny full-satin leather composition, while a crisp white Nike Air infused midsole offers up reactive bounce. Embroidered Wings signal the lineage's iconographic trademark from the ankle collars, and finishing up tacky 'Cement Grey' outsoles anchor the design. | FD4810-010.",
        images: ["img/Sneaker16/Sneaker16.1.webp", "img/Sneaker16/Sneaker16.2.webp", "img/Sneaker16/Sneaker16.3.webp","img/Sneaker16/Sneaker16.4.webp"],
        soldOut: false  // This product is in stock
    },
    17: {
        name: "Jordan Air 1 Low Paris Saint-Germain",
        brand: "Nike",
        price: 150.99,
        description: "Continuing its partnership with Paris Saint-Germain, this rendition of the Air Jordan 1 Low sees a 'Sail' leather upper with 'Off-Noir' satin overlays. The toe box opts for a gradient aesthetic, while underfoot Nike Air technology cushions the midsole. Signalling the collaborative occasion, custom tongue and insole branding feature, while a glossy key ring adds the finishing touch. | HF8828-100.",
        images: ["img/Sneaker17/Sneaker17.1.webp", "img/Sneaker17/Sneaker17.2.webp", "img/Sneaker17/Sneaker17.3.webp", "img/Sneaker17/Sneaker17.4.webp"],
        soldOut: false  // This product is in stock
    },
    18: {
        name: "Jordan Air 1 Low OG",
        brand: "Nike",
        price: 200.99,
        description: "Varsity-inspired, Air Jordan’s 1 Low OG ‘Howard University’ is the latest offering in the partnership between the college and the sportswear giant. The full-grain leather upper opts for both ‘Gym Red’ and ‘Midnight Navy’ panelling, while Swoosh embroidery adorns the toe cap. Underfoot, gluey rubber outsoles underpin Nike Air midsole cushioning; both of which work together to deliver a reactive underfoot feel. | HQ2993-100_.",
        images: ["img/Sneaker18/Sneaker18.1.webp", "img/Sneaker18/Sneaker18.2.webp", "img/Sneaker18/Sneaker18.3.webp", "img/Sneaker18/Sneaker18.4.webp"],
        soldOut: false  // This product is sold out
    },
    19: {
        name: "Air Jordan 1 Low OG",
        brand: "Nike",
        price: 140.99,
        description: "First seen back in 2001, Jordan released the CO.JP Air Jordan 1 Low 'Silver', which wasn't spotted again until 2020. Today, the icon returns and stays true to the original blueprint with premium leather uppers of grey and 'Metallic Silver' hues. A jewel Wings logo sits at the heels, while underfoot, a white and grey sole unit draws a line under the design. | CZ0790-002_",
        images: ["img/Sneaker19/Sneaker19.1.webp", "img/Sneaker19/Sneaker19.2.webp", "img/Sneaker19/Sneaker19.3.webp", "img/Sneaker19/Sneaker19.4.webp"],
        soldOut: false  // This product is in stock
    },
    20: {
        name: "Jordan Air 3 Junior",
        brand: "Nike",
        price: 129.99,
        description: "On this release, 'Summit White' leather dominates the upper with exposed stitching. 'Cement Grey' elephant print overlays feature on the lacing chamber, toe box and heel, while perforated segments feature behind the eyestays and collars. 'Fire Red' Jumpman logos feature on the synthetic heel, insole and tongue, supplying the much-needed dose of MJ heritage. We can't leave out the sole unit either, as always, visible Air units cushion each stride. | DM0967-106_",
        images: ["img/Sneaker20/Sneaker20.1.webp", "img/Sneaker20/Sneaker20.2.webp", "img/Sneaker20/Sneaker20.3.webp", "img/Sneaker20/Sneaker20.4.webp"],
        soldOut: false  // This product is in stock
    },

    //featured shoes
    999: {
        name: "Air Jordan 1 Low x Travis Scott Reverse Olive",
        brand: "Nike",
        price: 229.99,
        description: "Flipping the script once again, Travis Scott returns to leave another lasting imprint on the AJ1 Low. Primed for the season, this balanced edition mixes premium leather with a warm, neutral palette. The Sail overlays wrap the Medium Olive upper for a smooth, earthy finish. Scott's signature backwards Swoosh logos are paired with stitched University Red details, creating another timeless icon.",
        images: ["img/ts1/air-jordan-1-low-x-travis-scott-reverse-olive-dm7866-200-release-date.jpg", "img/ts1/air-jordan-1-low-x-travis-scott-reverse-olive-dm7866-200-release-date-2.jpg", "img/ts1/air-jordan-1-low-x-travis-scott-reverse-olive-dm7866-200-release-date-3.jpg","img/ts1/air-jordan-1-low-x-travis-scott-reverse-olive-dm7866-200-release-date-4.jpg", "img/ts1/air-jordan-1-low-x-travis-scott-reverse-olive-dm7866-200-release-date-5.jpg","img/ts1/air-jordan-1-low-x-travis-scott-reverse-olive-dm7866-200-release-date-6.jpg"],
        soldOut: true  // This product is sold out
    },
    998: {
        name: "Air Jordan 1 Low Travis Scott x Fragment",
        brand: "Nike",
        price: 159.99,
        description: "It's the rare sneaker that satisfies the rule of three—sometimes, having three minds is greater than one. In the case of Jordan Brand, Travis Scott and Hiroshi Fujiwara's Fragment Design, it was a case of three masterminds coming together to collaborate on not just any Air Jordan, but the beloved Air Jordan 1—a model both the Houston rapper and the Japanese designer have tapped for past Jordan Brand link-ups.Their Air Jordan 1 Low colourway comes in familiar colour blocking schemes, but with special touches only Scott and Fujiwara could've conjured up. On top of an aged midsole with matching Sail laces, fresh Military Blue accents the heel, collar and insole, providing a new flavour for a classic make-up. And no need for double-takes at the Sail Swoosh—it's indeed backwards—now a signature Scott touch for his Air Jordan 1 designs.",
        images: ["img/ts2/air-jordan-1-low-travis-scott-x-fragment-1.jpg", "img/ts2/air-jordan-1-low-travis-scott-x-fragment-2.jpg", "img/ts2/air-jordan-1-low-travis-scott-x-fragment-4.jpg", "img/ts2/air-jordan-1-low-travis-scott-x-fragment-5.jpg","img/ts2/air-jordan-1-low-travis-scott-x-fragment-6.jpg"],
        soldOut: true  // This product is sold out
    },
    997: {
        name: "Air Force 1 Low X Louis Vuitton Monogram Brown Damier Azur",
        brand: "Nike",
        price: 170000,
        description: "Nike Air Force 1 Low Louis Vuitton Monogram Brown Damier Azur - Celebrating its 40th year, the Nike Air Force 1 was designed in 1982 and is one of the most successful iconic shoes ever created. On the occasion of the Louis Vuitton Men's Spring-Summer 2022 fashion show, Virgil Abloh collaborated with Nike to design 47 pairs of bespoke Air Force 1s, blending classic sneaker codes with Louis Vuitton insignia and materials in homage to hip-hop culture that formed it.The sneakers were made with his markings used in Abloh's Louis Vuitton men's collections and were matched with creatives, which echo the written graphics that Abloh often used in his work. The individual models designed for the show were made by Louis Vuitton in its shoe factory in Fiesso d'Artico, Italy.The Nike Air Force 1 Low Louis Vuitton Monogram Brown Damier Azur are entirely made of leather.",
        images: ["img/lv1/Nike_Air_Force_1_Low_Louis_Vuitton_Monogram_Brown_Damier_Azur.jpeg", "img/lv1/Nike_Air_Force_1_Low_Louis_Vuitton_Monogram_Brown_Damier_Azur-1.jpeg", "img/lv1/Nike_Air_Force_1_Low_Louis_Vuitton_Monogram_Brown_Damier_Azur-3.jpeg","img/lv1/Nike_Air_Force_1_Low_Louis_Vuitton_Monogram_Brown_Damier_Azur-4.jpeg","img/lv1/Nike_Air_Force_1_Low_Louis_Vuitton_Monogram_Brown_Damier_Azur-5.jpeg"],
        soldOut: true  // This product is sold out
    },

};

// Function to get product ID from the URL query parameter
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product-id');
}

// Get the product ID from the URL
const productId = getProductIdFromURL();
if (!productId || !products[productId]) {
    alert("Product not found");
    window.location.href = "shop.html"; // Redirect to Shop page if product is not found
} else {
    // Populate the page with the product details
    const product = products[productId];

    // Set product details
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productBrand').textContent = `Brand: ${product.brand}`;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productDescription').textContent = product.description;

    // Set product images in the carousel
    const carouselItems = document.getElementById('carouselItems');
    product.images.forEach((image, index) => {
        const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
        carouselItems.innerHTML += `
            <div class="${itemClass}">
                <img src="${image}" class="d-block w-100" alt="${product.name}">
            </div>
        `;
    });

 // Handle "Add to Cart" button and "Sold Out" logic
 const addToCartButton = document.getElementById('addToCartBtn');
 const soldOutButton = document.getElementById('soldOutBtn');
 
 if (product.soldOut) {
     // If the product is sold out, show the "Sold Out" button and disable "Add to Cart"
     if (addToCartButton) addToCartButton.disabled = true;
     if (addToCartButton) addToCartButton.style.display = 'none'; // Hide "Add to Cart" button
     if (soldOutButton) soldOutButton.style.display = 'block'; // Show "Sold Out" button
 } else {
     // If the product is available, enable "Add to Cart" and hide "Sold Out" button
     if (addToCartButton) addToCartButton.disabled = false;
     if (soldOutButton) soldOutButton.style.display = 'none'; // Hide "Sold Out" button
 }

 // Handle "Add to Cart" button click
 if (addToCartButton) {
     addToCartButton.addEventListener('click', function () {
         let cart = JSON.parse(localStorage.getItem('cart')) || [];
         cart.push({ product: product.name, price: product.price });
         localStorage.setItem('cart', JSON.stringify(cart));
         alert(`${product.name} added to cart!`);
     });
 }
}
