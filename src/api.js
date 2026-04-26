const BASE_URL = 'http://127.0.0.1:8000';

const api = {
    // Auth
    async login(username, password) {
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        return data;
    },

    async signup(username, password, fullName) {
        const response = await fetch(`${BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, full_name: fullName }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Signup failed');
        }

        return await response.json();
    },

    logout() {
        localStorage.removeItem('token');
        window.location.href = '/login';
    },

    // Predictions (Authenticated)
    async getHealthScore(scores) {
        return this.authenticatedFetch('/predict/health', {
            method: 'POST',
            body: JSON.stringify({ behavioral_scores: scores }),
        });
    },

    async getWasteAnalysis(subscriptions) {
        return this.authenticatedFetch('/predict/waste', {
            method: 'POST',
            body: JSON.stringify({ subscriptions }),
        });
    },

    // Internal Fetch Wrapper
    async authenticatedFetch(endpoint, options = {}) {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No authentication token found');

        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                ...options.headers,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 401) this.logout();
            const error = await response.json();
            throw new Error(error.detail || 'Request failed');
        }

        return await response.json();
    }
};

export default api;
