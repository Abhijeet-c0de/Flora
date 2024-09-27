import p1_img from "./orange.jpg";
import p2_img from "./snake.jpg";
import p3_img from "./spider.jpg";
import p4_img from "./aloevera.jpg";
import p5_img from "./lily.jpg";
import p6_img from "./jade.jpg";
import p7_img from "./tomato.jpg";
import p8_img from "./rubber.jpg";
import p9_img from "./bunny ear.jpg";
import p10_img from "./cast iron.jpg";
import p11_img from "./Boston.jpg";
import p12_img from "./croton.jpg";
import p13_img from "./chinese.jpg";
import p14_img from "./string of hearts.jpg";
import p15_img from "./nerve.jpg";

let all_product = [
  {
    id: 1,
    name:"Orange",
    Scientific_name:"-",
    plant_desc:"Orange, any of several species of small trees or shrubs of the genus Citrus of the family Rutaceae and their nearly round fruits, which have leathery and oily rinds and edible, juicy inner flesh.Oranges thrive best where the trees are chilled somewhat by occasional light frosts in winter. The trees are semidormant at that season, and temperatures just below freezing will not harm trees or fruit unless frost occurs early.",
    image: p1_img,
    soil_moisture:"50-70%",
    soil_temperature: "70-85°F (21-29°C)",
    light_intensity:"6-8 hours",
  },
  {
    id: 2,
    name:"Snake Plant",
    Scientific_name:"Dracaena trifasciata",
    plant_desc:"Dracaena trifasciata is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp, among other names.It is a species of flowering plant in the family Asparagaceae.Snake plants filters indoor air, remove toxic pollutants, may help boost mental health and easy to care for.",
    image: p2_img,
    soil_moisture:"The soil should be allowed to dry out betweeen waterings.",
    soil_temperature:"60-85°F (16-29°C)",
    light_intensity:"Tolerates low light but prefers bright, indirect light.",
  },
  {
    id: 3,
    name:"Spider Plant",
    Scientific_name:"Chlorophytum comosum",
    plant_desc:"Chlorophytum comosum, usually called spider plant or common spider plant due to its spider-like look, also known as spider ivy, airplane plant, ribbon plant is a species of evergreen perennial flowering plant of the family Asparagaceae.It is especially popular with beginners, being easy to grow and propagate, tolerant of neglect, and able to thrive in nearly any type of condition.",
    image: p3_img,
    soil_moisture:"Soil should be kept moist but not waterlogged.",
    soil_temperature:"65-75°F (18-24°C)",
    light_intensity:"Prefers bright, indirect light but can also thrive in low light conditions.",
  },
  {
    id: 4,
    name: "Aloe Vera",
    Scientific_name:"Aloe Vera",
    plant_desc:"Aloe Vera is a succulent plant species of the genus Aloe belonging from the family Asphodelaceae.An evergreen perennial, it originates from the Arabian Peninsula, but also grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for commercial products, mainly as a topical treatment used over centuries.",
    image: p4_img,
    soil_moisture:"Soli should be dried out completely between waterings, also avoiding overwatering.",
    soil_temperature:"55-80°F (13-27°C)",
    light_intensity:"6 hours of sunlight per day.",
  },
  {
    id: 5,
    name: "Peace Lily",
    Scientific_name: "Spathiphyllum wallisii",
    plant_desc:"Species of Spathiphyllum are commonly known as spath or peace lilies.Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae.The plant does not need large amounts of light or water to survive. They are most often grown as houseplants, however they are able to withstand the elements well enough to thrive when planted outdoors in situations that are hot and humid.",
    image: p5_img,
    soil_moisture:"The soil should be kept consistently moist but not waterlogged and also the top inch of the soil should be allowed to dry slightly between waterings.",
    soil_temperature: "65-80°F (18-27°C)",
    light_intensity:"Prefers low to medium indirect light, direct sunlight can be a harm for the plant.",
  },
  {
    id: 6,
    name: "Jade Plant",
    Scientific_name:"Crassula ovata",
    plant_desc:"Crassula ovata, commonly known as jade plant, lucky plant, money plant or money tree, is a succulent plant with small pink or white flowers;it is common as a houseplant worldwide.Much of its popularity stems from the low levels of care needed; the jade plant requires little water and can survive in most indoor conditions.",
    image: p6_img,
    soil_moisture:"Th soil should be allowed to dry out completely between waterings also avoiding overwatering.",
    soil_temperature:"65-75°F (18-24°C)",
    light_intensity:"4-6 hours of indirect sunlight per day.",
  },
  {
    id: 7,
    name: "Tomato",
    Scientific_name:"Solanum lycopersicum",
    plant_desc:"Tomato a flowering plant of the nightshade family (Solanaceae),cultivated extensively for its edible fruits.The plant requires relatively warm weather and much sunlight; it is grown chiefly in hothouses in cooler climates. Tomatoes are usually staked, tied, or caged to keep the stems and fruits off the ground, and consistent watering is necessary to avoid blossom-end rot and cracking of the fruits.",
    image: p7_img,
    soil_moisture:"Soil should be kept consistently moist but not waterlogged around 60-70% of field capacity.",
    soil_temperature:"70-85°F (21-29°C)",
    light_intensity:"6-8 hours of direct sunlight per day.",
  },
  {
    id: 8,
    name: "Rubber Plant",
    Scientific_name:"Ficus elastica",
    plant_desc:"Ficus elastica, the rubber fig, rubber bush, rubber tree, rubber plant, or Indian rubber bush, Indian rubber tree, is a species of flowering plant in the family Moraceae.Ficus elastica is grown around the world as an ornamental plant, outside in frost-free climates from the tropical to the Mediterranean and inside in colder climates as a houseplant.In cultivation, it prefers bright sunlight but not hot temperatures. It has a high tolerance for drought, but prefers humidity and thrives in wet, tropical conditions.",
    image: p8_img,
    soil_moisture:"The soil should be kept consistently moist but not overlogged.Soil moisture levels should ideally be around 40-60% dor healthy growth.",
    soil_temperature:"65°F to 75°F(18°C-24°C)",
    light_intensity:"Thrives in bright indirect light, also can tolerate some morning direct sunlight.",
  },
  {
    id: 9,
    name: "Bunny ears Cactus",
    Scientific_name:" ",
    plant_desc:"Opuntia microdasys also known as angel's-wings, bunny ears cactus, bunny cactus or polka-dot cactus is a species of flowering plant in the cactus family Cactaceae.It needs full sun in the summer months and should be grown in a pot with cactus potting soil to prevent root rot.This plant is not frost tolerant and must be brought indoors in cooler climate areas.",
    image: p9_img,
    soil_moisture:"Bunny ear cactus prefers well-draining soil and should be kept relatively dry. Water should be infrequent.Soil moisuter level should be low, ideally between 10-30%.",
    soil_temperature:"70°F-100°F(21°C-38°C)",
    light_intensity:"Bunny ear Cactus requires direct, bright sunlight for atleast 6-8 hours per day.",
  },
  {
    id: 10,
    name: "Cast Iron Plant",
    Scientific_name:"Aspidistra elatior",
    plant_desc:"Aspidistra elatior, the cast-iron-plant[3] or bar-room plant is a species of flowering plant in the family Asparagaceae.It's a great plant for low light conditions, tolerates a range of indoor temperatures, and puts up with irregular watering.",
    image: p10_img,
    soil_moisture:"The cast iron plant prefers soil that is frequently moist but not waterlogged. When the top inch of the soil feels dry the plants should be watered.",
    soil_temperature:"60°F-75°F(16°C-24°C)",
    light_intensity:"The Cast Iron Plant thrives in low to moderate indirect light.",
  },
  {
    id: 11,
    name: "Boston Fern",
    Scientific_name:"Nephrolepis exaltata",
    plant_desc:"Nephrolepis exaltata, known as the sword fern or Boston fern, is a species of fern in the family Nephrolepidaceae.it is considered a classic houseplant grown indoors and is easy to care for, as it doesn’t require a lot of sunlight and can live on for years. It also purifies the air and increases humidity in a room.",
    image: p11_img,
    soil_moisture:"Boston ferns prefer slightly damp soil, the soil should also not be soggy.",
    soil_temperature:" 60°F-75°F(15°C-24°C)",
    light_intensity:"Boston ferns do well in filtered lights.Direct sunlight can be harmful.",
  },
  {
    id: 12,
    name: "Croton",
    Scientific_name:"Croton",
    plant_desc:"Croton is an extensive plant genus in the spurge family, Euphorbiaceae.The croton is a striking, easy-to-grow houseplant known for its variegated foliage of green, scarlet, orange, and yellow splotches.They thrive in bright, indirect sunlight, mimicking the dappled light filtering through a rainforest canopy.",
    image: p12_img,
    soil_moisture:"The soil should be kept evenly moist with the top inch of the soil drying out slightly between waterings.",
    soil_temperature:"70°F-5°F(21°C-29°C).",
    light_intensity:"Croton needs bright, indirect sunlight to maintain their vibrant colors.",
  },
  {
    id: 13,
    name: "Chinese Evergreen",
    Scientific_name:"Aglaonema",
    plant_desc:"Aglaonema is a genus of flowering plants in the arum family, Araceae. It grows on jungle floors in warm, moist and  dappled-to-shade conditions.This makes it a great houseplant for low-light areas.",
    image: p13_img,
    soil_moisture:"Chinese Evergreens prefer consistently moist soil, but it should not be waterlogged. ",
    soil_temperature:"70°F-85°F(21°C-29°C).",
    light_intensity:"Chinese Evergreens thrive in low to moderate indirect light. They can tolerate low light conditions, making them excellent for indoor settings with limited natural light. ",
  },
  {
    id: 14,
    name: "String of hearts",
    Scientific_name:"Ceropegia",
    plant_desc:"Ceropegia is a genus of plants within the family Apocynaceae.String of hearts plant (Ceropegia woodii) is a unique and attractive houseplant with evergreen, succulent, trailing vines that look good in hanging baskets or pots on shelves or window sills.The plant care is easy, especially during the warmer months. It is long-lived and fast-growing, and the sprawling vines can cascade up to 12 feet once they are mature.",
    image: p14_img,
    soil_moisture:"Keep the soil slightly dry between waterings. The plant prefers well-draining soil that dries out a bit between waterings.",
    soil_temperature:" 60-85°F(15-29°C)",
    light_intensity:" String of Hearts prefers bright, indirect light.",
  },
  {
    id: 15,
    name: "Nerve Plant",
    Scientific_name:"Fittonia albivenis",
    plant_desc:"Fittonia albivenis is a species of flowering plant in the family Acanthaceae.It requires very high, constant humidity, such as is found in a terrarium, and cannot tolerate stagnant conditions.",
    image: p15_img,
    soil_moisture:"Nerve plants prefer consistently moist soil but not soggy.",
    soil_temperature:"65°F-75°F(18°C-24°C).",
    light_intensity:"Nerve plants prefer bright, indirect light. They do well in filtered light or a shaded spot that gets indirect sunlight.",
  },
];

export default all_product;
