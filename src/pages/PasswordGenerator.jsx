import { useSate, useState } from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [password, setPassword] = useState('');
    const generate = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        setPassword(result);
};

return(
    <section className='flex flex-col items-center justify-center min-h-[70vh] text-center'>
        <h2 className='text-2xl font-bold mb-4'>🔐 Generador de Contraseñas</h2>
        <div className='flex flex-col items-center gap-2'>
            <input type='number' value={length} onChange={(e) => setLength(e.target.value)} min={4} max={32}
            className='border p-2 rounded' />
            <button onClick={generate} className='bg-blue-600 text-white px-4 py-2 rounded'>Generar</button>
            <input type='text' readOnly value={password}
            className='border p-2 w-60 text-center' />
        </div>
    </section>
    );
};

export default PasswordGenerator;