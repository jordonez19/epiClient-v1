export const MENUITEMS = [
  {
    menutitle: "Main",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        type: "link",
        active: false,
        selected: false,
        title: "Inicio",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/ingles`,
        type: "link",
        active: false,
        selected: false,
        title: "Escuelas",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24" fill="rgba(192,192,192,1)"><path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path></svg>
        )
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/universities`,
        type: "link",
        active: false,
        selected: false,
        title: "Universidades",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24" fill="rgba(173,184,194,1)"><path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path></svg>
        ),
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/ciudades`,
        type: "link",
        active: false,
        selected: false,
        title: "Ciudades",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z" fill="#000000" />
          </svg>
        )
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/porque-epi`,
        type: "link",
        active: false,
        selected: false,
        title: "¿Por qué EPI?",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z" fill="#000000" />
          </svg>
        )
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/noticias`,
        type: "link",
        active: false,
        selected: false,
        title: "Noticias",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z" fill="#000000" />
          </svg>
        )
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/perfil`,
        type: "link",
        active: false,
        selected: false,
        title: "Perfil",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z" fill="#000000" />
          </svg>
        )
      },

    ],
  },
];
