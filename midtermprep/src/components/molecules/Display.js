const Display = ({ pictureContents }) => {
  if (!pictureContents) {
    return <section className="text-center text-blue-800">No pictures fetched yet.</section>;
  }

  if (pictureContents === "error") {
    return <section className="text-center text-blue-800">Error fetching data. Please try again later.</section>;
  }

  return (
    <section className="flex flex-wrap justify-center gap-8 mt-6">
      {pictureContents.length > 0 ? (
        pictureContents.map((dog, index) => (
          <article key={index} className="p-4 m-4 border rounded-lg shadow-lg bg-white dark:bg-neutral-800 max-w-xs">
            <img 
              src={dog.url} 
              alt={`Dog image ${index + 1}`} 
              className="max-w-full h-auto rounded-lg mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4 text-center">Breed: {dog.breed.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              <strong>Temperament:</strong> {dog.breed.temperament}
            </p>
          </article>
        ))
      ) : (
        <section>No dog images available.</section>
      )}
    </section>
  );
};

export default Display;
