"use client";
import React from "react";
import styles from "../../../app/page.module.css";
import supabase from "../../../lib/supabase";
import { useEffect, useState } from "react";

function Commissions() {
  const [fetchError, setFetchError] = useState(null);
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      const { data, error } = await supabase.from("artwork").select();

      if (error) {
        setFetchError("Could not fetch artwork");
        setArtwork(null);
        console.log(error);
      }

      if (data) {
        console.log(data);
        setArtwork(data);
        setFetchError(null);
      }
    };

    fetchArtwork();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <div>Content</div>
        {fetchError && <p>{fetchError}</p>}
        {artwork && (
          <div>
            {artwork.map((art) => (
              <div key={art.id}>
                <h2>{art.artwork_title}</h2>
                <p>{art.artwork_description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Commissions;
