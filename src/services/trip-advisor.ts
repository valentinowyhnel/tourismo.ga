/**
 * Represents information about a destination, including its name, rating, and number of reviews.
 */
export interface DestinationInfo {
  /**
   * The name of the destination.
   */
  name: string;
  /**
   * The rating of the destination on a scale of 1 to 5.
   */
  rating: number;
  /**
   * The number of reviews for the destination.
   */
  reviewCount: number;
}

/**
 * Asynchronously retrieves destination information for a given location.
 *
 * @param location The location for which to retrieve destination information.
 * @returns A promise that resolves to a DestinationInfo object containing the destination's name, rating and review count.
 */
export async function getDestinationInfo(location: string): Promise<DestinationInfo> {
  // TODO: Implement this by calling an API.

  return {
    name: 'Loango National Park',
    rating: 4.5,
    reviewCount: 234,
  };
}
