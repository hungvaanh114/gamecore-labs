export type Testimonial = { quote: string; name: string; role?: string; company?: string };

// Add only testimonials that have been approved for publication.
export const testimonials: Testimonial[] = [];
