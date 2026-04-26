const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

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
    async getHealthScore(scores, emiBurden = 'light', incomeBracket = '50k-100k') {
        return this.authenticatedFetch('/predict/health', {
            method: 'POST',
            body: JSON.stringify({ 
                behavioral_scores: scores,
                context: {
                    emi_burden: emiBurden,
                    income_bracket: incomeBracket
                }
            }),
        });
    },

    async getSystemStatus() {
        const response = await fetch(`${BASE_URL}/status`);
        return await response.json();
    },

    async getWasteAnalysis(subscriptions) {
        return this.authenticatedFetch('/predict/waste', {
            method: 'POST',
            body: JSON.stringify({ subscriptions }),
        });
    },

    async getGoalScore(goalData) {
        return this.authenticatedFetch('/predict/goal', {
            method: 'POST',
            body: JSON.stringify({
                goal_description: goalData.goal_description,
                target_amount: goalData.target_amount,
                saved_so_far: goalData.saved_so_far,
                monthly_savings: goalData.monthly_savings,
                timeline_months: goalData.timeline_months,
                behavioral_scores: goalData.behavioral_scores
            }),
        });
    },

    async getClusterAnalysis(behavioralScores) {
        return this.authenticatedFetch('/predict/cluster', {
            method: 'POST',
            body: JSON.stringify({ behavioral_scores: behavioralScores }),
        });
    },

    async getBehavioralScores(answers) {
        return this.authenticatedFetch('/predict/behavioral-scores', {
            method: 'POST',
            body: JSON.stringify({ answers }),
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
    },
};

export default api;
