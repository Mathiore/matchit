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

    partidas:[
        {
            jogo: 'basquete',
            jogadores: 4/5,
            tipo: 'Masculino',
        },
        {
            jogo: 'basquete',
            jogadores: 4/5,
            tipo: 'Masculino',
        },
    ],
};

export default data;