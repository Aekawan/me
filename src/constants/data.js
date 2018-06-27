import mockMediumAPI from './mockMediumAPI'

export const menu = {
    profile: 'profile',
    skills: 'skills',
    works: 'works',
    contents: 'contents',
    activity: 'activity'
}

export const header = {
    title: 'WELCOME TO MY WEBSITE',
    sub: 'Let\'s get to know me'
}

export const profile = [
    'Name: Aekkawan Klapsan',
    'Date of Birth: 24 December 1995',
    'Email: aekkawan.k@gmail.com',
    'Education: Software Engineering, Prince of Songkla University',
]

export const skills = [
    {
        name: 'PHP',
        percent: 60
    },
    {
        name: 'LARAVEL',
        percent: 50
    },
    {
        name: 'JAVASCRIPT',
        percent: 70  
    },
    {
        name: 'REACT',
        percent: 60
    },
    {
        name: 'NODE.JS',
        percent: 60
    },
    {
        name: 'EXPRESS',
        percent: 50
    },
    {
        name: 'BOOTSTRAP',
        percent: 70
    },
   ,
]

export const works = [
    {
        name: 'BloodBank',
        des: '',
        img: require('src/images/anonymock.png'),
        repo: 'https://github.com/Aekawan/Blood-bank-Web',
        tech: 'php|bootstrap|mysql'
    },
    {
        name: 'PSU Recyclebank',
        des: '',
        img: require('src/images/ywc.png'),
        repo: 'https://github.com/Aekawan/PSU-Recyclebank',
        tech: 'laravel|mysql|bootstrap'
    },
    {
        name: 'test',
        des: '',
        img: require('src/images/croptop.png'),
        repo: '',
        tech: 'react'
    },
    {
        name: 'test',
        des: '',
        img: require('src/images/shoesshop.png'),
        repo: '',
        tech: 'java|mysql'
    }
]

export const contents = {
    mockMediumAPI: mockMediumAPI
}

export const activity = [
    {
        name: 'Coding',
        icon: 'code'
    },
    {
        name: 'Gaming',
        icon: 'gamepad'
    },
    {
        name: 'Reading',
        icon: 'book'
    },
    {
        name: 'Loving',
        icon: 'heart'
    },
]

export const footer = {
    powerBy: 'Power By @Aekkawan Klapsan',
    social: [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/bank.aekawan'
        },
        {
            name: 'github',
            link: 'https://github.com/Aekawan'
        },
        {
            name: 'medium',
            link: 'https://medium.com/@bankaekawan'
        },
    ]
}