import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Label, TextInput, Button, Alert, Spinner} from 'flowbite-react';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // adding load effect 
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e) => {;
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) =>{
    // prevent default prevents the page from refreshing once u click submit
    e.preventDefault(); 
    if(!formData.email || !formData.password){
      return setErrorMessage('Please fill out the required fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();

      if (data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        <div className='flex-1'>
        <Link to="/" className='text-4xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-4xl'>cHurcH</span>
            of-PHONES
        </Link>
        <p className='text-sm mt-5'>This is a Godly project, Worship with us every sunday for a chance to win a brand new iphone14 Pro Max</p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}> 
              <div>
                <Label value='Your Email'/>
                <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
              </div>
              <div>
                <Label value='Your Password'/>
                <TextInput type='password' placeholder='**********' id='password' onChange={handleChange}/>
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                {
                  loading ? (
                    <>
                        <Spinner size='sm'/> 
                        <span className='pl-3'>Loading....</span>
                    
                    </>
               
                  ) : 'Sign In'
                }
              </Button>
          </form> 
          <div className="flex gap-2 mt-5 text-sm">
             <span>Don't Have an account ?</span>
             <Link to='/sign-up' className='text-blue-500'>
                Sign Up
             </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                 {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
