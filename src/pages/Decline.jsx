
const DeclinePage = () => {
  const content = {
    gif: 'https://i.pinimg.com/originals/fa/5c/4c/fa5c4c05e0846d8ff6bf4de6f2c2d29b.gif',
  };




  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <img className="h-80" src={content.gif} alt="Cute cartoon" />
            <p className="text-center m-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Okkiee</p>     
        </div>
      </div>
    </>
  );
};

export default DeclinePage;
