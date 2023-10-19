"use client";

import { SafeListing, SafeUser } from "../types";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading 
        title="Favorites"
        subtitle="List of place you have favorited!"
      />

      <div className='
        mt-10 grid gird-cols-1 sm:gird-cols-2 md:grid-cols-3 lg:gird-cols-4
        xl:grid-cols-5 2xl:gird-cols-6 gap-8'>
          {listings.map((listing) => (
            <ListingCard 
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
      </div>
    </Container>
  );
}

export default FavoritesClient;