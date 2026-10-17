import { useEffect } from 'react';

/**
 * SEO helper component to dynamically update document title and meta description.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | CourierFranchisesEnquiry`;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);

  return null;
}
