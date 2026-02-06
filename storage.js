const Storage = {
    init() {
        // Always refresh data from data.js to get latest images
        localStorage.setItem('foodItems', JSON.stringify(foodItems));
        localStorage.setItem('restaurants', JSON.stringify(restaurants));
        
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
        if (!localStorage.getItem('orders')) {
            localStorage.setItem('orders', JSON.stringify([]));
        }
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    },

    // Cart Operations
    getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    },
    saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
    },
    addToCart(item) {
        const cart = this.getCart();
        const existingItem = cart.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        this.saveCart(cart);
    },
    removeFromCart(id) {
        const cart = this.getCart().filter(i => i.id !== id);
        this.saveCart(cart);
    },
    updateQuantity(id, delta) {
        const cart = this.getCart();
        const item = cart.find(i => i.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeFromCart(id);
            } else {
                this.saveCart(cart);
            }
        }
    },
    clearCart() {
        this.saveCart([]);
    },

    // Food Items
    getFoodItems() {
        return JSON.parse(localStorage.getItem('foodItems')) || [];
    },
    saveFoodItem(item) {
        const items = this.getFoodItems();
        if (item.id) {
            const index = items.findIndex(i => i.id === item.id);
            items[index] = item;
        } else {
            item.id = Date.now();
            items.push(item);
        }
        localStorage.setItem('foodItems', JSON.stringify(items));
    },
    deleteFoodItem(id) {
        const items = this.getFoodItems().filter(i => i.id !== id);
        localStorage.setItem('foodItems', JSON.stringify(items));
    },

    // Restaurants
    getRestaurants() {
        return JSON.parse(localStorage.getItem('restaurants')) || [];
    },
    saveRestaurant(restaurant) {
        const restaurants = this.getRestaurants();
        if (restaurant.id) {
            const index = restaurants.findIndex(r => r.id === restaurant.id);
            restaurants[index] = restaurant;
        } else {
            restaurant.id = Date.now();
            restaurants.push(restaurant);
        }
        localStorage.setItem('restaurants', JSON.stringify(restaurants));
    },

    // Orders
    getOrders() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    },
    placeOrder(order) {
        const orders = this.getOrders();
        order.id = 'ORD' + Date.now();
        order.date = new Date().toISOString();
        order.status = 'Pending';
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        this.clearCart();
        return order.id;
    },
    updateOrderStatus(id, status) {
        const orders = this.getOrders();
        const order = orders.find(o => o.id === id);
        if (order) {
            order.status = status;
            localStorage.setItem('orders', JSON.stringify(orders));
        }
    },

    // Users
    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    },
    registerUser(user) {
        const users = this.getUsers();
        user.id = Date.now();
        user.status = 'Active';
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return user;
    },
    loginUser(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            if (user.status === 'Blocked') throw new Error('Your account is blocked');
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }
        throw new Error('Invalid credentials');
    },
    logout() {
        localStorage.removeItem('currentUser');
    },
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
};

// Initialize on load
Storage.init();
