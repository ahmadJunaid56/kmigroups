import Image from 'next/image';

const CustomCards = () => {
  const images = [
    {
      src: '/diary (1).jpg',
      alt: 'Image 1',
      title: 'Title 1',
      description: 'Description 1',
      animation: 'fade-up', // Image 1 animation
    },
    {
      src: '/diary (3).jpg',
      alt: 'Image 2',
      title: 'Title 2',
      description: 'Description 2',
      animation: 'fade-down', // Image 2 animation
    },
    {
      src: '/diary (2).jpg',
      alt: 'Image 3',
      title: 'Title 3',
      description: 'Description 3',
      animation: 'zoom-in', // Image 3 animation
    },
    {
      src: '/diary (4).jpg',
      alt: 'Image 4',
      title: 'Title 4',
      description: 'Description 4',
      animation: 'zoom-out', // Image 4 animation
    },
    {
      src: '/diary (1).jpg',
      alt: 'Image 1',
      title: 'Title 1',
      description: 'Description 1',
      animation: 'fade-up', // Image 1 animation
    },
    {
      src: '/diary (2).jpg',
      alt: 'Image 2',
      title: 'Title 2',
      description: 'Description 2',
      animation: 'fade-down', // Image 2 animation
    },
    {
      src: '/diary (3).jpg',
      alt: 'Image 3',
      title: 'Title 3',
      description: 'Description 3',
      animation: 'zoom-in', // Image 3 animation
    },
    {
      src: '/diary (4).jpg',
      alt: 'Image 4',
      title: 'Title 4',
      description: 'Description 4',
      animation: 'zoom-out', // Image 4 animation
    },
  ];

  return (
    <>
      <div className="mt-16">
        <h2
          className="text-4xl sm:text-4xl md:text-5xl ml-12 lg:text-6xl mt-8 mb-4"
          data-aos="fade-up"
        >
          Trending Sheets
        </h2>

        <div className="custom-card-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="custom-card-container"
              data-aos={image.animation} // Apply animation to each card
              data-aos-delay={index * 100} // Stagger animations with delay
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="custom-card-image"
              />
              <div className="custom-card-overlay">
                <h3 className="custom-card-title">{image.title}</h3>
                <p className="custom-card-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomCards;
