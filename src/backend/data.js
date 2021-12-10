import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
            name: 'Bassal',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
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
            jogo: 'Basquete',
            jogadores: '4/5',
            tipo: 'Masculino',
        },
        {
            jogo: 'Vôlei',
            jogadores: '3/5',
            tipo: 'Misto',
        },
        {
            jogo: 'Futebol',
            jogadores: '3/5',
            tipo: 'Masculino',
        },
        {
            jogo: 'Personalizado',
            jogadores: '2/5',
            tipo: 'Feminino',
        },
    ],
};

export default data;