const API_BASE_URL = 'https://wedev-api.sky.pro/api';
const API_USER_URL = `${API_BASE_URL}/user`;
const API_TASKS_URL = `${API_BASE_URL}/kanban`;

export function registerUser({ login, name, password }) {
    return fetch(API_USER_URL, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password
        }),
    }).then(response => {
        if (response.status === 400) {
            throw new Error("Такой пользователь уже существует");
        }
        return response.json();
    });
}

export function loginUser({ login, password }) {
    return fetch(`${API_USER_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then(response => {
        if (response.status === 400) {
            throw new Error("Неверный логин или пароль");
        }
        return response.json();
    });
}

export function getTasks({token}) {
    return fetch(API_TASKS_URL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    });
}

export function postTask({token, task}) {
    return fetch(API_TASKS_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(task)
    }).then(async response => {
        const j = await response.json();
        if (response.status === 400) {
            throw new Error(j.error);
        }
        return j;
    });
}