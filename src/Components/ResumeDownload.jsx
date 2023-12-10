

const ResumeDownload = () => {
  const handleDownload = () => {
    // Set the correct path to your resume PDF file
    const resumeFilePath = '/public/SCIC-Assignment-2.pdf';

    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = '/public/SCIC-Assignment-2.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mt-16">
      {/* <p>Click the button below to download my resume:</p> */}
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded flex mx-auto"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </section>
  );
};

export default ResumeDownload;
