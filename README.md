<img alt="Developer Wrapped" src="/public/og-image-2024.webp">

A personalized year-in-review for developers, showcasing key metrics and achievements.

## Overview

This project is a fun and interactive way to visualize a developer's year based on various data points like GitHub contributions, website traffic, and more. It utilizes Next.js, Tailwind CSS, and several custom components to create an engaging experience.

## Features

- **Interactive Components:** Uses custom components like `Tilt`, `AnimatedNumber`, `TextLoop`, and `TextEffect` to create an engaging user experience.
- **Modern Design:** Utilizes Tailwind CSS for styling and a sleek, modern aesthetic.
- **Responsive Layout:** Uses a grid system that adapts to different screen sizes, ensuring optimal viewing on all devices.
- **Custom Icons:** Includes custom icons for common development-related services.

## Technologies Used

- **Next.js:** A React framework for building server-rendered applications.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Heroicons:** A set of open-source icons.
- **Framer Motion:** For animations (through custom components).
- **Next Font:** For custom fonts (Geist Sans and Geist Mono).

## Getting Started

Follow these steps to get the project running locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/R4ULtv/developer-wrapped.git
    cd developer-wrapped
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the application in your browser:**

    Visit `http://localhost:3000` in your browser to view the application.

## Customization

You can customize the following aspects of the project:

-   **Data:** Update the values in the `page.js` component to reflect your personal metrics.
-   **Styling:** Customize the styling using Tailwind CSS classes within the `Card` components.
-   **Animations:** Modify the animation components (`components/animation`) to create unique effects.
-   **Icons:** Add custom icons by creating additional components in `utils/icons.js`.
-   **Layout:** Adjust the grid layout to accommodate additional cards.