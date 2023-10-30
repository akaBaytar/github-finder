const About = () => {
  return (
    <div className='flex flex-col gap-6 px-2 mx-2'>
      <h1 className='text-3xl font-semibold'>Github Finder</h1>
      <p>
        Github Finder is a React application developed using React and Vite. This project allows
        users to search for other users GitHub profiles. When entering a user&apos;s profile, users
        can access detailed information about them and view their repositories. The application
        utilizes the GitHub API for fetching data.
      </p>
      <ul className='flex flex-col gap-2 text-sm'>
        <h2 className='text-xl font-semibold'>Features</h2>
        <li>
          <span className='font-semibold'>User Search:</span> Users can search for other GitHub
          users by their username.
        </li>
        <li>
          <span className='font-semibold'>Detailed User Profiles:</span> Upon selecting a user,
          detailed information about the user is displayed, including their repositories.
        </li>
        <li>
          <span className='font-semibold'>GitHub API Integration:</span> The application utilizes
          the GitHub API to fetch user data and repositories.
        </li>
        <li>
          <span className='font-semibold'>Responsive Design:</span> Built using React and Vite, the
          application offers a responsive and seamless user experience.
        </li>
        <li>
          <span className='font-semibold'>UI Libraries:</span> Tailwind CSS and DaisyUI libraries
          are employed to enhance the user interface design.
        </li>
      </ul>
      <div className='flex flex-col'>
        <h3 className='text-sm font-semibold'>
          <span className='text-gray-600'>Version:</span> 1.0.0
        </h3>
        <h3 className='text-sm font-semibold'>
          <span className='text-gray-600'>Layout By:</span> Hassib Moddasser
        </h3>
      </div>
    </div>
  );
};

export default About;
