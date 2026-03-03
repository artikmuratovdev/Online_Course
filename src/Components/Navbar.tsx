import Sharingan from '../assets/Sharingan.jpg';

interface NavbarProps {
  toggleSidebar: () => void;
  toggleDark: () => void;
  darkMode: boolean;
}

const Navbar = ({ toggleSidebar, toggleDark, darkMode }: NavbarProps) => {
  const icons = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
          />
        </svg>
      ),
      Fn: toggleSidebar,
    },
    {
      icon: darkMode ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
          />
        </svg>
      ),
      Fn: toggleDark,
    },
  ];
  return (
    <nav className='col-span-2 flex items-center justify-between border-2 border-slate-400 bg-white dark:bg-slate-900 p-2 rounded-lg'>
      <div className='flex gap-2'>
        {icons.map((icon , id) => (
          <button onClick={icon.Fn} key={id}>{icon.icon}</button>
        ))}
      </div>
      <div className='flex items-center gap-2 text-5xl font-bold'>
        <img
          src={Sharingan}
          className='w-13.75 rounded-full'
          alt='Sharingan Image'
        />
        <span>Savitar</span>
      </div>
    </nav>
  );
};

export default Navbar;
