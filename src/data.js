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
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },
    {
        status: 'NO_STATUS',
        name: 'Название задачи 2',
        date: '30.10.23',
        category: 'RESEARCH'
    },
    {
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },
    {
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'COPYWRITING'
    },
    {
        status: 'NO_STATUS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },

    {
        status: 'TO_DO',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },
    {
        status: 'TO_DO',
        name: 'Переделать',
        date: '30.10.23',
        category: 'COPYWRITING'
    },

    {
        status: 'IN_PROGRESS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },
    {
        status: 'IN_PROGRESS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'COPYWRITING'
    },
    {
        status: 'IN_PROGRESS',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'WEB_DESIGN'
    },

    {
        status: 'TESTING',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },

    {
        status: 'COMPLETE',
        name: 'Название задачи',
        date: '30.10.23',
        category: 'RESEARCH'
    },
];