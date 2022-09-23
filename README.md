## Sociality.io Case Study

The case is a one-page frontend app will be developed that has a sidebar including the brand switching tab and an accordion menu and has the content area including the social media posts.

This project utilizes [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) and [React](https://github.com/facebook/react) coupled with [react-router-dom@6](https://github.com/remix-run/react-router), [react-image-fallback](https://github.com/socialtables/react-image-fallback) and [uuid](https://github.com/uuidjs/uuid).

Provided JSON data is consumed with ```.reverse()``` and ```.map()``` to be in the correct order. Given time content is formatted with ```Intl.DateTimeFormat```. 

Since it is a standalone build, undefined companyName params are redirected to the solution page, which is ```socialorientation_test/publish/feed``` via ```useNavigate```, thus the homepage goes there, too. For other menu options like Engage or Report, default boilerplate pages are created to be used through ```<Outlet/>```.




