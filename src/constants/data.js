import mockMediumAPI from './mockMediumAPI'

export const menu = {
    profile: 'profile',
    skills: 'skills',
    works: 'works',
    github: 'github',
    contents: 'contents',
    activity: 'activity'
}

export const header = {
    title: 'HELLO, WELCOME TO MY GALAXY',
    sub: 'Let\'s get to know me'
}

export const profile = [
    'Name: Aekkawan Klapsan (Bank)',
    'Date of Birth: 24 December 1995',
    'Email: aekkawan.k@gmail.com',
    'Education: Software Engineering, Prince of Songkla University',
    'Working: Software Engineer (Front-End) at AppMan Co., Ltd.'
]

export const skills = [
    {
        name: 'JAVASCRIPT',
        percent: 80  
    },
    {
        name: 'REACT',
        percent: 70
    },
    {
        name: 'VUE',
        percent: 70
    },
    {
        name: 'NODE.JS',
        percent: 60
    },
    {
        name: 'EXPRESS',
        percent: 60
    },
    {
        name: 'BOOTSTRAP',
        percent: 70
    },
    {
        name: 'PHP',
        percent: 70
    },
    {
        name: 'LARAVEL',
        percent: 60
    },
]

export const works = [
    {
        name: 'TrustMe',
        des: '',
        img: require('src/images/TrustMe/1.png'),
        repo: '',
        tech: 'react',
        content: 'TrustMe แอปพลิเคชั่นตัวกลางระหว่างทนายและผู้ที่ต้องการคำปรึกษาเรื่องกฎหมาย ที่ทำให้การพปรึกษาพูดคุยสะดวกมากยิ่งขึ้น',
        images: [
            {
                thumbnail: require('src/images/TrustMe/1.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/1.png')
            },
            {
                thumbnail: require('src/images/TrustMe/2.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/2.png')
            },
            {
                thumbnail: require('src/images/TrustMe/3.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/3.png')
            },
            {
                thumbnail: require('src/images/TrustMe/4.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/4.png')
            },
            {
                thumbnail: require('src/images/TrustMe/5.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/5.png')
            },
            {
                thumbnail: require('src/images/TrustMe/6.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/6.png')
            },
            {
                thumbnail: require('src/images/TrustMe/7.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/7.png')
            },
            {
                thumbnail: require('src/images/TrustMe/8.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/8.png')
            },
            {
                thumbnail: require('src/images/TrustMe/9.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/9.png')
            },
            {
                thumbnail: require('src/images/TrustMe/10.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/10.png')
            },
            {
                thumbnail: require('src/images/TrustMe/11.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/11.png')
            },
            {
                thumbnail: require('src/images/TrustMe/12.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/12.png')
            },
            {
                thumbnail: require('src/images/TrustMe/13.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/13.png')
            },
            {
                thumbnail: require('src/images/TrustMe/14.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/14.png')
            },
            {
                thumbnail: require('src/images/TrustMe/15.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/15.png')
            },
            {
                thumbnail: require('src/images/TrustMe/16.png'),
                orientation: 'square',
                src: require('src/images/TrustMe/16.png')
            }
        ]
    },
    {
        name: 'Mechy',
        des: '',
        img: require('src/images/Mechy/1.png'),
        repo: '',
        tech: 'react',
        content: 'Mechy แอปพลิเคชั่นค้นหาและเรื่องใช้บริการร้านซ่อนรถผง่ายๆ ผ่านแอปพลิเคชั่น',
        images: [
            {
                thumbnail: require('src/images/Mechy/1.png'),
                orientation: 'square',
                src: require('src/images/Mechy/1.png')
            },
            {
                thumbnail: require('src/images/Mechy/2.png'),
                orientation: 'square',
                src: require('src/images/Mechy/2.png')
            },
            {
                thumbnail: require('src/images/Mechy/3.png'),
                orientation: 'square',
                src: require('src/images/Mechy/3.png')
            },
            {
                thumbnail: require('src/images/Mechy/4.png'),
                orientation: 'square',
                src: require('src/images/Mechy/4.png')
            },
            {
                thumbnail: require('src/images/Mechy/5.png'),
                orientation: 'square',
                src: require('src/images/Mechy/5.png')
            } 
        ]
    },
    {
        name: 'BusX App',
        des: '',
        img: require('src/images/BusX/1.png'),
        repo: '',
        tech: 'react',
        content: 'BusX App แอปพลิเคชั่นเรียกและจองรถโดยสารประจำทางออนไลน์ผ่านแอปพลิเคชั่น ทำให้สะดวกมากยิ่งขึ้น',
        images: [
            {
                thumbnail: require('src/images/BusX/1.png'),
                orientation: 'square',
                src: require('src/images/BusX/1.png')
            },
            {
                thumbnail: require('src/images/BusX/2.png'),
                orientation: 'square',
                src: require('src/images/BusX/2.png')
            },
            {
                thumbnail: require('src/images/BusX/3.png'),
                orientation: 'square',
                src: require('src/images/BusX/3.png')
            },
            {
                thumbnail: require('src/images/BusX/4.png'),
                orientation: 'square',
                src: require('src/images/BusX/4.png')
            },
            {
                thumbnail: require('src/images/BusX/5.png'),
                orientation: 'square',
                src: require('src/images/BusX/5.png')
            },
            {
                thumbnail: require('src/images/BusX/6.png'),
                orientation: 'square',
                src: require('src/images/BusX/6.png')
            },
            {
                thumbnail: require('src/images/BusX/7.png'),
                orientation: 'square',
                src: require('src/images/BusX/7.png')
            },
            {
                thumbnail: require('src/images/BusX/8.png'),
                orientation: 'square',
                src: require('src/images/BusX/8.png')
            },
            {
                thumbnail: require('src/images/BusX/9.png'),
                orientation: 'square',
                src: require('src/images/BusX/9.png')
            },
            {
                thumbnail: require('src/images/BusX/10.png'),
                orientation: 'square',
                src: require('src/images/BusX/10.png')
            },
            {
                thumbnail: require('src/images/BusX/11.png'),
                orientation: 'square',
                src: require('src/images/BusX/11.png')
            },
        ]
    },
    {
        name: 'BloodBank',
        des: '',
        img: require('src/images/blood/1.png'),
        repo: 'https://github.com/Aekawan/Blood-bank-Web',
        tech: 'php|bootstrap|mysql',
        content: 'BloodBank เว็บไซต์ธนาคารเลือตัวกลางเรื่องการบริจาคเลือด ทำให้ผู้ที่ต้องการเลือดหรือผู้ที่ต้องการบริจาคเลือดสะดวกมากยิ่งขึ้น',
        images: [
            {
                thumbnail: require('src/images/blood/1.png'),
                orientation: 'square',
                src: require('src/images/blood/1.png')
            },
            {
                thumbnail: require('src/images/blood/2.png'),
                orientation: 'square',
                src: require('src/images/blood/2.png')
            },
            {
                thumbnail: require('src/images/blood/3.png'),
                orientation: 'square',
                src: require('src/images/blood/3.png')
            },
            {
                thumbnail: require('src/images/blood/4.png'),
                orientation: 'square',
                src: require('src/images/blood/4.png')
            },
            {
                thumbnail: require('src/images/blood/5.png'),
                orientation: 'square',
                src: require('src/images/blood/5.png')
            },
            {
                thumbnail: require('src/images/blood/6.png'),
                orientation: 'square',
                src: require('src/images/blood/6.png')
            },
        ]
    },
    {
        name: 'PSU Recycle Bank',
        des: '',
        img: require('src/images/recycle-bank/1.png'),
        repo: 'https://github.com/Aekawan/PSU-Recyclebank',
        tech: 'laravel|php|mysql|bootstrap',
        content: 'PSU Recycle Bank เว็บไซต์ระบบจัดการธนาคารขยะของมหาวิทยาลยัสงขลานครินทร์ วิทยาเขตที่ภูเก็ต ทำให้เรื่องซื้อ-ขายแลกเปลี่ยนขยะในมหาวิทยาลัยสะดวกมากยิ่งขึ้น',
        images: [
            {
                thumbnail: require('src/images/recycle-bank/1.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/1.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/2.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/2.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/3.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/3.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/4.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/4.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/5.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/5.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/6.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/6.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/7.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/7.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/8.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/8.png')
            },
            {
                thumbnail: require('src/images/recycle-bank/9.png'),
                orientation: 'square',
                src: require('src/images/recycle-bank/9.png')
            },
        ]
    },
    {
        name: 'Burger King',
        des: '',
        img: require('src/images/burgerking/1.png'),
        repo: '',
        tech: '',
        content: 'เพิ่ม Cookie Consent บน Header ของเว็บไซต์ตามมาตรฐานของ EU Cookie Laws',
        images: [
            {
                thumbnail: require('src/images/burgerking/1.png'),
                orientation: 'square',
                src: require('src/images/burgerking/1.png')
            },
            {
                thumbnail: require('src/images/burgerking/2.png'),
                orientation: 'square',
                src: require('src/images/burgerking/2.png')
            },
        ]
    },
    {
        name: 'Signha',
        des: '',
        img: require('src/images/signha/1.png'),
        repo: '',
        tech: '',
        content: 'เปลี่ยนแปลงผลิตภัณฑ์ของเบียสิงห์ในหน้า OUR-BEER',
        images: [
            {
                thumbnail: require('src/images/signha/1.png'),
                orientation: 'square',
                src: require('src/images/signha/1.png')
            },
        ]
    },
    {
        name: 'The Coffee Club',
        des: '',
        img: require('src/images/thecofeeclub/1.png'),
        repo: '',
        tech: 'wordpress',
        content: 'Optimize เว็บไซต์ในมีขนาดเล็กและโหลดหน้าเว็บได้เร็วขึ้นทั้งบนมือถือและคอมพิวเตอร์',
        images: [
            {
                thumbnail: require('src/images/thecofeeclub/1.png'),
                orientation: 'square',
                src: require('src/images/thecofeeclub/1.png')
            },
        ]
    },
    {
        name: 'Dormitory Repair System',
        des: '',
        img: require('src/images/repair/1.png'),
        repo: '',
        tech: 'csharp',
        content: 'Dormitory Repair System เว็บไซต์ระบบแจ้งซ่อมหอพักออนไลน์ ทำให้นักศึกษาสะดวกสบายยิ่งขึ้น',
        images: [
            {
                thumbnail: require('src/images/repair/1.png'),
                orientation: 'square',
                src: require('src/images/repair/1.png')
            },
            {
                thumbnail: require('src/images/repair/2.png'),
                orientation: 'square',
                src: require('src/images/repair/2.png')
            },
            {
                thumbnail: require('src/images/repair/3.png'),
                orientation: 'square',
                src: require('src/images/repair/3.png')
            },
            {
                thumbnail: require('src/images/repair/4.png'),
                orientation: 'square',
                src: require('src/images/repair/4.png')
            },
            {
                thumbnail: require('src/images/repair/5.png'),
                orientation: 'square',
                src: require('src/images/repair/5.png')
            },
            {
                thumbnail: require('src/images/repair/6.png'),
                orientation: 'square',
                src: require('src/images/repair/6.png')
            },
            {
                thumbnail: require('src/images/repair/7.png'),
                orientation: 'square',
                src: require('src/images/repair/7.png')
            },
            {
                thumbnail: require('src/images/repair/8.png'),
                orientation: 'square',
                src: require('src/images/repair/8.png')
            },
            {
                thumbnail: require('src/images/repair/9.png'),
                orientation: 'square',
                src: require('src/images/repair/9.png')
            },
            {
                thumbnail: require('src/images/repair/10.png'),
                orientation: 'square',
                src: require('src/images/repair/10.png')
            },
            {
                thumbnail: require('src/images/repair/11.png'),
                orientation: 'square',
                src: require('src/images/repair/11.png')
            },
        ]
    },
    {
        name: 'ShopAtChina',
        des: '',
        img: require('src/images/shopatchina/1.png'),
        repo: '',
        tech: '',
        content: 'ShopAtChina เว็บไซต์ซื้อสินค้าจากจีนที่ทำให้ผู้ซื้อสะดวกสบายยิ่งขึ้น',
        images: [
            {
                thumbnail: require('src/images/shopatchina/1.png'),
                orientation: 'square',
                src: require('src/images/shopatchina/1.png')
            },
            {
                thumbnail: require('src/images/shopatchina/2.png'),
                orientation: 'square',
                src: require('src/images/shopatchina/2.png')
            },
            {
                thumbnail: require('src/images/shopatchina/3.png'),
                orientation: 'square',
                src: require('src/images/shopatchina/3.png')
            },
            {
                thumbnail: require('src/images/shopatchina/4.png'),
                orientation: 'square',
                src: require('src/images/shopatchina/4.png')
            },
            {
                thumbnail: require('src/images/shopatchina/5.png'),
                orientation: 'square',
                src: require('src/images/shopatchina/5.png')
            },
        ]
    },
    {
        name: 'Dormitory Reserve System',
        des: '',
        img: require('src/images/dorm/1.png'),
        repo: '',
        tech: 'csharp',
        content: 'Dormitory Reserve System เว็บไซต์ระบบของห้องพักสำหรับนักศึกษาชาย',
        images: [
            {
                thumbnail: require('src/images/dorm/1.png'),
                orientation: 'square',
                src: require('src/images/dorm/1.png')
            },
            {
                thumbnail: require('src/images/dorm/2.png'),
                orientation: 'square',
                src: require('src/images/dorm/2.png')
            },
            {
                thumbnail: require('src/images/dorm/3.png'),
                orientation: 'square',
                src: require('src/images/dorm/3.png')
            },
            {
                thumbnail: require('src/images/dorm/4.png'),
                orientation: 'square',
                src: require('src/images/dorm/4.png')
            },
            {
                thumbnail: require('src/images/dorm/5.png'),
                orientation: 'square',
                src: require('src/images/dorm/5.png')
            },
            {
                thumbnail: require('src/images/dorm/6.png'),
                orientation: 'square',
                src: require('src/images/dorm/6.png')
            },  
        ]
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