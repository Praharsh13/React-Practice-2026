export const users = [
    { name: "Amit Sharma", age: 28, city: "London", carModel: "BMW 3 Series" },
    { name: "Sarah Johnson", age: 34, city: "Manchester", carModel: "Audi A4" },
    { name: "Rahul Verma", age: 25, city: "Birmingham", carModel: "Toyota Corolla" },
    { name: "Emily Brown", age: 31, city: "Leeds", carModel: "Tesla Model 3" },
    { name: "Daniel Wilson", age: 40, city: "Liverpool", carModel: "Mercedes C-Class" },
    { name: "Priya Patel", age: 27, city: "Leicester", carModel: "Hyundai i20" },
    { name: "James Taylor", age: 36, city: "London", carModel: "Ford Focus" },
    { name: "Ananya Singh", age: 29, city: "Nottingham", carModel: "Kia Sportage" },
    { name: "Michael Scott", age: 45, city: "Reading", carModel: "Volvo XC60" },
    { name: "Olivia Martin", age: 26, city: "Oxford", carModel: "Mini Cooper" },
    { name: "Karan Malhotra", age: 33, city: "Coventry", carModel: "Skoda Octavia" },
    { name: "Laura White", age: 38, city: "Bristol", carModel: "Volkswagen Golf" },
    { name: "Arjun Mehta", age: 24, city: "Derby", carModel: "Suzuki Swift" },
    { name: "Hannah Clarke", age: 35, city: "York", carModel: "Peugeot 3008" },
    { name: "Rohit Kumar", age: 41, city: "Sheffield", carModel: "Honda Civic" },
    { name: "Sophie Turner", age: 28, city: "Bath", carModel: "Fiat 500" },
    { name: "Nikhil Jain", age: 30, city: "Milton Keynes", carModel: "MG ZS EV" },
    { name: "Isla Thompson", age: 22, city: "Cambridge", carModel: "Toyota Yaris" },
    { name: "Vikram Rao", age: 37, city: "Wolverhampton", carModel: "Nissan Qashqai" },
    { name: "Ben Walker", age: 42, city: "Peterborough", carModel: "Mazda CX-5" }
  ];


  export const selectedCity=[...new Set(users.map
    (user=>(user.city)))]