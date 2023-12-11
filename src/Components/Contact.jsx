import { FaEnvelope, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="my-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4">
        {/* Email */}
        <a
          href="mailto:alemeranexpert@gmail.com"
          className="contact-btn bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:from-blue-500 hover:to-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/md-al-emran-akash/"
          className="contact-btn bg-gradient-to-r from-blue-700 to-blue-800 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:from-blue-800 hover:to-blue-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/al.emran.akash.75/"
          className="contact-btn bg-gradient-to-r from-blue-900 to-blue-500 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:from-blue-500 hover:to-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
          <span>Facebook</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/alemranakash"
          className="contact-btn bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:from-gray-900 hover:to-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
