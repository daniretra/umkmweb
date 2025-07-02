// Product Data
const products = [
    {
        id: 1,
        name: 'Beras Premium',
        price: 14000,
        image: 'https://i.pinimg.com/736x/42/e3/0b/42e30b9bcc947e21ea8dae32869aa918.jpg',
        category: 'bahan-pokok',
        description: 'Beras premium kualitas terbaik, pulen dan wangi',
        unit: 'per kg'
    },
    {
        id: 2,
        name: 'Minyak Goreng',
        price: 17000,
        image: 'https://i.pinimg.com/736x/01/04/8a/01048a8c243b3ecd76337a822e8ab9ca.jpg',
        category: 'bahan-pokok',
        description: 'Minyak goreng berkualitas untuk kebutuhan dapur',
        unit: 'per liter'
    },
    {
        id: 3,
        name: 'Gula Pasir',
        price: 12000,
        image: 'https://i.pinimg.com/736x/15/b0/d4/15b0d4371b1925edcdbddc40e3670c50.jpg',
        category: 'bahan-pokok',
        description: 'Gula pasir putih berkualitas tinggi',
        unit: 'per kg'
    },
    {
        id: 4,
        name: 'Tepung Terigu',
        price: 8000,
        image: 'https://i.pinimg.com/736x/f9/4a/0b/f94a0b612803fc8156cc069032b792cd.jpg',
        category: 'bahan-pokok',
        description: 'Tepung terigu serbaguna untuk berbagai kebutuhan',
        unit: 'per kg'
    },
    {
        id: 5,
        name: 'Telur Ayam',
        price: 22000,
        image: 'https://i.pinimg.com/736x/8b/96/bf/8b96bf11534b5ddd50e1a31afeabf58e.jpg',
        category: 'protein',
        description: 'Telur ayam segar dari peternakan lokal',
        unit: 'per kg'
    },
    {
        id: 6,
        name: 'Daging Ayam',
        price: 32000,
        image: 'https://i.pinimg.com/736x/73/f9/48/73f9484b1d92413d3b8878f85c4c9d51.jpg',
        category: 'protein',
        description: 'Daging ayam segar dan berkualitas',
        unit: 'per kg'
    },
    {
        id: 7,
        name: 'Mie Indomie',
        price: 3000,
        image: 'https://i.pinimg.com/736x/bf/7d/da/bf7dda7ad7f03e4dc1d6f73df78cfd7e.jpg',
        category: 'bahan pokok',
        description: 'Mie instan siap olah penunjang lapar',
        unit: 'per pcs'
    },
    {
        id: 8,
        name: 'Sayuran Segar',
        price: 5000,
        image: 'https://i.pinimg.com/736x/d5/04/3c/d5043ca21b0b9573ad9a2cae1bd276f6.jpg',
        category: 'sayuran',
        description: 'Sayuran segar langsung dari petani',
        unit: 'per ikat'
    },
    {
        id: 9,
        name: 'Buah-buahan',
        price: 15000,
        image: 'https://i.pinimg.com/736x/19/a3/cd/19a3cde484721368be41e10b18795432.jpg',
        category: 'buah',
        description: 'Buah-buahan segar dan manis',
        unit: 'per kg'
    },
    {
        id: 10,
        name: 'Garam Dapur',
        price: 3000,
        image: 'https://i.pinimg.com/736x/cd/9d/26/cd9d263898dd610c65005a417489087d.jpg',
        category: 'bumbu',
        description: 'Garam dapur berkualitas untuk masakan',
        unit: 'per kg'
    },
    {
        id: 11,
        name: 'Kecap Manis',
        price: 8500,
        image: 'https://i.pinimg.com/736x/77/e2/5a/77e25a462e48aac655a1dd5e09e13b85.jpg',
        category: 'bumbu',
        description: 'Kecap manis premium untuk masakan Indonesia',
        unit: 'per botol'
    },
    {
        id: 12,
        name: 'Cabai Merah',
        price: 35000,
        image: 'https://i.pinimg.com/736x/7b/93/2b/7b932bccc1a9b045e80e2bddb487faf4.jpg',
        category: 'bumbu',
        description: 'Cabai merah segar dan pedas',
        unit: 'per kg'
    }
];

// Shopping Cart
let cart = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    initializeNavigation();
    initializeForms();
});

// Navigation Functions
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('active');
        });
    });
    
    // Scroll spy for navigation
    window.addEventListener('scroll', updateActiveNavLink);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink() {
    const sections = ['home', 'about', 'products', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (section && navLink) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Product Functions
function loadProducts(category = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">Rp ${formatPrice(product.price)} <span style="font-size: 0.8rem; color: #6b7280;">${product.unit}</span></div>
                <div class="product-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeQuantity(${product.id}, -1)">-</button>
                        <input type="number" class="quantity-input" id="qty-${product.id}" value="1" min="1" readonly>
                        <button class="quantity-btn" onclick="changeQuantity(${product.id}, 1)">+</button>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        🛒 Tambah
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const categoryNames = {
        'bahan-pokok': 'Bahan Pokok',
        'protein': 'Protein',
        'sayuran': 'Sayuran & Buah',
        'bumbu': 'Bumbu & Rempah'
    };
    return categoryNames[category] || category;
}

function filterProducts(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Load filtered products
    loadProducts(category);
}

function changeQuantity(productId, change) {
    const qtyInput = document.getElementById(`qty-${productId}`);
    let currentQty = parseInt(qtyInput.value);
    let newQty = currentQty + change;
    
    if (newQty < 1) newQty = 1;
    qtyInput.value = newQty;
}

// Shopping Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity: quantity
            });
        }
        
        updateCartCount();
        showNotification(`${product.name} ditambahkan ke keranjang!`);
        
        // Reset quantity to 1
        document.getElementById(`qty-${productId}`).value = 1;
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        displayCartItems();
        modal.style.display = 'block';
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #6b7280;">Keranjang belanja kosong</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rp ${formatPrice(item.price)} ${item.unit}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                <span style="padding: 0 10px;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="color: #dc2626; margin-left: 10px;">🗑️</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            displayCartItems();
            updateCartCount();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCartItems();
    updateCartCount();
}

function clearCart() {
    cart = [];
    displayCartItems();
    updateCartCount();
    showNotification('Keranjang berhasil dikosongkan!');
}

// Order Functions
function showOrderForm() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja kosong!', 'error');
        return;
    }
    
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('orderModal').style.display = 'block';
    displayOrderSummary();
}

function closeOrderForm() {
    document.getElementById('orderModal').style.display = 'none';
}

function displayOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const orderTotal = document.getElementById('orderTotal');
    
    orderSummary.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb;">
            <span>${item.name} x ${item.quantity}</span>
            <span>Rp ${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderTotal.textContent = formatPrice(total);
}

function submitOrder() {
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);
    
    // Validate required fields
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    
    if (!name || !phone || !address) {
        showNotification('Mohon lengkapi semua field yang wajib diisi!', 'error');
        return;
    }
    
    // Simulate order processing
    showNotification('Memproses pesanan...', 'info');
    
    setTimeout(() => {
        const orderNumber = 'TB' + Date.now();
        showNotification(`Pesanan berhasil! Nomor pesanan: ${orderNumber}. Kami akan menghubungi Anda segera.`, 'success');
        
        // Clear cart and close modal
        clearCart();
        closeOrderForm();
        
        // Reset form
        form.reset();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}

// Form Functions
function initializeForms() {
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        if (!name || !email || !message) {
            showNotification('Mohon lengkapi semua field!', 'error');
            return;
        }
        
        showNotification('Mengirim pesan...', 'info');
        
        setTimeout(() => {
            showNotification('Pesan berhasil dikirim! Kami akan membalas dalam 24 jam.', 'success');
            this.reset();
        }, 1500);
    });
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID').format(price);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        font-weight: 500;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const cartModal = document.getElementById('cartModal');
    const orderModal = document.getElementById('orderModal');
    
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    
    if (event.target === orderModal) {
        orderModal.style.display = 'none';
    }
});

// Handle escape key to close modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('orderModal').style.display = 'none';
    }
});