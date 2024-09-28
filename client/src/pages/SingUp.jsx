
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

const SingUp =()=> {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
            {/* left */}
          <div className='flex-1'>
          <Link to="/" 
      className='font-bold 
      dark:text-white text-4xl'
      >
        <span className='px-3 py-1 
        bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 
        rounded-lg text-white'>React-pro</span>
        <span className='font-bold'>Vite</span>
      </Link>
      <p className='text-sm mt-5'>This is demo project React-vite</p>
          </div>
            {/* right */}

          <div className='flex-1'>
            <form className='flex flex-col gap-4'>
              <div>
                <Label value='Your name' />
                <TextInput 
                  type='text'
                  placeholder='User name'
                  id='username' /> 
              </div>

              <div>
                <Label value='Your email' />
                <TextInput 
                  type='text'
                  placeholder='name@company.com'
                  id='email' /> 
              </div>

              <div>
                <Label value='Your password' />
                <TextInput 
                  type='text'
                  placeholder='Password'
                  id='password' /> 
              </div>

              <Button gradientDuoTone='purpleToPink' type='submit' >
                  Sing Up
              </Button>
            </form>

            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to='/sing-in' className='text-purple-600'>
                Sing In
              </Link>
            </div>
          </div>
      </div>      
    </div>
  )
}

export default SingUp;
