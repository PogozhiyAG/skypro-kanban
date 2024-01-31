export const TASK_STATUSES = {
    NO_STATUS: {name: 'Без статуса'},
    TO_DO: {name: 'Нужно сделать'},
    IN_PROGRESS: {name: 'В работе'},
    TESTING: {name: 'Тестирование'},
    COMPLETE: {name: 'Готово'}
};

export const TASK_CATEGORY = {
    WEB_DESIGN: {name: 'Web Design', class: '_orange'},
    RESEARCH: {name: 'Research', class: '_green'},
    COPYWRITING: {name: 'Copywriting', class: '_purple'},
};

export const tasksList = [
    {
        id: 1,
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },
    {
        id: 2,
        status: 'NO_STATUS',
        name: 'Название задачи 2',
        date: '30.10.23',
        category: 'RESEARCH'
    },
    {
        id: 3,
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },
    {
        id: 4,
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'COPYWRITING'
    },
    {
        id: 5,
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },

    {
        id: 6,
        status: 'TO_DO',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },
    {
        id: 7,
        status: 'TO_DO',
        name: 'Переделать',
        date: '30.10.23',
        category: 'COPYWRITING'
    },

    {
        id: 8,
        status: 'IN_PROGRESS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },
    {
        id: 9,
        status: 'IN_PROGRESS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'COPYWRITING'
    },
    {
        id: 10,
        status: 'IN_PROGRESS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },

    {
        id: 11,
        status: 'TESTING',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },

    {
        id: 13,
        status: 'COMPLETE',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },
];