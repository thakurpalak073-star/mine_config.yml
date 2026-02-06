/**
 * Foodie - Food Delivery App Data
 * Contains all categories, restaurants, food items, and customer reviews
 */

// Food Categories
const categories = [
    { id: 1, name: 'Pizza', icon: '🍕' },
    { id: 2, name: 'Burger', icon: '🍔' },
    { id: 3, name: 'Biryani', icon: '🍛' },
    { id: 4, name: 'Desserts', icon: '🍰' },
    { id: 5, name: 'Drinks', icon: '🥤' },
    { id: 6, name: 'Chinese', icon: '🥡' },
    { id: 7, name: 'Salads', icon: '🥗' },
    { id: 8, name: 'Pasta', icon: '🍝' }
];

// Partner Restaurants
const restaurants = [
    {
        id: 1,
        name: 'Pizza Palace',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60',
        rating: 4.7,
        deliveryTime: '25-35 min',
        categories: ['Pizza', 'Pasta']
    },
    {
        id: 2,
        name: 'Burger Barn',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=60',
        rating: 4.5,
        deliveryTime: '20-30 min',
        categories: ['Burger']
    },
    {
        id: 3,
        name: 'Biryani House',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&w=800&q=60',
        rating: 4.8,
        deliveryTime: '35-45 min',
        categories: ['Biryani']
    },
    {
        id: 4,
        name: 'Sweet Delights',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=60',
        rating: 4.6,
        deliveryTime: '20-30 min',
        categories: ['Desserts']
    },
    {
        id: 5,
        name: 'Dragon Wok',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=60',
        rating: 4.4,
        deliveryTime: '30-40 min',
        categories: ['Chinese']
    }
];

// Available Food Items
const foodItems = [
    // Pizzas
    {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil',
        price: 299,
        category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80',
        isVeg: true,
        restaurantId: 1
    },
    {
        id: 2,
        name: 'Pepperoni Pizza',
        description: 'Loaded with pepperoni slices and melted cheese',
        price: 399,
        category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&q=80',
        isVeg: false,
        restaurantId: 1
    },
    {
        id: 3,
        name: 'BBQ Chicken Pizza',
        description: 'Smoky BBQ sauce with grilled chicken and onions',
        price: 449,
        category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 1
    },
    // Burgers
    {
        id: 4,
        name: 'Classic Veggie Burger',
        description: 'Crispy veggie patty with fresh lettuce and special sauce',
        price: 179,
        category: 'Burger',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 2
    },
    {
        id: 5,
        name: 'Double Cheese Burger',
        description: 'Double beef patty with cheddar and american cheese',
        price: 249,
        category: 'Burger',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 2
    },
    {
        id: 6,
        name: 'Chicken Zinger',
        description: 'Crispy fried chicken fillet with mayo and coleslaw',
        price: 199,
        category: 'Burger',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 2
    },
    // Biryani
    {
        id: 7,
        name: 'Hyderabadi Chicken Biryani',
        description: 'Aromatic basmati rice with tender chicken and spices',
        price: 349,
        category: 'Biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 3
    },
    {
        id: 8,
        name: 'Paneer Biryani',
        description: 'Fragrant rice with cottage cheese and aromatic spices',
        price: 299,
        category: 'Biryani',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 3
    },
    {
        id: 9,
        name: 'Mutton Biryani',
        description: 'Slow-cooked mutton with saffron-infused rice',
        price: 449,
        category: 'Biryani',
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 3
    },
    // Desserts
    {
        id: 10,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center',
        price: 149,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1606312619070-d48b4cec8e3b?w=800&q=80',
        isVeg: true,
        restaurantId: 4
    },
    {
        id: 11,
        name: 'New York Cheesecake',
        description: 'Creamy cheesecake with graham cracker crust',
        price: 199,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&q=80',
        isVeg: true,
        restaurantId: 4
    },
    {
        id: 12,
        name: 'Tiramisu',
        description: 'Italian coffee-flavored dessert with mascarpone',
        price: 249,
        category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 4
    },
    // Drinks
    {
        id: 13,
        name: 'Mango Smoothie',
        description: 'Fresh mango blended with yogurt and honey',
        price: 129,
        category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80',
        isVeg: true,
        restaurantId: 4
    },
    {
        id: 14,
        name: 'Cold Coffee',
        description: 'Creamy iced coffee with chocolate drizzle',
        price: 149,
        category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
        isVeg: true,
        restaurantId: 4
    },
    {
        id: 15,
        name: 'Fresh Lime Soda',
        description: 'Refreshing lime with soda and mint',
        price: 79,
        category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
        isVeg: true,
        restaurantId: 4
    },
    // Chinese
    {
        id: 16,
        name: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables and soy sauce',
        price: 189,
        category: 'Chinese',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 5
    },
    {
        id: 17,
        name: 'Chicken Manchurian',
        description: 'Crispy chicken in tangy Manchurian sauce',
        price: 249,
        category: 'Chinese',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 5
    },
    {
        id: 18,
        name: 'Spring Rolls',
        description: 'Crispy rolls stuffed with vegetables',
        price: 149,
        category: 'Chinese',
        image: 'https://images.unsplash.com/photo-1548507200-d987a7c2a22f?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 5
    },
    // Salads
    {
        id: 19,
        name: 'Caesar Salad',
        description: 'Romaine lettuce with parmesan and Caesar dressing',
        price: 199,
        category: 'Salads',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 4
    },
    {
        id: 20,
        name: 'Greek Salad',
        description: 'Fresh vegetables with feta cheese and olives',
        price: 179,
        category: 'Salads',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 4
    },
    // Pasta
    {
        id: 21,
        name: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon and parmesan',
        price: 299,
        category: 'Pasta',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=60',
        isVeg: false,
        restaurantId: 1
    },
    {
        id: 22,
        name: 'Penne Arrabbiata',
        description: 'Spicy tomato sauce with garlic and chili',
        price: 249,
        category: 'Pasta',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 1
    },
    {
        id: 23,
        name: 'Alfredo Pasta',
        description: 'Rich and creamy white sauce pasta',
        price: 279,
        category: 'Pasta',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 1
    },
    {
        id: 24,
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese with spicy marinade',
        price: 229,
        category: 'Biryani',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=60',
        isVeg: true,
        restaurantId: 3
    }
];

// Customer Reviews
const reviews = [
    {
        id: 1,
        name: 'Rahul Sharma',
        rating: 5,
        comment: 'Amazing food quality and super fast delivery! The biryani was absolutely delicious and arrived hot. Highly recommended!',
        date: '2026-02-05',
        avatar: '👨‍💼'
    },
    {
        id: 2,
        name: 'Priya Patel',
        rating: 5,
        comment: 'Best food delivery service in town! Fresh ingredients, great packaging, and the customer service is excellent. Love it!',
        date: '2026-02-04',
        avatar: '👩‍💻'
    },
    {
        id: 3,
        name: 'Amit Kumar',
        rating: 4,
        comment: 'Good variety of restaurants and food options. Delivery was on time and the app is very easy to use.',
        date: '2026-02-03',
        avatar: '👨‍🎓'
    },
    {
        id: 4,
        name: 'Sneha Reddy',
        rating: 5,
        comment: 'Ordered pizza for a party and everyone loved it! Great quality and reasonable prices. Will definitely order again.',
        date: '2026-02-02',
        avatar: '👩‍🦰'
    },
    {
        id: 5,
        name: 'Vikram Singh',
        rating: 4,
        comment: 'Fast delivery and hot food. The packaging was eco-friendly which I really appreciate. Keep up the good work!',
        date: '2026-02-01',
        avatar: '👨‍🍳'
    },
    {
        id: 6,
        name: 'Anjali Verma',
        rating: 5,
        comment: 'Absolutely love the desserts section! The chocolate lava cake was divine. Best decision to order from Foodie!',
        date: '2026-01-31',
        avatar: '👩‍🎨'
    }
];

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, restaurants, foodItems, reviews };
}
