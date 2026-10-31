import React, { useState, useEffect, createContext, useContext } from 'react';

// Default realistic and stylized SVG data URIs for all slots so there are never broken images
export const DEFAULT_IMAGES: Record<string, string> = {
  ceo_portrait: '',
  member_1: '',
  member_2: '',
  member_3: '',
  member_4: '',
  member_5: '',
  member_6: '',
  mission_image: '',
  vision_image: '',
  step_1: '',
  step_2: '',
  step_3: '',
  step_4: '',
  step_5: '',
  step_6: '',
  contact_yard: '',
};

interface ImageContextType {
  images: Record<string, string>;
  updateImage: (key: string, url: string) => void;
  resetImage: (key: string) => void;
  resetAll: () => void;
}

const STORAGE_KEY = 'nandi_traders_custom_images';

const ImageContext = createContext<ImageContextType>({
  images: DEFAULT_IMAGES,
  updateImage: () => {},
  resetImage: () => {},
  resetAll: () => {},
});

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_IMAGES, ...JSON.parse(saved) };
      }
    } catch {
      // ignore storage error
    }
    return DEFAULT_IMAGES;
  });

  const updateImage = (key: string, url: string) => {
    setImages((prev) => {
      const updated = { ...prev, [key]: url };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore storage error
      }
      return updated;
    });
  };

  const resetImage = (key: string) => {
    setImages((prev) => {
      const updated = { ...prev, [key]: '' };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetAll = () => {
    setImages(DEFAULT_IMAGES);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <ImageContext.Provider value={{ images, updateImage, resetImage, resetAll }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
