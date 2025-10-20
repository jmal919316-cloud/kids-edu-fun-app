
# Fun Learn Kids App (React Web Version)

This is an interactive and fun educational application for children designed to teach letters, numbers, colors, and shapes in both Arabic and English. It includes engaging games, stories, and a rewards system.

This project is built with React, TypeScript, and Tailwind CSS.

## How to Run

This project is a single-page React application and can be run in any modern web browser that supports JavaScript.

1.  **Download the files:** Ensure you have all the provided files (`index.html`, `index.tsx`, `App.tsx`, and the `components`, `screens`, `data`, `context`, `hooks`, `types` directories) in a single project folder.
2.  **Serve the files:** You need a simple web server to run the application. If you have Node.js installed, you can use `npx serve`.
    ```bash
    # Navigate to the project directory
    cd /path/to/your/project

    # Install and run a simple server
    npx serve
    ```
3.  **Open in browser:** Open your web browser and navigate to the URL provided by the server (e.g., `http://localhost:3000`).

The application will start, and you will be prompted to select a language.

## Project Structure

-   `index.html`: The main HTML file, includes the Tailwind CSS CDN link.
-   `index.tsx`: The entry point of the React application.
-   `App.tsx`: The main application component that handles routing and global context.
-   `data/`: Contains all the static content for the app, including text translations and learning materials.
-   `components/`: Reusable UI components used across different screens (e.g., buttons, headers, ad banners).
-   `screens/`: Top-level components representing each screen of the app (e.g., Home, Learning, Game).
-   `context/`: React Context for managing global state like language, points, and subscription status.
-   `hooks/`: Custom React hooks for easy access to context.
-   `types.ts`: Global TypeScript type definitions.

## Future Development: Activating Real Ads

The application includes a simulated ad banner component (`components/AdBanner.tsx`). To implement real ads from a service like AdMob (using their web SDK), you would need to:

1.  **Sign up for an Ad service:** Create an account with Google AdMob or another ad provider.
2.  **Get Ad Unit IDs:** Create ad units in your provider's dashboard and get their unique IDs.
3.  **Install the SDK:** Add the provider's web SDK to your `index.html` file.
4.  **Modify the AdBanner component:** Replace the current placeholder `div` with the code provided by the ad SDK to display a real ad. You would initialize the ad using your Ad Unit ID.

**Example modification in `components/AdBanner.tsx`:**

```jsx
// This is a conceptual example. Refer to your ad provider's documentation.
import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    // This is where you would typically initialize the ad SDK
    // For example:
    // window.admob.initialize({ client: 'ca-pub-YOUR_CLIENT_ID' });
    // window.admob.showBanner({ adUnitId: 'YOUR_AD_UNIT_ID' });
  }, []);

  // The SDK might require a specific element ID to render the ad
  return <div id="ad-banner-container" className="w-full h-16 bg-gray-200 flex items-center justify-center"></div>;
};

export default AdBanner;
```
