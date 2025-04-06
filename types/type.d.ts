export interface DriverCardProps {
  item: {
    id: number;
    profile_image_url: string;
    title: string;
    price: number;
    time: string;
    car_seats: number;
    car_image_url: string;
  };
  selected: boolean; // Ensure this is a boolean
  setSelected: () => void; // Ensure this is a function
}
