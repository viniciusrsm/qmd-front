'use client';

import { useActionState, useState } from 'react';

export default function Login() {
    //const { login } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    //const [state, action, pending] = useActionState(signup, undefined)



    return (
        <div className="flex justify-center items-center h-full">
            <div className="p-4 w-3/4 lg:w-1/2 bg-primary text-white rounded-lg shadow-lg">
                <h1 className="text-lg font-bold text-center">Bem vindo ao</h1>
                <h1 className="text-3xl font-bold text-center">Quem me deve?</h1>
                
                <div className="flex justify-center gap-2 mt-4 mb-8">
                    <button 
                        onClick={() => setIsSignUp(false)}
                        className={`px-4 py-2 rounded-full transition-colors ${!isSignUp ? 'bg-white text-primary' : 'text-white hover:bg-white/10'}`}
                    >
                        Login
                    </button>
                    <button 
                        onClick={() => setIsSignUp(true)}
                        className={`px-4 py-2 rounded-full transition-colors ${isSignUp ? 'bg-white text-primary' : 'text-white hover:bg-white/10'}`}
                    >
                        Cadastro
                    </button>
                </div>
                <form noValidate onSubmit={(e) => e.preventDefault()} action={''} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email</label>
                        <input
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="exemplo@email.com"
                            className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
                        />
                    </div>
                    {/* state?.errors?.email && <p>{state.errors.email}</p> */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm">Senha</label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password"
                            placeholder={isSignUp ? "Escolha uma senha" : "Sua senha"}
                            className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
                        />
                    </div>
                    {/* state?.errors?.password && <p>{state.errors.password}</p> */}
                    
                    {isSignUp && (
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="block text-sm">Confirmar Senha</label>
                            <input 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                type="password"
                                placeholder="Confirme sua senha"
                                className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white"
                            />
                        </div>
                    )}
                    {error && (
                        <p className="text-red-300 text-sm text-center">{error}</p>
                    )}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full py-2 mt-6 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50"
                    >
                        {isLoading 
                            ? 'Carregando...' 
                            : isSignUp 
                                ? 'Criar Conta' 
                                : 'Entrar'
                        }
                    </button>
                </form>

                {/* <div className="flex flex-col items-center mt-4">
                    <button 
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="cursor-pointer min-w-12 min-h-12 bg-white text-primary rounded-full flex items-center justify-center disabled:opacity-50"
                    >
                        <GoogleIcon />
                    </button>
                    {error && (
                        <p className="mt-4 text-red-200 text-center">{error}</p>
                    )}
                </div> */}
            </div>
        </div>
    );
}