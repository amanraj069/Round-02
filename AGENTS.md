## RULES (followed strictly)
- this product is strictly based on next js+ typescript+ tailwindcss
- make sure the typescript is followed everywhere in the UI
- Add small transitions and interactive elements wherever mendatory in the UI
- use framer-motion for transitions between the different sections or pages to make it look fluid and connected
- use sm: md: lg: as different breakpoints for different types of views, in order to provide a consistent mobile view
- focus on mobile design as well

## STRUCTURE OF THE PROJECT
- `app/` - put all the routes, layouts here
- `components/` - put all the components here
- `lib/` - put all the helper functions, constants, etc here
- `containers/` - page level layout sections (which are client heavy, can be placed here)
- `hooks/` - custom hoooks if needed, can be placed here
- `stores/` - use this if we are storing something client side
- `types/` - put all the typescript types here
- `utils/` - put all the utility functions here segregate them in folders if needed
- `styles/` - global css, and tailwaind base should be present here
- `public/` - static assets
- `constants/` - store all the constant data or text here

## COMPONENT RULES

- Default to server side components, add use client( that will be client side, only when needed)
- for naming, use Pascal case for components, camelCase for the functions, and UPPER_SNAKE_CASE for the constants across the applications


    