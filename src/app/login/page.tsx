export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4 w-3/4 lg:w-1/2 bg-primary text-white rounded-lg shadow-lg">
                <h1 className="text-lg font-bold text-center">Bem vindo ao</h1>
                <h1 className="text-3xl font-bold text-center mb-10">Quem me deve?</h1>
                <h1 className="text-2xl font-bold text-center">Fazer login com o Google:</h1>
                <div className="flex justify-center mt-4">
                    <button className="cursor-pointer min-w-12 min-h-12 bg-white text-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#8146f6" viewBox="0 0 256 256"><path d="M228,128a100,100,0,1,1-22.86-63.64,12,12,0,0,1-18.51,15.28A76,76,0,1,0,203.05,140H128a12,12,0,0,1,0-24h88A12,12,0,0,1,228,128Z"></path></svg>
                    </button>
                </div>
                {/* <form className="mt-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block">Password</label>
                    <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button className="w-full p-2 bg-[#8146F6] text-white rounded">Login</button>
                </form> */}
            </div>
        </div>
    );
}