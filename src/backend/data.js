import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
            name: 'Bassal',
            email:'admin@example.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true,
        },
        {
            name: 'Joao',
            email:'user@example.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false,
        },
        
    ],
}

export default data;