

const Banner = () => {
    return (
        <div>
           <div
  className="hero h-80"
  style={{
    backgroundImage: "url(Banner1.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
       Welcome to JSAcademy.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;