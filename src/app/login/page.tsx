export default function LoginPage(){
    return(
        
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <form className="flex flex-col items-center justify-center">
                <input type="text" placeholder="Username" className="border border-gray-400 rounded-md p-2 mb-2" />
                <input type="password" placeholder="Password" className="border border-gray-400 rounded-md p-2 mb-2" />
                <button className="bg-blue-500 text-white rounded-md p-2">Login</button>
            </form>
        </div>
        
    )
}