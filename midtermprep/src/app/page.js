"use client";
import { useState } from "react";
import Button from "@/components/atoms/Button";
import Display from "@/components/molecules/Display";

export default function Home() {
  const [pictureContents, setPictureContents] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch function with error handling
  async function fetchPictures() {
    setLoading(true);
    const API_URL = "https://api.thedogapi.com/v1/images/search?limit=5&api_key=live_oE7uS6TjQS7M6XZixu0cW1Ns2YND8tHc198EMWsh4wxp0V4Qq9dsx96KHRoIYS8e";

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Handle case when the breed data is empty
      const dogsWithDetails = data.map(dog => {
        if (dog.breeds && dog.breeds.length > 0) {
          return {
            ...dog,
            breed: dog.breeds[0]
          };
        } else {
          return {
            ...dog,
            breed: {
              name: "Unknown breed",
              temperament: "Temperament unknown"
            }
          };
        }
      });

      setPictureContents(dogsWithDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPictureContents("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-3">
      <section className="text-center mb-6">
        <h1 className="text-3xl font-bold py-10 text-blue-800">DOGGY MIDTERMS</h1>
        <Button loading={loading} onClick={fetchPictures} />
      </section>

      <Display pictureContents={pictureContents} />
    </div>
  );
}
