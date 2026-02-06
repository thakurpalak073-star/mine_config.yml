function checkAdminAuth() {
    if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = 'admin-login.html';
    }
}

function adminLogout() {
    localStorage.removeItem('isAdminLoggedIn');
    window.location.href = 'admin-login.html';
}

function renderAdminSidebar(activePage) {
    const sidebar = document.querySelector('.admin-sidebar');
    if (!sidebar) return;

    sidebar.innerHTML = `
        <div class="sidebar-brand">Foodie Admin</div>
        <div class="sidebar-menu">
            <a href="admin-dashboard.html" class="${activePage === 'dashboard' ? 'active' : ''}">
                <i class="fas fa-chart-line"></i> Dashboard
            </a>
            <a href="manage-orders.html" class="${activePage === 'orders' ? 'active' : ''}">
                <i class="fas fa-shopping-bag"></i> Manage Orders
            </a>
            <a href="manage-food.html" class="${activePage === 'food' ? 'active' : ''}">
                <i class="fas fa-hamburger"></i> Food Items
            </a>
            <a href="manage-restaurants.html" class="${activePage === 'restaurants' ? 'active' : ''}">
                <i class="fas fa-store"></i> Restaurants
            </a>
            <a href="manage-users.html" class="${activePage === 'users' ? 'active' : ''}">
                <i class="fas fa-users"></i> Users
            </a>
            <a href="#" onclick="adminLogout()" style="margin-top: 50px;">
                <i class="fas fa-sign-out-alt"></i> Logout
            </a>
        </div>
    `;
}
