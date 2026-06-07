import { createContext, useState, ReactNode } from "react";

const BookingContext = createContext({});

export function BookingProvider({ 
  children 
}:{ 
  children: ReactNode; 
}){
  const [selectTrip, setSelectTrip] = useState(null);
  const [selectSeat, setSelectSeat] = useState<number | null>(null);

  return (
    <BookingContext.Provider value={{
      selectTrip,
      selectSeat,
      setSelectTrip,
      setSelectSeat
    }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export default BookingContext;