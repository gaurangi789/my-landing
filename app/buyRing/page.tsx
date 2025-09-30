"use client";
import { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./page.module.css";

// Context for managing selections
interface SelectionContextType {
  selectedColor: string;
  selectedSize: string;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: string) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

// Hook to use selection context
const useSelection = () => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error('useSelection must be used within SelectionProvider');
  }
  return context;
};

const ringImages = [
  // Golden Ring Images
  { id: 1, src: '/goldenRing.avif', alt: 'Ring AIR Golden - View 1', color: 'golden' },
  { id: 2, src: '/goldenRing2.avif', alt: 'Ring AIR Golden - View 2', color: 'golden' },
  { id: 3, src: '/goldenRing3.avif', alt: 'Ring AIR Golden - View 3', color: 'golden' },
  
  // Black Ring Images
  { id: 4, src: '/blackRing1.avif', alt: 'Ring AIR Black - View 1', color: 'black' },
  { id: 5, src: '/blackRing2.avif', alt: 'Ring AIR Black - View 2', color: 'black' },
  { id: 6, src: '/blackRing3.avif', alt: 'Ring AIR Black - View 3', color: 'black' },
  
  // Titanium Ring Images
  { id: 7, src: '/titaniumRing1.avif', alt: 'Ring AIR Titanium - View 1', color: 'titanium' },
  { id: 8, src: '/titaniumRing2.avif', alt: 'Ring AIR Titanium - View 2', color: 'titanium' },
  { id: 9, src: '/titaniumRing3.avif', alt: 'Ring AIR Titanium - View 3', color: 'titanium' },
];

// Color options - 3 colors matching the images
const colorOptions = [
  { id: 'golden', name: 'Golden', value: 'GOLDEN', imageSrc: '/goldenRing.avif' },
  { id: 'black', name: 'Black', value: 'BLACK', imageSrc: '/blackRing1.avif' },
  { id: 'titanium', name: 'Titanium', value: 'TITANIUM', imageSrc: '/titaniumRing1.avif' },
];

// Size options
const sizeOptions = ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

// Selection Provider Component
function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedColor, setSelectedColor] = useState('GOLDEN');
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <SelectionContext.Provider value={{
      selectedColor,
      selectedSize,
      setSelectedColor,
      setSelectedSize
    }}>
      {children}
    </SelectionContext.Provider>
  );
}

// Ring Carousel Component
function RingCarousel() {
  const { selectedColor } = useSelection();
  
  // Filter images based on selected color
  const filteredImages = ringImages.filter(image => image.color === selectedColor.toLowerCase());
  
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={filteredImages.length > 1}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          className={styles.swiper}
          key={selectedColor} // Force re-render when color changes
        >
          {filteredImages.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className={styles.imageWrapper}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.ringImage}
                  priority={index === 0}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

    </div>
  );
}

// Product Selection Component
function ProductSelection() {
  const { selectedColor, selectedSize, setSelectedColor, setSelectedSize } = useSelection();

  const handleBuyClick = () => {
    console.log('=== RING SELECTION ===');
    console.log('Selected Color:', selectedColor);
    console.log('Selected Size:', selectedSize);
    console.log('=====================');
  };

  return (
    <div className={styles.selectionContainer}>
      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>Ring AIR</h1>
        <div className={styles.price}>₹28,499</div>
        <div className={styles.dispatchInfo}>Dispatched by : Tomorrow, Sep 30 (after size selection)</div>
      
        </div>

      {/* Color Selection */}
      <div className={styles.selectionSection}>
        <h3 className={styles.sectionTitle}>Colour. Choose your favourite finish.</h3>
        <div className={styles.colorGrid}>
          {colorOptions.map((color) => (
            <button
              key={color.id}
              className={`${styles.colorOption} ${selectedColor === color.value ? styles.selected : ''}`}
              onClick={() => setSelectedColor(color.value)}
            >
              <div className={styles.colorOptionContainer}>

              
                <div className={styles.colorPreview}>
                  <Image
                    src={color.imageSrc}
                    alt={color.name}
                    fill
                    className={styles.colorPreviewImage}
                  />
                </div>
                <span className={styles.colorName}>{color.name}</span>
              </div>
             
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className={styles.selectionSection}>
        <h3 className={styles.sectionTitle}>Size. Sizing kit recommended for best fit.</h3>
        <div className={styles.sizeGrid}>
          {sizeOptions.map((size) => (
            <button
              key={size}
              className={`${styles.sizeOption} ${selectedSize === size ? styles.selected : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Buy Button */}
      <button 
        className={styles.buyButton}
        onClick={handleBuyClick}
        disabled={!selectedSize}
      >
        Add to cart
      </button>
    </div>
  );
}

export default function BuyRing() {
  return (
    <SelectionProvider>
      <div className={styles.container}>
        <div className={styles.buyRingPage}>
          <div className={styles.buyRingPageLeft}>
            <RingCarousel />
          </div>
          <div className={styles.buyRingPageRight}>
            <ProductSelection />
          </div>
        </div>
      </div>
    </SelectionProvider>
  );
}


