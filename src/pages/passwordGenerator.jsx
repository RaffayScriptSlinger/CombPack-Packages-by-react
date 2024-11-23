import { useCallback, useEffect, useState, useRef, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function PasswordGenerator() {
  const {theme} = useContext(ThemeContext)
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numbers, setNumbers] = useState(false);
    const [character, setCharacter] = useState(false);
    const passwordRef = useRef(null);
    const navigate = useNavigate() 

    const generatePassword = useCallback(() => {
        let string = "raffaySharjeel/*?><|";
        if (numbers) {
            string += "0123456789";
        }
        if (character) {
            string += "!@#$%^&*()_+";
        }
        let pass = "";
        for (let i = 0; i < length; i++) {
            let charIndex = Math.floor(Math.random() * string.length);
            pass += string.charAt(charIndex);
        }
        setPassword(pass);
    }, [length, numbers, character]);

    useEffect(() => {
        generatePassword();
    }, [length, numbers, character]);

    const copyPasswordToClipBoard = useCallback(() => {
        window.navigator.clipboard.writeText(password);
        Swal.fire("Password Is Copied", "", "success");
        navigate("/SignUp")
        
    }, [password]);



    return (
        <div className={theme == "light" ? "bg-white text-black h-screen items-center flex justify-center w-full" : "bg-black text-black  h-screen   flex items-center justify-center" } >
            <div >
                <div className='p-7 h-auto bg-gray-200 rounded-lg border-gray-50 border-2 shadow-2xl shadow-indigo-50'>
                    <h1 className=' text-x mb-9 md:text-3xl font-bold'>Password Generator</h1>
                    <input
                        type="text"
                        className='w-4/5 p-1'
                        value={password}
                        readOnly
                        placeholder='Password'
                        ref={passwordRef}
                    />
                    <button
                        className='bg-indigo-600 p-1 font-semibold'
                        onClick={copyPasswordToClipBoard}
                    >
                        Copy
                    </button>
                    <div className='flex justify-center mt-2 flex-wrap'>
                        <div>
                            <label className=''>Length: {length}</label>
                            <input
                                type="range"
                                min={5}
                                max={25}
                                value={length}
                                onChange={(e) => setLength(Number(e.target.value))}
                            />
                        </div>

                        <div className='mx-2'>
                            <label htmlFor="" className=' font-semibold'>Numbers</label>
                            <input
                                type="checkbox"
                                checked={numbers}
                                className='mx-1'
                                onChange={() => setNumbers(prev => !prev)}
                            />
                        </div>

                        <div className='mx-2'>
                            <label htmlFor="" className=' font-semibold'>Characters</label>
                            <input
                                type="checkbox"
                                checked={character}
                                className='mx-1'
                                onChange={() => setCharacter(prev => !prev)}
                            />
                        </div>
                    </div>
                    <p className="text-center mt-2">Back To <Link className="font-semibold" to={"/SignUp"}>Sign Up</Link> </p>
                </div>
            </div>
            
        </div>
    );
}

export default PasswordGenerator;
